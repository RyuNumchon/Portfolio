import React from "react";
import { ICONS } from "../../config/icons";

const Sjps: React.FC = () => {
  return (
    <div style={{ padding: "10% 20% 0 20%" }}>
      <img
        className="icon-pic infolder"
        src={ICONS.sjpsLogo}
        alt="sjps"
        style={{ margin: "0 0 2rem 2rem" }}
      />
      <h2>ST. JUDE'S PUBLIC SCHOOL &amp; JUNIOR COLLEGE, KOTAGIRI, INDIA</h2>
      <p>High School: Standard XII</p>
      <div>
        Field of studies:
        <ul>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Computer Science</li>
        </ul>
      </div>
      <u>Graduated Scores:</u>
      <br />
      <table className="marks">
        <tbody>
          <tr>
            <td>English:</td>
            <td>86</td>
          </tr>
          <tr>
            <td>Mathematics:</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Physics:</td>
            <td>92</td>
          </tr>
          <tr>
            <td>Chemistry:</td>
            <td>93</td>
          </tr>
          <tr>
            <td>Computer Science:</td>
            <td>98</td>
          </tr>
          <tr>
            <td>
              <b>Overall Score</b>:
            </td>
            <td>92.6</td>
          </tr>
        </tbody>
      </table>
      <p>
        Link:{" "}
        <a href="https://stjudesonline.in/" target="_blank" rel="noreferrer">
          School Website
        </a>
      </p>
    </div>
  );
};

export default Sjps;
