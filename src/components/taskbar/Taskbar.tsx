import React from "react";
import StartButton from "./StartButton";
import Clock from "./Clock";

export const Taskbar: React.FC = () => {
  return (
    <footer id="footer">
      <div className="status-bar">
        <StartButton />
        <Clock />
      </div>
    </footer>
  );
};

export default Taskbar;
