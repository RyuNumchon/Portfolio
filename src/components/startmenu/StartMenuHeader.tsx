import React from "react";

export interface StartMenuHeaderProps {
  title?: string;
}

export const StartMenuHeader: React.FC<StartMenuHeaderProps> = ({
  title = "Hello World!",
}) => {
  return (
    <div id="start-header">
      <span id="start-header-name">{title}</span>
    </div>
  );
};

export default StartMenuHeader;
