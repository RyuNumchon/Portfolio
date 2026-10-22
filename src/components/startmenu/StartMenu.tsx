import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import { appsConfig } from "../../config/apps";
import { ICONS } from "../../config/icons";
import StartMenuHeader from "./StartMenuHeader";
import StartMenuItem from "./StartMenuItem";

export const StartMenu: React.FC = () => {
  const { startOpen, openWindow, closeStart, openError } = useWindowManager();

  const startApps = appsConfig
    .filter((app) => app.startMenu)
    .sort((a, b) => (a.startMenu?.order ?? 99) - (b.startMenu?.order ?? 99));

  return (
    <div id="start-box" style={{ display: startOpen ? "block" : "none" }}>
      <StartMenuHeader title="Hello World!" />

      <div id="start-tray">
        {startApps.map((app) => (
          <StartMenuItem
            key={app.id}
            label={app.startMenu?.label || app.title}
            icon={app.startMenu?.icon || app.icon}
            underlinedLetter={app.startMenu?.underlinedLetter}
            className={app.startMenu?.className}
            onClick={() => {
              openWindow(app.id);
              closeStart();
            }}
          />
        ))}

        {/* Authentic Minesweeper error trigger */}
        <StartMenuItem
          label="Minesweeper"
          icon={ICONS.minesweeper}
          underlinedLetter="M"
          className="shut"
          onClick={() => {
            openError();
            closeStart();
          }}
        />
      </div>
    </div>
  );
};

export default StartMenu;
