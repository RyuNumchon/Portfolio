import "./App.css";
import "./styles/win98.css";
import "./styles/general.css";

import { WindowProvider } from "./context/WindowContext";
import { Desktop } from "./components/desktop";
import { WindowSection } from "./components/window";
import { MessageStack } from "./components/error";
import { StartMenu } from "./components/startmenu";
import { Taskbar } from "./components/taskbar";

function App() {
  return (
    <WindowProvider>
      <div className="wrappage">
        <section className="webpage">
          <Desktop />
          <WindowSection />
          <MessageStack />
        </section>
        <StartMenu />
        <Taskbar />
      </div>
    </WindowProvider>
  );
}

export default App;
