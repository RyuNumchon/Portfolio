import React from "react";

const About: React.FC = () => {
  return (
    <div className="window-body">
      <div className="about-top">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fprofile.png?alt=media"
          alt="profile"
          className="avatar"
        />
        <div className="about-meta">
          <h2>Ryu Numchon</h2>
          <p>Software Developer • Full-Stack • AI Enthusiast</p>
          <p>Based in Bangkok, Thailand</p>
        </div>
      </div>

      <div className="info-content padding">
        <h3>About</h3>
        <p>
          I'm a software developer with experience building web applications
          using modern JavaScript frameworks. I enjoy working on UI/UX
          improvements, frontend engineering, and learning about machine
          learning and AI.
        </p>

        <h3>Interests</h3>
        <ul>
          <li>Web Development (React, TypeScript)</li>
          <li>Machine Learning / Deep Learning</li>
          <li>Open-source & side projects</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
