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
import aboutImage from "../images/about.jpeg";

const imageAltText = "purple and blue abstract background";
const aboutImageAltText = "Photo of Elishia Budu";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = `I am a dedicated Communication Studies student with a keen interest in journalism, public service broadcasting, and development communication.

My experience at GBC Radio Central strengthened my ability to research, write, and present news stories while maintaining high standards of accuracy, fairness, and professionalism.

I enjoy working with communities to tell stories that inspire positive change and contribute to national development.`;

const careerObjective =
  "To obtain the position of Broadcast Journalist at the Ghana Broadcasting Corporation, where I can apply my knowledge of journalism, storytelling, and community reporting to produce credible, informative, and impactful news content while supporting GBC's mission of public service broadcasting.";

const education = "University of Education, Winneba — 2023 - 2026";

const achievementsList = [
  "Successfully completed internship at GBC Radio Central.",
  "Produced community development news reports.",
  "Participated in documentary production.",
  "Developed practical broadcast journalism skills.",
  "Strengthened news writing and reporting abilities.",
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
      <div className="about-content">
        <img src={aboutImage} alt={aboutImageAltText} className="about-image" />
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <h3 style={{ marginTop: "2rem" }}>Career Objective</h3>
        <p style={{ margin: "0 0 1.5rem" }}>{careerObjective}</p>
        <h3 style={{ marginTop: "1rem" }}>Education</h3>
        <p style={{ margin: "0 0 2rem" }}>{education}</p>
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
