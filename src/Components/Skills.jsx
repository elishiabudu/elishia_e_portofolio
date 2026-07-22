/**
 * Skills component
 *
 * Displays technical and soft skills on a dedicated page.
 */

import React from "react";
import skill1Image from "../images/skill_1.jpeg";
import skill2Image from "../images/skill_2.jpeg";

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
        <div className="box">
          <a
            href="https://www.myjoyonline.com/ghana-lost-gh%c2%a218-41bn-in-2024-due-to-misuse-of-funds-samson-lardy-anyenini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={skill1Image} alt="skill 1" className="skill-image" />
          </a>
        </div>
        <div className="box">
          <a href="https://mybrytfmonline.com/postpartum-stress-a-growing-challenge-on-ghanaian-mothers/" target="_blank" rel="noopener noreferrer">
            <img src={skill2Image} alt="skill 2" className="skill-image" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
