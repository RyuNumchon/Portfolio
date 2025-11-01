import React from "react";
import { useWindowManager } from "../hooks/windowManager";
import Skills from "./windows/Skills";
import Work from "./windows/Work";
import Education from "./windows/Education";
import About from "./windows/About";

const Desktop: React.FC = () => {
  const { openWindow } = useWindowManager();

  const open = (id: string, title: string, content: React.ReactNode) => {
    openWindow({ id, title, content });
  };

  return (
    <div className="desktop">
      <button
        className="content"
        id="skill"
        onClick={() => open("win-skill", "Skills & Proficiencies", <Skills />)}
      >
        <div className="icon">
          <img
            className="icon-pic"
            src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fdirectory_open_cabinet-0.png?alt=media&token=5c480f10-d2c3-4e0a-829c-21e6a444185b"
            alt="Files"
          />
        </div>
        <div className="icon-name">Skills & Proficiencies</div>
      </button>

      <button
        className="content"
        id="work"
        onClick={() => open("win-work", "Work Experiences", <Work />)}
      >
        <div className="icon">
          <img
            className="icon-pic"
            src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fbriefcase-1.png?alt=media&token=34fc8988-4202-47a1-96d1-aa82ea5d0486"
            alt="Bag"
          />
        </div>
        <div className="icon-name">Work Experiences</div>
      </button>

      <button
        className="content"
        id="education"
        onClick={() => open("win-edu", "Education", <Education />)}
      >
        <div className="icon">
          <img
            className="icon-pic"
            src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Faddress_book-1.png?alt=media&token=11db4cbd-1963-474e-9b41-ff86be16676e"
            alt="Grade"
          />
        </div>
        <div className="icon-name">Education</div>
      </button>

      <button
        className="content"
        id="about-me"
        onClick={() => open("win-about", "About Me", <About />)}
      >
        <div className="icon">
          <img
            className="icon-pic"
            src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fusers-1.png?alt=media&token=dfa52492-8713-4291-ad82-46ac18c71d16"
            alt="User"
          />
        </div>
        <div className="icon-name">About Me</div>
      </button>
    </div>
  );
};

export default Desktop;
