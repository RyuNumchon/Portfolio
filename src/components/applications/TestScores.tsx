import React from "react";

const TestScores: React.FC = () => {
  return (
    <div style={{ padding: "10% 20% 0 20%" }}>
      <h2>Standard Test Scores</h2>
      <br />
      <u>IELTS (May 2020)</u>
      <br />
      <table className="marks">
        <tbody>
          <tr>
            <td>Listening:</td>
            <td>7.5</td>
          </tr>
          <tr>
            <td>Reading:</td>
            <td>7.0</td>
          </tr>
          <tr>
            <td>Writing:</td>
            <td>6.5</td>
          </tr>
          <tr>
            <td>Speaking:</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>
              <b>Overall Score</b>:
            </td>
            <td>7.0</td>
          </tr>
          <tr>
            <td>
              <b>CEFR Level</b>:
            </td>
            <td>C1</td>
          </tr>
        </tbody>
      </table>
      <br />
      <u>SAT (October 2018)</u>
      <br />
      <table className="marks">
        <tbody>
          <tr>
            <td>Mathematics:</td>
            <td>660</td>
          </tr>
          <tr>
            <td>Evidence-Based Reading and Writing:</td>
            <td>510</td>
          </tr>
          <tr>
            <td>
              <b>Total Score</b>:
            </td>
            <td>1170</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestScores;
