import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface AppWindow {
  id: string;
  title: string;
  content: ReactNode;
  top?: number | string;
  left?: number | string;
  width?: string;
  height?: string;
  z?: number;
  isMax?: boolean;
  // store original geometry when maximized
  ogTop?: string;
  ogLeft?: string;
  ogWidth?: string;
  ogHeight?: string;
}

interface WindowContextValue {
  windows: AppWindow[];
  openWindow: (w: AppWindow) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  toggleMaximize: (id: string) => void;
  duplicateError: () => void;
  toggleStart: () => void;
  startOpen: boolean;
}

const WindowContext = createContext<WindowContextValue | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [zCounter, setZCounter] = useState<number>(1);
  const [windows, setWindows] = useState<AppWindow[]>([]);
  const [startOpen, setStartOpen] = useState(false);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [errX, setErrX] = useState<number>(15);
  const [errY, setErrY] = useState<number>(12);

  const openWindow = (w: AppWindow) => {
    // avoid duplicates
    const exists = windows.find((win) => win.id === w.id);
    if (exists) {
      bringToFront(w.id);
      return;
    }
    const newZ = Date.now();
    const withZ = { ...w, z: newZ } as AppWindow;
    setWindows((prev) => [...prev, withZ]);
  };

  const duplicateError = () => {
    // create a new error window with incremental position
    const next = errorCount + 1;
    const id = `error${next}`;
    const top = `${errY}%`;
    const left = `${errX}%`;

    const onOkContent = (
      <div style={{ padding: 8 }}>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ marginRight: "1rem" }}
            src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fmsg_error-0.png?alt=media&token=aae346fd-aadd-4d8c-8743-8ba3dc534a14"
            alt="error"
          />
          Click 'OK' to continue
        </p>
        <button onClick={() => duplicateError()}>OK</button>
      </div>
    );

    openWindow({
      id,
      title: "Error",
      content: onOkContent,
      top,
      left,
      width: "40%",
      height: "25%",
    });
    setErrorCount(next);
    setErrX((x) => (x + 3) % 70);
    setErrY((y) => (y + 3) % 70);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id: string) => {
    const newZ = Date.now();
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, z: newZ } : w))
    );
  };

  const toggleMaximize = (id: string) => {
    const newZ = Date.now();
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w;
        if (!w.isMax) {
          // maximize: store original geometry and set full size
          return {
            ...w,
            ogTop:
              typeof w.top === "number"
                ? `${w.top}px`
                : (w.top as string | undefined) || "0px",
            ogLeft:
              typeof w.left === "number"
                ? `${w.left}px`
                : (w.left as string | undefined) || "0px",
            ogWidth: w.width || "",
            ogHeight: w.height || "",
            top: 0,
            left: 0,
            width: "99.7%",
            height: "99.5%",
            isMax: true,
            z: newZ,
          };
        }
        // restore
        return {
          ...w,
          top: w.ogTop || undefined,
          left: w.ogLeft || undefined,
          width: w.ogWidth || undefined,
          height: w.ogHeight || undefined,
          isMax: false,
          z: newZ,
        };
      })
    );
  };

  const toggleStart = () => setStartOpen((s) => !s);

  // Close start menu when clicking outside of its area (similar to original project behavior)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!startOpen) return;
      const el = document.getElementById("start-box");
      const startBtn = document.getElementById("start-button");
      const target = e.target as Node;
      if (el && (el === target || el.contains(target))) return;
      if (startBtn && (startBtn === target || startBtn.contains(target)))
        return;
      setStartOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [startOpen]);

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        bringToFront,
        toggleMaximize,
        duplicateError,
        toggleStart,
        startOpen,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowManager = () => {
  const ctx = useContext(WindowContext);
  if (!ctx)
    throw new Error("useWindowManager must be used within WindowProvider");
  return ctx;
};
