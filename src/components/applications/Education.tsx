import React from "react";

const Education: React.FC = () => {
  return (
    <div className="window-body">
      <div className="options padding">
        <div className="item">Institution</div>
        <input
          type="text"
          defaultValue="University / School"
          className="location"
        />
      </div>

      <div className="tab-box-content">
        <input name="edu-radio" id="edu-2" type="radio" defaultChecked />
        <input name="edu-radio" id="edu-1" type="radio" />
        <input name="edu-radio" id="edu-0" type="radio" />

        <div className="tab-box">
          <div className="tab-header">Years</div>
          <ul className="box">
            <li>
              <label htmlFor="edu-2">2018 - 2022</label>
            </li>
            <li>
              <label htmlFor="edu-1">2015 - 2018</label>
            </li>
            <li>
              <label htmlFor="edu-0">2009 - 2015</label>
            </li>
          </ul>
        </div>

        <div className="info-content">
          <div className="edu-2-content">
            <h2>Bachelor of Science in Computer Engineering</h2>
            <p>Major in Software and Systems</p>
            <ul>
              <li>
                Relevant courses: Data Structures, Algorithms, Database Systems
              </li>
              <li>Senior project: Image processing with deep learning</li>
            </ul>
          </div>

          <div className="edu-1-content">
            <h2>High School - Science Program</h2>
            <p>Focus on mathematics and physics</p>
          </div>

          <div className="edu-0-content">
            <h2>Secondary School</h2>
            <p>General education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
