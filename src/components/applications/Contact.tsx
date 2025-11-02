import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="window-body">
      <div className="info-content padding">
        <h2>Contact</h2>
        <p>
          You can reach me via email or through social links below. I usually
          respond within a few days.
        </p>

        <h3>Email</h3>
        <p>
          <a href="mailto:example@example.com">example@example.com</a>
        </p>

        <h3>Social</h3>
        <ul>
          <li>
            <a
              href="https://github.com/RyuNumchon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/legitbuddha/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
