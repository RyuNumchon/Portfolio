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

      const taskbarHeight = document.getElementById("footer")?.offsetHeight ?? 55;
      const maxX = Math.max(0, winW - elementRef.current.offsetWidth);
      const maxY = Math.max(
        0,
        winH - elementRef.current.offsetHeight - taskbarHeight,
      );
      const newLeft = Math.min(
        maxX,
        Math.max(0, dragData.current.origX + dx),
      );
      const newTop = Math.min(maxY, Math.max(0, dragData.current.origY + dy));

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
