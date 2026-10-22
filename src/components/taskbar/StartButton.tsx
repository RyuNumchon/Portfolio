import React from "react";
import { useWindowManager } from "../../context/WindowContext";

export const StartButton: React.FC = () => {
  const { toggleStart } = useWindowManager();

  return (
    <div className="footer-section">
      <button id="start-button" type="button" onClick={toggleStart}>
        Menu
      </button>
    </div>
  );
};

export default StartButton;
