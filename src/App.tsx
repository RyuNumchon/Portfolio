import "./App.css";
import "./styles/default.css";
import "./styles/general.css";
import "./styles/simple.css";

import { WindowProvider } from "./context/WindowContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Desktop } from "./components/desktop";
import { WindowSection } from "./components/window";
import { MessageStack } from "./components/error";
import { StartMenu } from "./components/startmenu";
import { Taskbar } from "./components/taskbar";

function AppLayout() {
  const { theme } = useTheme();

  return (
    <div className={`wrappage theme-${theme}`}>
      <section className="webpage">
        <Desktop />
        <WindowSection />
        <MessageStack />
      </section>
      <StartMenu />
      <Taskbar />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WindowProvider>
        <AppLayout />
      </WindowProvider>
    </ThemeProvider>
  );
}

export default App;
