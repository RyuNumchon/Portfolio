import React from "react";
import Icon from "../common/Icon";
import TitleBarControls from "./TitleBarControls";

interface TitleBarProps {
  id: string;
  title: string;
  icon?: string;
  hasMaximize?: boolean;
  hasClose?: boolean;
  onMaximize?: () => void;
  onClose?: () => void;
  onPointerDown?: (e: React.PointerEvent) => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  id,
  title,
  icon,
  hasMaximize = true,
  hasClose = true,
  onMaximize,
  onClose,
  onPointerDown,
}) => {
  return (
    <div id={`${id}-header`} className="title-bar" onPointerDown={onPointerDown}>
      <div className="title-bar-text">
        {icon && <Icon className="icon-pic" src={icon} alt={title} />}
        {title}
      </div>
      <TitleBarControls
        idPrefix={id}
        hasMaximize={hasMaximize}
        hasClose={hasClose}
        onMaximize={onMaximize}
        onClose={onClose}
      />
    </div>
  );
};

export default TitleBar;
