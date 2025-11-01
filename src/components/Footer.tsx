import React from "react";
import { useWindowManager } from "../hooks/windowManager";
import useClock from "../hooks/useClock";

const Footer: React.FC = () => {
  const { toggleStart } = useWindowManager();
  const { formatted } = useClock();

  return (
    <footer id="footer">
      <div className="status-bar">
        <div className="footer-section">
          <button id="start-button" onClick={toggleStart}>
            Menu
          </button>
        </div>

        <div className="footer-section status-bar-field">
          <span id="time">{formatted}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
