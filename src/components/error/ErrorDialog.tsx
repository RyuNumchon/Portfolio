import React, { useRef } from "react";
import { ErrorWindowState } from "../../types/app";
import { useWindowManager } from "../../context/WindowContext";
import { useDraggable } from "../../hooks/useDraggable";
import { ICONS } from "../../config/icons";
import Icon from "../common/Icon";
import TitleBarControls from "../window/TitleBarControls";
import WindowBody from "../window/WindowBody";

export interface ErrorDialogProps {
  errorState: ErrorWindowState;
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({ errorState }) => {
  const { closeWindow, bringToFront, duplicateError } = useWindowManager();
  const windowRef = useRef<HTMLDivElement>(null);

  const { handlePointerDown } = useDraggable(windowRef, {
    onFocus: () => bringToFront(errorState.id),
  });

  const style: React.CSSProperties = {
    zIndex: errorState.zIndex,
  };

  if (errorState.index > 0) {
    style.top = `${errorState.y}%`;
    style.left = `${errorState.x}%`;
  }

  return (
    <div
      ref={windowRef}
      id={errorState.id}
      className="window error"
      style={style}
      onPointerDown={() => bringToFront(errorState.id)}
    >
      <div
        id={`${errorState.id}-header`}
        className="title-bar"
        onPointerDown={handlePointerDown}
      >
        <div className="title-bar-text">Error</div>
        <TitleBarControls
          idPrefix={errorState.id}
          hasMaximize={false}
          hasClose={true}
          onClose={() => closeWindow(errorState.id)}
        />
      </div>

      <WindowBody>
        <p style={{ display: "flex", alignItems: "center" }}>
          <Icon
            style={{ marginRight: "1rem" }}
            src={ICONS.msgError}
            alt="error"
          />
          Click 'OK' to continue
        </p>
        <button id="ok-button" type="button" onClick={() => duplicateError()}>
          OK
        </button>
      </WindowBody>
    </div>
  );
};

export default ErrorDialog;
