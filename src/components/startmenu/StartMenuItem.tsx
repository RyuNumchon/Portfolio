import React from "react";
import Icon from "../common/Icon";

export interface StartMenuItemProps {
  label: string;
  icon: string;
  underlinedLetter?: string;
  className?: string;
  onClick: () => void;
}

const renderUnderlinedLabel = (label: string, letter?: string) => {
  if (!letter) return label;
  const index = label.toLowerCase().indexOf(letter.toLowerCase());
  if (index === -1) return label;
  return (
    <>
      {label.slice(0, index)}
      <u>{label[index]}</u>
      {label.slice(index + 1)}
    </>
  );
};

export const StartMenuItem: React.FC<StartMenuItemProps> = ({
  label,
  icon,
  underlinedLetter,
  className = "",
  onClick,
}) => {
  const fullClassName = className ? `start-item ${className}` : "start-item";

  return (
    <button className={fullClassName} type="button" onClick={onClick}>
      <div className="start-item-holder">
        <Icon src={icon} alt={label} />
        <span>{renderUnderlinedLabel(label, underlinedLetter)}</span>
      </div>
    </button>
  );
};

export default StartMenuItem;
