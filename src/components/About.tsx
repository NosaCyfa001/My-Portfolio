import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/About.scss";
import { faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "React",
  "Next.js",
  "Dart",
  "Flutter (Web)",
  "Firebase",
  "REST API",
];

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About Me</h1>
        <div className="skills-grid">
          {/* Skills & Experience */}
          <div className="skill">
            <p>
              I’m a web developer skilled in React/Next.js, TypeScript, and modern
              backend tools, focused on building clean, responsive, and scalable
              web applications. I enjoy solving real-world problems through code
              and creating seamless user experiences. I’m eager to grow,
              collaborate with talented teams, and contribute to impactful
              products.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core Tech Stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="skill">
            <h3>Education</h3>
            <p>
              NIIT, Benin Centre (Coding Bootcamp) <br />
              2022 – 2023 <br />
              <FontAwesomeIcon icon={faCertificate} size="1x" /> Diploma in Web
              Development
            </p>
          </div>

          {/* Contact */}
          <div className="skill">
            <h3>Contact</h3>
            <p>
              📧 nosacyfa02@gmail.com <br />
              📧 ugobornosa3@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
