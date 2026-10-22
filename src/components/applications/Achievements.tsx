import React from "react";

const Achievements: React.FC = () => {
  return (
    <div style={{ padding: "10% 20% 0 20%" }}>
      <h2>Academic Achievements</h2>
      <br />
      <div>
        <u>Scholarships</u>
        <ul>
          <li>
            <p>
              Ajinomoto Talanted Scholarship (ATS) from{" "}
              <a
                href="https://ajinomotofoundation.or.th/"
                target="_blank"
                rel="noreferrer"
              >
                Ajinomoto Foundation
              </a>
            </p>
          </li>
          <ul>
            <li>
              <i>March 2021</i>
            </li>
            <li>
              <i>March 2022</i>
            </li>
            <li>
              <i>March 2023</i>
            </li>
            <li>
              <i>Present</i>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <u>Awards</u>
        <ul>
          <li>
            <i>March 19 2023: </i>
            <p>
              1st Runner-up in{" "}
              <a
                href="https://mm.linkedin.com/posts/amity-hq_developers-tech-innovation-activity-7043587682580520960-Lkvf/"
                target="_blank"
                rel="noreferrer"
              >
                The Amity Hackathon 2023
              </a>{" "}
              (Student Track) <br />{" "}
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1eEBstAu2g4jihXhyrUL_48CSaxgm__tp/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                {" "}
                Certificate
              </button>
            </p>
          </li>
          <li>
            <p>Coming Soon...</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
