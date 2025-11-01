import React from "react";
import { useWindowManager } from "../hooks/windowManager";
import Skills from "./windows/Skills";
import Work from "./windows/Work";
import Education from "./windows/Education";
import About from "./windows/About";
import Contact from "./windows/Contact";
import Downloads from "./windows/Downloads";

const StartMenu: React.FC = () => {
  const { openWindow, startOpen, duplicateError } = useWindowManager();

  if (!startOpen) return <div id="start-box" style={{ display: "none" }} />;

  return (
    <div id="start-box" style={{ display: "block" }}>
      <div id="start-header">
        <span id="start-header-name">Hello World!</span>
      </div>
      <div id="start-tray">
        <button
          className="start-item"
          onClick={() =>
            openWindow({
              id: "win-skill",
              title: "Skills",
              content: <Skills />,
            })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fdirectory_open_cabinet-0.png?alt=media&token=5c480f10-d2c3-4e0a-829c-21e6a444185b"
              alt="Files"
            />
            <span>
              <u>S</u>kills
            </span>
          </div>
        </button>

        <button
          className="start-item"
          onClick={() =>
            openWindow({ id: "win-work", title: "Work", content: <Work /> })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fbriefcase-1.png?alt=media&token=34fc8988-4202-47a1-96d1-aa82ea5d0486"
              alt="Bag"
            />
            <span>
              E<u>x</u>periences
            </span>
          </div>
        </button>

        <button
          className="start-item"
          onClick={() =>
            openWindow({
              id: "win-edu",
              title: "Education",
              content: <Education />,
            })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Faddress_book-1.png?alt=media&token=11db4cbd-1963-474e-9b41-ff86be16676e"
              alt="Grade"
            />
            <span>
              <u>E</u>ducation
            </span>
          </div>
        </button>

        <button
          className="start-item"
          onClick={() =>
            openWindow({ id: "win-about", title: "About", content: <About /> })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fusers-1.png?alt=media&token=dfa52492-8713-4291-ad82-46ac18c71d16"
              alt="User"
            />
            <span>
              <u>A</u>bout Me
            </span>
          </div>
        </button>

        <button
          className="start-item"
          onClick={() =>
            openWindow({
              id: "win-contact",
              title: "Contact",
              content: <Contact />,
            })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fmodem-1.png?alt=media&token=9d8ffa69-0f88-4ca9-b967-383e91ef69e3"
              alt="phone"
            />
            <span>
              <u>C</u>ontact
            </span>
          </div>
        </button>

        <button
          className="start-item"
          onClick={() =>
            openWindow({
              id: "win-download",
              title: "Downloads",
              content: <Downloads />,
            })
          }
        >
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fdocument-1.png?alt=media&token=da0bbb0f-5540-47c7-a8a6-f7274f6bd634"
              alt="file"
            />
            <span>
              <u>D</u>ownloads
            </span>
          </div>
        </button>

        <button className="start-item shut" onClick={() => duplicateError()}>
          <div className="start-item-holder">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fminesweeper-1.png?alt=media&token=8b20bccd-eada-4a34-b9a0-3e69f9c0b241"
              alt="error"
            />
            <span>
              <u>M</u>inesweeper
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
