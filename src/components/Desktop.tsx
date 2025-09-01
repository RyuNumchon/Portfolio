import React from "react";

const Desktop: React.FC = () => {
  return (
    <div className="desktop">
      <button className="content" id="skill">
        <div className="icon">
          <div className="icon-name">Skills & Proficiencies</div>
        </div>
      </button>
      <button className="content" id="work">
        <div className="icon">
          <div className="icon-name">Work Experiences</div>
        </div>
      </button>
      <button className="content" id="education">
        <div className="icon">
          <div className="icon-name">Education</div>
        </div>
      </button>
      <button className="content" id="about-me">
        <div className="icon">
          <div className="icon-name">About Me</div>
        </div>
      </button>
    </div>
  );
};

export default Desktop;
