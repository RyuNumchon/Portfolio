import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import { appsConfig } from "../../config/apps";
import DesktopIcon from "./DesktopIcon";

export const Desktop: React.FC = () => {
  const { openWindow } = useWindowManager();

  const desktopApps = appsConfig
    .filter((app) => app.desktop)
    .sort((a, b) => (a.desktop?.order ?? 99) - (b.desktop?.order ?? 99));

  return (
    <div className="desktop">
      {desktopApps.map((app) => (
        <DesktopIcon
          key={app.id}
          id={app.desktop?.id}
          label={app.desktop?.label || app.title}
          icon={app.desktop?.icon || app.icon}
          onClick={() => openWindow(app.id)}
        />
      ))}
    </div>
  );
};

export default Desktop;
