import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { WindowState, ErrorWindowState } from "../types/app";

interface WindowContextValue {
  windows: WindowState[];
  errorWindows: ErrorWindowState[];
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  toggleMaximize: (id: string, el?: HTMLElement) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  startOpen: boolean;
  toggleStart: () => void;
  closeStart: () => void;
  openError: () => void;
  duplicateError: () => void;
}

const WindowContext = createContext<WindowContextValue | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [errorWindows, setErrorWindows] = useState<ErrorWindowState[]>([]);
  const [startOpen, setStartOpen] = useState(false);

  // Global z-index counter matching original var z = 1
  const zCounter = useRef<number>(1);
  const taskbarOrderCounter = useRef<number>(0);

  const getNextZ = () => {
    zCounter.current += 1;
    return zCounter.current;
  };

  const getNextTaskbarOrder = () => {
    taskbarOrderCounter.current += 1;
    return taskbarOrderCounter.current;
  };

  const openWindow = (id: string) => {
    if (id === "error0") {
      openError();
      return;
    }

    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        // Bring to front
        const newZ = getNextZ();
        return prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w));
      }
      const newZ = getNextZ();
      return [
        ...prev,
        {
          id,
          zIndex: newZ,
          taskbarOrder: getNextTaskbarOrder(),
          isMaximized: false,
        },
      ];
    });
  };

  const openError = () => {
    setErrorWindows((prev) => {
      if (prev.some((e) => e.id === "error0")) {
        // Already open, bring to front
        const newZ = getNextZ();
        return prev.map((e) =>
          e.id === "error0" ? { ...e, zIndex: newZ } : e,
        );
      }
      return [
        ...prev,
        {
          id: "error0",
          index: 0,
          x: 42,
          y: 43,
          zIndex: getNextZ(),
          taskbarOrder: getNextTaskbarOrder(),
        },
      ];
    });
  };

  const duplicateError = () => {
    setErrorWindows((prev) => {
      let nextIndex = 1;
      while (prev.some((error) => error.index === nextIndex)) {
        nextIndex += 1;
      }

      const cascadeOffset = nextIndex - 1;
      const x = 15 + cascadeOffset * 3;
      const y = 12 + cascadeOffset * 3;
      if (x > 60 || y > 70) return prev;

      const id = `error${nextIndex}`;
      const newZ = getNextZ();
      return [
        ...prev,
        {
          id,
          index: nextIndex,
          x,
          y,
          zIndex: newZ,
          taskbarOrder: getNextTaskbarOrder(),
        },
      ];
    });
  };

  const closeWindow = (id: string) => {
    if (id.startsWith("error")) {
      setErrorWindows((prev) => prev.filter((e) => e.id !== id));
    } else {
      setWindows((prev) => prev.filter((w) => w.id !== id));
    }
  };

  const bringToFront = (id: string) => {
    const newZ = getNextZ();
    if (id.startsWith("error")) {
      setErrorWindows((prev) =>
        prev.map((e) => (e.id === id ? { ...e, zIndex: newZ } : e)),
      );
    } else {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w)),
      );
    }
  };

  const toggleMaximize = (id: string, el?: HTMLElement) => {
    const newZ = getNextZ();
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w;
        if (!w.isMaximized) {
          // Maximize: save current geometry
          let savedGeometry = w.savedGeometry;
          if (el) {
            savedGeometry = {
              top: el.style.top || "",
              left: el.style.left || "",
              width: el.style.width || "",
              height: el.style.height || "",
            };
          }
          return {
            ...w,
            isMaximized: true,
            zIndex: newZ,
            savedGeometry,
          };
        } else {
          // Restore
          return {
            ...w,
            isMaximized: false,
            zIndex: newZ,
          };
        }
      }),
    );
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position: { x, y } } : w)),
    );
  };

  const toggleStart = () => {
    setStartOpen((prev) => !prev);
  };

  const closeStart = () => {
    setStartOpen(false);
  };

  // Close Start menu on click outside (matching original start.js closeStart logic)
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!startOpen) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const startBox = document.getElementById("start-box");
      const startButton = document.getElementById("start-button");

      if (startBox && startBox.contains(target)) return;
      if (startButton && startButton.contains(target)) return;

      setStartOpen(false);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [startOpen]);

  return (
    <WindowContext.Provider
      value={{
        windows,
        errorWindows,
        openWindow,
        closeWindow,
        bringToFront,
        toggleMaximize,
        updateWindowPosition,
        startOpen,
        toggleStart,
        closeStart,
        openError,
        duplicateError,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowManager = (): WindowContextValue => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindowManager must be used within a WindowProvider");
  }
  return context;
};
