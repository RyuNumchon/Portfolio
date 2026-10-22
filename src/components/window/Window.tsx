import React, { useRef, useEffect } from "react";
import { AppDefinition, WindowState } from "../../types/app";
import { useWindowManager } from "../../context/WindowContext";
import { useDraggable } from "../../hooks/useDraggable";
import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import WindowBody from "./WindowBody";

export interface WindowProps {
  app: AppDefinition;
  windowState: WindowState;
}

export const Window: React.FC<WindowProps> = ({ app, windowState }) => {
  const { closeWindow, bringToFront, toggleMaximize } = useWindowManager();
  const windowRef = useRef<HTMLDivElement>(null);

  const { handlePointerDown } = useDraggable(windowRef, {
    isMaximized: windowState.isMaximized,
    onFocus: () => bringToFront(app.id),
  });

  // Restore saved geometry or clear dimensions when toggling maximize
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    if (windowState.isMaximized) {
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "99.7%";
      el.style.height = "99.5%";
    } else if (windowState.savedGeometry) {
      el.style.top = windowState.savedGeometry.top;
      el.style.left = windowState.savedGeometry.left;
      el.style.width = windowState.savedGeometry.width;
      el.style.height = windowState.savedGeometry.height;
    }
  }, [windowState.isMaximized, windowState.savedGeometry]);

  const Component = app.component;

  return (
    <div
      ref={windowRef}
      id={app.id}
      className="window"
      style={{ zIndex: windowState.zIndex }}
      onPointerDown={() => bringToFront(app.id)}
    >
      <TitleBar
        id={app.id}
        title={app.title}
        icon={app.icon}
        hasMaximize={app.hasMaximize !== false}
        hasClose={app.hasClose !== false}
        onMaximize={() => toggleMaximize(app.id, windowRef.current ?? undefined)}
        onClose={() => closeWindow(app.id)}
        onPointerDown={handlePointerDown}
      />

      {app.hasOptionsBar && <MenuBar />}

      <WindowBody className={app.windowBodyClass}>
        <Component />
      </WindowBody>
    </div>
  );
};

export default Window;
