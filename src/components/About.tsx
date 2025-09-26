import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/About.scss";
import { faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";
import { Web } from "@mui/icons-material";

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
  
            <h3>Web Development</h3>
            <p>
            Am a software developer with 3 years of experience building production-ready web applications. Expert in React, TypeScript, and modern backend technologies. I create seamless user experiences while maintaining robust, scalable codebases that teams love to work with.
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
