import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import ErrorDialog from "./ErrorDialog";

export const MessageStack: React.FC = () => {
  const { errorWindows } = useWindowManager();
  const duplicates = errorWindows.filter((e) => e.id !== "error0");

  return (
    <section id="message-stack">
      {duplicates.map((err) => (
        <ErrorDialog key={err.id} errorState={err} />
      ))}
    </section>
  );
};

export default MessageStack;
