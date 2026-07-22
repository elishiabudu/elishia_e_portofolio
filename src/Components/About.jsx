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
  "Hello! I am Elishia Budu, an aspiring broadcast journalist passionate about storytelling, news reporting, and community development. Though academic training and practical experience at GBC Radio Central, I have developed the skills needed to gather information, conduct interviews, write compelling news stories, and produce quality broadcast content. I aspire to join Ghana Broadcasting Corporation (GBC) to contribute to its reputation for credible journalism while growing into an outstanding media professional. I am a Communication Studies student with a strong interest in journalism, media production, and digital storytelling. My passion lies in uncovering issues affecting communities and presenting them in ways that encourage public dialogue and positive change. I enjoy working in fast-paced environments where teamwork, creativity and accuracy are essential.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "✔️ News Writing",
  "✔️ Broadcast Script Writing",
  "✔️ Feature Writing",
  "✔️ News Editing",
  "✔️ Interviewing",
  "✔️ Story Development",
  "✔️ Documentary Production",
  "✅ Communication",
  "✅ Teamwork",
  "✅ Leadership",
  "✅ Time Management",
  "✅ Critical Thinking",
  "✅ Adaptability",
  "✅ Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "To secure the position of Broadcast Journalist at Multimedia Group Limited where I can use my reporting, research and storytelling skills to produce informative and impactful news content while continuously developing professionally.";

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
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
