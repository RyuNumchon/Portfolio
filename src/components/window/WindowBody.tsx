import React, { ReactNode } from "react";

export interface WindowBodyProps {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export const WindowBody: React.FC<WindowBodyProps> = ({
  className,
  children,
  style,
}) => {
  const finalClassName = className ? `window-body ${className}` : "window-body";

  return (
    <div className={finalClassName} style={style}>
      {children}
    </div>
  );
};

export default WindowBody;
