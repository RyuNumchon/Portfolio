import { useRef, useEffect } from "react";

interface UseDraggableOptions {
  isMaximized?: boolean;
  onFocus?: () => void;
}

export function useDraggable(
  elementRef: React.RefObject<HTMLElement | null>,
  options: UseDraggableOptions = {}
) {
  const { isMaximized = false, onFocus } = options;

  const dragData = useRef<{
    isDragging: boolean;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  }>({
    isDragging: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    // Bring window to front
    if (onFocus) onFocus();

    // Do not initiate drag when clicking interactive elements
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === "button" || target.closest("button")) {
      return;
    }

    // Do not drag if currently maximized
    if (isMaximized) return;

    const el = elementRef.current;
    if (!el) return;

    e.preventDefault();
    dragData.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: el.offsetLeft,
      origY: el.offsetTop,
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!dragData.current.isDragging || !elementRef.current) return;
      moveEvent.preventDefault();

      const dx = moveEvent.clientX - dragData.current.startX;
      const dy = moveEvent.clientY - dragData.current.startY;

      const winW =
        document.documentElement.clientWidth || document.body.clientWidth;
      const winH =
        document.documentElement.clientHeight || document.body.clientHeight;

      const maxX = winW - elementRef.current.offsetWidth;
      const maxY = winH - elementRef.current.offsetHeight - 55; // account for taskbar height

      let newLeft = dragData.current.origX + dx;
      let newTop = dragData.current.origY + dy;

      if (newLeft < 0) newLeft = 0;
      if (newLeft > maxX) newLeft = maxX;
      if (newTop < 0) newTop = 0;
      if (newTop > maxY) newTop = maxY;

      elementRef.current.style.left = `${newLeft}px`;
      elementRef.current.style.top = `${newTop}px`;
    };

    const handlePointerUp = () => {
      dragData.current.isDragging = false;
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  return {
    handlePointerDown,
  };
}

export default useDraggable;
