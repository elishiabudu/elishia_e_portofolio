/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello! I am Elishia Budu, an aspiring broadcast journalist passionate about storytelling, news reporting, and community development. Through academic training and practical experience at GBC Radio Central, I have developed the skills needed to gather information, conduct interviews, write compelling news stories, and produce quality broadcast content. I aspire to join Ghana Broadcasting Corporation (GBC) to contribute to its reputation for credible journalism while growing into an outstanding media professional.";

const careerObjective =
  "To secure the position of Broadcast Journalist at Multimedia Group Limited where I can use my reporting, research and storytelling skills to produce informative and impactful news content while continuously developing professionally.";

const education = "University of Education, Winneba — 2023/2026";

const achievementsList = [
  "Successfully completed internship at GBC Radio Central.",
  "Produced community development news reports.",
  "Participated in documentary production.",
  "Developed practical broadcast journalism skills.",
  "Strengthened news writing and reporting abilities.",
];

const technicalSkills = [
  "✔ News Writing",
  "✔ Broadcast Script Writing",
  "✔ Feature Writing",
  "✔ News Editing",
  "✔ Interviewing",
  "✔ Story Development",
  "✔ Documentary Production",
];

const softSkillsList = [
  "Communication",
  "Teamwork",
  "Leadership",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <h3 style={{ textAlign: "left", marginTop: "2rem" }}>Career Objective</h3>
        <p style={{ textAlign: "left", margin: "0 0 1.5rem" }}>{careerObjective}</p>
        <h3 style={{ textAlign: "left", marginTop: "1rem" }}>Education</h3>
        <p style={{ textAlign: "left", margin: "0 0 2rem" }}>{education}</p>
        <hr />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            textAlign: "left",
            margin: "2rem 0",
          }}
        >
          <div>
            <h3>Technical Skills</h3>
            <ul style={{ columns: 1, paddingLeft: "1rem" }}>
              {technicalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <ul style={{ columns: 1, paddingLeft: "1rem" }}>
              {softSkillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div style={{ textAlign: "left", marginTop: "2rem" }}>
          <h3>Achievements</h3>
          <ul style={{ paddingLeft: "1rem" }}>
            {achievementsList.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
