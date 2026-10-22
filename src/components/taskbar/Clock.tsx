import React from "react";
import useClock from "../../hooks/useClock";

export const Clock: React.FC = () => {
  const { formatted } = useClock();

  return (
    <div className="footer-section status-bar-field">
      <span id="time">{formatted}</span>
    </div>
  );
};

export default Clock;
