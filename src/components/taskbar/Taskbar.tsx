import React from "react";
import StartButton from "./StartButton";
import Clock from "./Clock";
import Icon from "../common/Icon";
import { getAppById } from "../../config/apps";
import { ICONS } from "../../config/icons";
import { useWindowManager } from "../../context/WindowContext";

export const Taskbar: React.FC = () => {
  const { windows, errorWindows, bringToFront, closeStart } =
    useWindowManager();
  const taskbarItems = [
    ...windows.flatMap((windowState) => {
      const app = getAppById(windowState.id);
      return app
        ? [
            {
              id: windowState.id,
              title: app.title,
              icon: app.icon,
              zIndex: windowState.zIndex,
              taskbarOrder: windowState.taskbarOrder,
            },
          ]
        : [];
    }),
    ...errorWindows.map((errorState) => ({
      id: errorState.id,
      title: errorState.index === 0 ? "Error" : `Error ${errorState.index + 1}`,
      icon: ICONS.msgError,
      zIndex: errorState.zIndex,
      taskbarOrder: errorState.taskbarOrder,
    })),
  ].sort((a, b) => a.taskbarOrder - b.taskbarOrder);
  const highestZIndex = taskbarItems.reduce(
    (highest, item) => Math.max(highest, item.zIndex),
    Number.NEGATIVE_INFINITY,
  );
  const frontWindowId = taskbarItems.find(
    (item) => item.zIndex === highestZIndex,
  )?.id;

  return (
    <footer id="footer">
      <div className="status-bar">
        <StartButton />
        <div className="taskbar-window-list" aria-label="Open windows">
          {taskbarItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="taskbar-window-tab"
              aria-pressed={item.id === frontWindowId}
              title={item.title}
              onClick={() => {
                bringToFront(item.id);
                closeStart();
              }}
            >
              <Icon src={item.icon} alt="" aria-hidden="true" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <Clock />
      </div>
    </footer>
  );
};

export default Taskbar;
