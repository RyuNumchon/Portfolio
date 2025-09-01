import React, { useState } from "react";

interface WindowData {
  id: string;
  title: string;
  content: React.ReactNode;
}

const initialWindows: WindowData[] = [];

const WindowSection: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>(initialWindows);

  // TODO: Add logic to open/close windows via context or props

  return (
    <div id="window-section">
      {windows.map((win) => (
        <div key={win.id} className="window" id={win.id}>
          <div className="title-bar">
            <span className="title-bar-text">{win.title}</span>
            <div className="title-bar-controls">
              <button aria-label="Close">X</button>
            </div>
          </div>
          <div className="window-body">{win.content}</div>
        </div>
      ))}
    </div>
  );
};

export default WindowSection;
