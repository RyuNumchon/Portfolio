import React from "react";
import { ICONS } from "../../config/icons";

const Siit: React.FC = () => {
  return (
    <div style={{ padding: "10% 20% 0 20%" }}>
      <img
        className="icon-pic infolder"
        src={ICONS.siitLogo}
        alt="siit"
        style={{ margin: "0 0 2rem 2rem" }}
      />
      <h2>
        SIRINDHORN INSTITUTE OF TECHNOLOGY, THAMMASAT UNIVERSITY, RANGSIT CAMPUS
      </h2>
      <table className="marks">
        <tbody>
          <tr>
            <td>PROGRAM:</td>
            <td>Computer Engineering Curriculum (2020)</td>
          </tr>
          <tr>
            <td>OPTION:</td>
            <td>CPE2020-Option I: Artificial Intelligence</td>
          </tr>
          <tr>
            <td>LEVEL:</td>
            <td>Bachelor</td>
          </tr>
          <tr>
            <td>DEGREE NAME:</td>
            <td>Bachelor of Engineering (Computer Engineering) </td>
          </tr>
          <tr>
            <td>CURRICULUM NAME:</td>
            <td>
              Bachelor of Engineering Program in Computer Engineering
              (International Program){" "}
            </td>
          </tr>
          <tr>
            <td>GPAX:</td>
            <td>3.63</td>
          </tr>
        </tbody>
      </table>
      <p>
        Link:{" "}
        <a href="https://www.siit.tu.ac.th/" target="_blank" rel="noreferrer">
          SIIT Website
        </a>
        ,{" "}
        <a href="https://tu.ac.th/" target="_blank" rel="noreferrer">
          TU Website
        </a>
      </p>
    </div>
  );
};

export default Siit;
