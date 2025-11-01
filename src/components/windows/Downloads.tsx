import React from "react";

const Downloads: React.FC = () => {
  return (
    <div className="window-body">
      <div className="info-content padding">
        <h2>Downloads</h2>
        <p>Links to downloadable resources and portfolio items.</p>

        <ul>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RyuNumchon"
              target="_blank"
              rel="noreferrer"
            >
              Project repos (GitHub)
            </a>
          </li>
          <li>
            <a href="/assets/portfolio.zip" target="_blank" rel="noreferrer">
              Portfolio (zip)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Downloads;
