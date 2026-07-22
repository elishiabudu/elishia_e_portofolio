/**
 * WorkExperience component
 *
 * A section to display your professional experience and the roles you have held.
 */

import React from "react";

const workExperienceList = [
  {
    title: "Intern",
    company: "GBC Radio Central",
    period: "2023",
    description: [
      "Wrote news stories for radio broadcast.",
      "Assisted in gathering news from communities.",
      "Conducted interviews.",
      "Covered community events.",
      "Assisted with news production.",
      "Participated in editorial meetings.",
      "Recorded audio for news packages.",
      "Verified facts before publication.",
      "Worked with producers and presenters.",
      "Assisted with script preparation.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="padding" id="experience">
      <h2 style={{ textAlign: "left" }}>Work Experience</h2>
      <div className="container">
        {workExperienceList.map((experience) => (
          <div className="box" key={experience.title}>
            <h3>{experience.title}</h3>
            <p style={{ margin: "0.5rem 0 0", fontWeight: 600 }}>{experience.company}</p>
            <p style={{ margin: "0.25rem 0 1rem", color: "#555" }}>{experience.period}</p>
            <ul style={{ margin: 0, paddingLeft: "1rem", textAlign: "left" }}>
              {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
