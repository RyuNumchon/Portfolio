import React from "react";
import Icon from "./Icon";

interface FolderItemProps {
  label: string;
  icon: string;
  onClick: () => void;
  className?: string;
}

export const FolderItem: React.FC<FolderItemProps> = ({
  label,
  icon,
  onClick,
  className = "content",
}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <div className="icon">
        <Icon className="icon-pic infolder" src={icon} alt={label} />
      </div>
      <div className="icon-name">{label}</div>
    </button>
  );
};

export default FolderItem;
