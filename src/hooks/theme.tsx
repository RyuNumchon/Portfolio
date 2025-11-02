import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "win98" | "mac";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try {
      const stored = localStorage.getItem("rp_theme");
      if (stored === "mac" || stored === "win98") return stored;
    } catch (e) {
      // ignore
    }
    return "win98";
  });

  useEffect(() => {
    try {
      localStorage.setItem("rp_theme", theme);
    } catch (e) {}
    // update body class for easy CSS scoping
    document.documentElement.classList.remove("theme-win98", "theme-mac");
    document.documentElement.classList.add(
      theme === "mac" ? "theme-mac" : "theme-win98"
    );
  }, [theme]);

  const setTheme = (t: ThemeName) => setThemeState(t);
  const toggleTheme = () =>
    setThemeState((s) => (s === "mac" ? "win98" : "mac"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
