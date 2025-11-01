import React, { useRef, useEffect } from "react";
import { useWindowManager } from "../hooks/windowManager";

const WindowSection: React.FC = () => {
  const { windows, closeWindow, bringToFront, toggleMaximize } =
    useWindowManager();

  // simple drag implementation per-window using pointer events
  useEffect(() => {
    const makeDraggable = (el: HTMLElement | null) => {
      if (!el) return;
      const header = el.querySelector(".title-bar") as HTMLElement | null;
      let startX = 0,
        startY = 0,
        origX = 0,
        origY = 0;

      const onPointerDown = (e: PointerEvent) => {
        const win = windows.find((w) => w.id === el.id);
        // don't drag when maximized
        if (win && win.isMax) return;
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        origX = el.offsetLeft;
        origY = el.offsetTop;
        (document as any).onpointermove = onPointerMove;
        (document as any).onpointerup = onPointerUp;
      };

      const onPointerMove = (e: PointerEvent) => {
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const winW =
          document.documentElement.clientWidth || document.body.clientWidth;
        const winH =
          document.documentElement.clientHeight || document.body.clientHeight;
        const maxX = winW - el.offsetWidth;
        const maxY = winH - el.offsetHeight - 55; // account for footer/start bar

        let newLeft = origX + dx;
        let newTop = origY + dy;

        if (newLeft < 0) newLeft = 0;
        if (newLeft > maxX) newLeft = maxX;
        if (newTop < 0) newTop = 0;
        if (newTop > maxY) newTop = maxY;

        el.style.left = newLeft + "px";
        el.style.top = newTop + "px";
      };

      const onPointerUp = () => {
        (document as any).onpointermove = null;
        (document as any).onpointerup = null;
      };

      header?.addEventListener("pointerdown", onPointerDown as any);
      // cleanup handler
      return () =>
        header?.removeEventListener("pointerdown", onPointerDown as any);
    };

    // attach to existing windows
    const els = Array.from(
      document.querySelectorAll("#window-section .window")
    ) as HTMLElement[];
    const cleanups = els.map((el) => makeDraggable(el));

    return () => {
      cleanups.forEach((f) => f && (f as any)());
    };
  }, [windows]);

  return (
    <div id="window-section">
      {windows.map((win) => (
        <div
          key={win.id}
          id={win.id}
          className="window"
          onPointerDown={() => bringToFront(win.id)}
          style={{
            top: typeof win.top === "number" ? `${win.top}px` : win.top ?? "5%",
            left:
              typeof win.left === "number" ? `${win.left}px` : win.left ?? "5%",
            width: win.width ?? undefined,
            height: win.height ?? undefined,
            zIndex: win.z ?? undefined,
          }}
        >
          <div className="title-bar" id={`${win.id}-header`}>
            <div className="title-bar-text">{win.title}</div>
            <div className="title-bar-controls">
              <button
                aria-label="Maximize"
                onClick={() => toggleMaximize(win.id)}
              >
                ▢
              </button>
              <button aria-label="Close" onClick={() => closeWindow(win.id)}>
                ✕
              </button>
            </div>
          </div>
          <div className="window-body">{win.content}</div>
        </div>
      ))}
    </div>
  );
};

export default WindowSection;
