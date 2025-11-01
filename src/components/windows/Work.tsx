import React from "react";

const Work: React.FC = () => {
  return (
    <div className="window-body">
      <div className="options padding">
        <div className="item">Location</div>
        <input
          type="text"
          defaultValue="Work Experiences"
          className="location"
        />
      </div>

      <div className="tab-box-content">
        <input name="topics-radio" id="topic-4" type="radio" defaultChecked />
        <input name="topics-radio" id="topic-3" type="radio" />
        <input name="topics-radio" id="topic-2" type="radio" />
        <input name="topics-radio" id="topic-1" type="radio" />
        <input name="topics-radio" id="topic-0" type="radio" />
        <div className="tab-box">
          <div className="tab-header">Duration</div>
          <ul className="box">
            <li>
              <label htmlFor="topic-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="A+"
                />
                Jun. 2023 – Jul. 2023
              </label>
            </li>
            <li>
              <label htmlFor="topic-3">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="A+"
                />
                Jun. 2022 – Aug. 2022
              </label>
            </li>
            <li>
              <label htmlFor="topic-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="A+"
                />
                Oct. 2020
              </label>
            </li>
            <li>
              <label htmlFor="topic-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="A+"
                />
                Mar. 2020 - Present
              </label>
            </li>
            <li>
              <label htmlFor="topic-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="A+"
                />
                Projects
              </label>
            </li>
          </ul>
        </div>
        <div className="info-content">
          <div className="topic-4-content">
            <h2>Mula-X Holding (Thailand) Co., LTD.</h2>
            <p>Full-Stack Intern - Software Developer</p>
            <u>Front-end development</u>
            <ul>
              <li>Use React.js and GraphQL</li>
              <li>Improve the user interface</li>
              <li>Talk to the users and record the user's requirements</li>
              <li>Add new features according to the user's requirement</li>
              <li>Fix bugs flagged by the quality assurance team.</li>
            </ul>
            <u>Back-end development</u>
            <ul>
              <li>Use GraphQL and Type script</li>
              <li>
                Pull data from the database, verify, set the authorization
                permission, and send them to the front-end
              </li>
            </ul>
          </div>
          <div className="topic-3-content">
            <h2>Wan Thai Foods Industry Co., LTD.</h2>
            <p>Computer Engineer Intern - DX Dept.</p>
            <u>Web Portal</u>
            <ul>
              <li>Implement the company’s internal Web Portal</li>
              <li>Train admins to operate the internal website</li>
              <li>Test the functions and upload basic information</li>
            </ul>
            <u>Infrastructure</u>
            <ul>
              <li>Hardware and software set up</li>
              <li>Access point and network related device installation</li>
            </ul>
            <u>IT Service:</u>
            <ul>
              <li>IT Support</li>
              <li>IT Helpdesk</li>
            </ul>
          </div>
          <div className="topic-2-content">
            <h2>Eventpop Company</h2>
            <p>Freelance staff - Meeting Moderator</p>
            <u>Virtual Meeting (2020):</u>
            <ul>
              <li>
                Moderator of the virtual event via Zoom online meeting platform
              </li>
            </ul>
          </div>

          <div className="topic-1-content">
            <h2>Freelance Translator</h2>
            <ul>
              <li>English-Thai documents translator</li>
              <li>English-Thai interpreter</li>
            </ul>
          </div>

          <div className="topic-0-content">
            <h2>Projects</h2>
            <u>Course Projects</u>
            <ul>
              <li>
                Artery segmentation for anesthesia ultrasound CT images using
                deep learning techniques (&lt;In process&gt;)
              </li>
              <li>X Game - Game Development Course (&lt;In process&gt;)</li>
              <li>- Deep Learning Course (&lt;In process&gt;)</li>
              <li>
                Binary Calculation Game With Arduino UNO - Micro Controller
                Course (
                <a
                  href="https://github.com/RyuNumchon/Binary-Calculation-Game.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                )
              </li>
              <li>
                Bakery Application - System Analysis Design Course (
                <a
                  href="https://docs.google.com/document/d/11a3-j-7N76I4TMXP9RHzGYRsPoBu1wls1HazlLyX6h8/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  report
                </a>
                )
              </li>
              <li>
                Hospital Application - Software Engineering Course (
                <a
                  href="https://www.figma.com/proto/4aVLnGVvqTmw25h9MOHunD/software-en-wireframe?node-id=214-8522&starting-point-node-id=214%3A8522"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                ), (
                <a
                  href="https://docs.google.com/spreadsheets/d/1zU6hfUUs1RIe0f5WffQ3HMfKcSX_FD61/edit?usp=sharing&ouid=118175674349911090402&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  use case design
                </a>
                )
              </li>
              <li>
                Film Rental Website - Database Course (
                <a
                  href="https://github.com/RyuNumchon/Film-Rental-Website.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                )
              </li>
              <li>
                &lt;il&gt;Shipping Management Website - Database Course (
                <a
                  href="https://github.com/RyuNumchon/Shipping-Management-Website.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                )
              </li>
              <li>
                University App UX/UI Design- UX/UI Course (
                <a
                  href="https://drive.google.com/file/d/1tiD-6sAYxp5z4374b4QQ5Flzzhd7hS2a/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  report
                </a>
                )
              </li>
              <li>
                AI Model II: Image Recognition (
                <a
                  href="https://github.com/RyuNumchon/AI-assignment-2.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                )
              </li>
              <li>
                AI Model I: Puzzle Solver (
                <a
                  href="https://github.com/RyuNumchon/AI-assignment-1.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                )
              </li>
            </ul>
            <u>Personal Projects</u>
            <ul>
              <li>This Website</li>
              <li>
                Discord Chatbot - Using API (
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=845184401498439711&permissions=446677010496&scope=bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
                )
              </li>
              <li>
                Doodles &amp; Freestyle Art (
                <a
                  href="https://www.instagram.com/legitbuddha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sketche book
                </a>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
