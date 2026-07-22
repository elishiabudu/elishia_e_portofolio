/**
 * Skills component
 *
 * Displays technical and soft skills on a dedicated page.
 */

import React from "react";

const technicalSkills = [
  "News Writing",
  "Feature Writing",
  "News Editing",
  "Interviewing",
  "Story Development",
  "Documentary Production",
  "Translation (English to Fante)",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Problem Solving",
];

const Skills = () => {
  return (
    <section className="padding" id="skills">
      <h2 style={{ textAlign: "left" }}>Skills</h2>
      <div className="container">
        <div className="box">
          <h3>Technical Skills</h3>
          <ul style={{ margin: 0, paddingLeft: "1rem", textAlign: "left" }}>
            {technicalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="box">
          <h3>Soft Skills</h3>
          <ul style={{ margin: 0, paddingLeft: "1rem", textAlign: "left" }}>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
