import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="window-body">
      <ul className="tree-view">
        <li>Skills &amp; Proficiencies</li>
        <ul>
          <li>
            <details open>
              <summary>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fcomputer-0.png?alt=media&token=44aa5411-0d57-4f6d-bbeb-38a312c5bb78"
                  alt="Programming"
                />
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fwrite_file-0.png?alt=media&token=fbeb71a9-4c8f-4fc5-acd0-a0445aeb2c3b"
                  alt="Languages"
                />
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fkeyboard-2.png?alt=media&token=ed178cc0-c5e5-46a5-a6dc-b138f60ac961"
                  alt="Typewriter"
                />
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
          <li>
            <details>
              <summary>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ryu-profile.appspot.com/o/icon%2Fthemes-1.png?alt=media&token=f351373f-068b-4be5-9586-42e7a6573bf8"
                  alt="Extra"
                />
                Extra Skill Set
              </summary>
              <ul>
                <li>Art</li>
                <li>Photoshop</li>
                <li>Microsoft Word</li>
                <li>Microsoft PowerPoint</li>
              </ul>
            </details>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Skills;
