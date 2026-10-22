import React from "react";
import { ICONS } from "../../config/icons";

const Skills: React.FC = () => {
  return (
    <ul className="tree-view">
      <li>Skills &amp; Proficiencies</li>
      <ul>
        <li>
          <details open>
            <summary>
              <img src={ICONS.computer} alt="computer" />
              Programming Languages
            </summary>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>PyTorch</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>PHP</li>
              <li>GraphQL</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>phpMyAdmin</li>
              <li>ASM</li>
              <li>Arduino</li>
              <li>C++</li>
              <li>Prompt engr.</li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <img src={ICONS.writeFile} alt="languages" />
              Languages
            </summary>
            <ul>
              <li>
                <details>
                  <summary>English</summary>
                  <ul>
                    <li>Listening</li>
                    <li>Speaking</li>
                    <li>Reading</li>
                    <li>Writing</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Thai</summary>
                  <ul>
                    <li>Listening</li>
                    <li>Speaking</li>
                    <li>Reading</li>
                    <li>Writing</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <img src={ICONS.keyboard} alt="typewriter" />
              Typewriter
            </summary>
            <ul>
              <li>
                <details>
                  <summary>English</summary>
                  <ul>
                    <li>50 words per minute</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Thai</summary>
                  <ul>
                    <li>35 words per minute</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </ul>
  );
};

export default Skills;
