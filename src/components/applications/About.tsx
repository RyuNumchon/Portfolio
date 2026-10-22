import React from "react";
import { ICONS } from "../../config/icons";

const About: React.FC = () => {
  return (
    <ul className="tree-view">
      <li>About Me</li>
      <ul>
        <li>
          <details open>
            <summary>
              <img src={ICONS.userCalendar} alt="calendar" />
              Personal Info
            </summary>
            <ul>
              <li>
                <strong>Name:</strong> Kongpanat Tangphonphisuth
              </li>
              <li>
                <strong>Nickname:</strong> Ryu
              </li>
              <li>
                <strong>Birth Year:</strong> 2000
              </li>
              <li>
                <strong>Nationality:</strong> Thai
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <img src={ICONS.appWizard} alt="hobbies" />
              Hobbies &amp; Interests
            </summary>
            <ul>
              <li>
                <details>
                  <summary>Art</summary>
                  <ul>
                    <li>Digital Art</li>
                    <li>Drawing</li>
                    <li>Painting</li>
                    <li>Sketching</li>
                    <li>Painting Admiring</li>
                  </ul>
                </details>
              </li>
              <li>Piano</li>
              <li>Coding</li>
              <li>
                <details>
                  <summary>Sports</summary>
                  <ul>
                    <li>Badminton</li>
                    <li>Table Tennig</li>
                    <li>Running</li>
                  </ul>
                </details>
              </li>
              <li>Reading</li>
              <li>Videogame</li>
              <li>Internet Surfing</li>
            </ul>
          </details>
        </li>
      </ul>
    </ul>
  );
};

export default About;
