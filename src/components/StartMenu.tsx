import React from 'react';

const StartMenu: React.FC = () => {
  return (
    <div id="start-box">
      <div id="start-header">
        <span id="start-header-name">Hello World!</span>
      </div>
      <div id="start-tray">
        <button className="start-item">
          <div className="start-item-holder"></div>
        </button>
        <button className="start-item"></button>
        <button className="start-item"></button>
        <button className="start-item"></button>
        <button className="start-item"></button>
        <button className="start-item"></button>
        <button className="start-item shut"></button>
      </div>
    </div>
  );
};

export default StartMenu;
