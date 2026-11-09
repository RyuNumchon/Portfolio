import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import { getAppById } from "../../config/apps";
import Window from "./Window";
import ErrorDialog from "../error/ErrorDialog";

export const WindowSection: React.FC = () => {
  const { windows, errorWindows } = useWindowManager();

  return (
    <div id="window-section">
      {windows.map((winState) => {
        const app = getAppById(winState.id);
        if (!app) return null;
        return <Window key={winState.id} app={app} windowState={winState} />;
      })}
      {errorWindows.map((errorState) => (
        <ErrorDialog key={errorState.id} errorState={errorState} />
      ))}
    </div>
  );
};

export default WindowSection;
