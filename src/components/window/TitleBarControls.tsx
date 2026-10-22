import React from "react";

interface TitleBarControlsProps {
  idPrefix: string;
  hasMaximize?: boolean;
  hasClose?: boolean;
  onMaximize?: () => void;
  onClose?: () => void;
}

export const TitleBarControls: React.FC<TitleBarControlsProps> = ({
  idPrefix,
  hasMaximize = true,
  hasClose = true,
  onMaximize,
  onClose,
}) => {
  return (
    <div className="title-bar-controls">
      {hasMaximize && (
        <button
          id={`${idPrefix}-max`}
          className="max-button"
          aria-label="Maximize"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onMaximize) onMaximize();
          }}
        />
      )}
      {hasClose && (
        <button
          id={`${idPrefix}-close`}
          className="close-button"
          aria-label="Close"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) onClose();
          }}
        />
      )}
    </div>
  );
};

export default TitleBarControls;
