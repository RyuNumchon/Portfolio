import React from "react";
import Icon from "../common/Icon";

export interface DesktopIconProps {
  id?: string;
  label: string;
  icon: string;
  onClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      id={id}
      className="content"
      type="button"
      onClick={onClick}
    >
      <div className="icon">
        <Icon className="icon-pic" src={icon} alt={label} />
      </div>
      <div className="icon-name">{label}</div>
    </button>
  );
};

export default DesktopIcon;
