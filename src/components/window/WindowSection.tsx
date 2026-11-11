import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import { getAppById } from "../../config/apps";
import Window from "./Window";
import ErrorDialog from "../error/ErrorDialog";

export const WindowSection: React.FC = () => {
  const { windows, errorWindows } = useWindowManager();
  const firstError = errorWindows.find(
    (errorState) => errorState.id === "error0",
  );

  return (
    <div id="window-section">
      {windows.map((winState) => {
        const app = getAppById(winState.id);
        if (!app) return null;
        return <Window key={winState.id} app={app} windowState={winState} />;
      })}
      {firstError && <ErrorDialog errorState={firstError} />}
    </div>
  );
};

export default WindowSection;
