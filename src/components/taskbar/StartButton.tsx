import React, { useEffect, useRef, useState } from "react";
import { useWindowManager } from "../../context/WindowContext";
import { ThemeName, useTheme } from "../../context/ThemeContext";

const themes: { id: ThemeName; label: string }[] = [
  { id: "default", label: "DEFAULT" },
  { id: "simple", label: "SIMPLE" },
];

export const StartButton: React.FC = () => {
  const { toggleStart } = useWindowManager();
  const { theme, setTheme } = useTheme();
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!themeMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!themeControlRef.current?.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setThemeMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [themeMenuOpen]);

  return (
    <div className="footer-section theme-control" ref={themeControlRef}>
      <button
        id="start-button"
        type="button"
        aria-haspopup="menu"
        aria-expanded={themeMenuOpen}
        onClick={() => {
          setThemeMenuOpen(false);
          toggleStart();
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          setThemeMenuOpen((open) => !open);
        }}
      >
        Menu
      </button>
      {themeMenuOpen && (
        <div className="theme-picker" role="menu" aria-label="Choose theme">
          {themes.map((option) => (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === option.id}
              onClick={() => {
                setTheme(option.id);
                setThemeMenuOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StartButton;
