import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import ExperienceItem from "../components/ExperienceItem";
import jostle from "../assets/jostle.jpeg";
import amd from "../assets/amd.jpeg";
import eworx from "../assets/eworx.jpeg";
import dbot from "../assets/dbot.png";

function Experience() {
  return (
    <div className="experiences">
      <div className="experienceTitleContaienr">
        <h1>experience. </h1>
      </div>

      <ExperienceItem
        logoSrc={amd}
        jobTitle="AMD"
        jobDescription="Silicon Design Engineering Intern | Sep 2023 - Apr 2024"
        link="https://www.amd.com/en.html"
        skills={["SystemVerilog", "C++", "Ruby", "TCL", "SQL"]}
      />

      <ExperienceItem
        logoSrc={jostle}
        jobTitle="Jostle"
        jobDescription="Software Engineer Intern | Jan - Aug 2023"
        link="https://jostle.me/"
        skills={["Java", "MySQL", "GraphQL", "Redis", "Amazon EC2"]}
      />

      <ExperienceItem
        logoSrc={dbot}
        jobTitle="DesignBot"
        jobDescription="Data Engineer Intern [Contract, part-time] | Jan - May 2023 "
        link="https://www.designbot.tech/"
        skills={["C++", "C", "CMake", "Catch2", "XML/SVG"]}

        /*
        • Helped develop the backend of a program that reformats SVG parameters to contextualize new SVG images using C, C++ and CMake
        • Created functions to load and parse SVG files and convert vectors to XML format
        • Followed the test-driven development using the Catch2 framework

        */
      />

      <ExperienceItem
        logoSrc={eworx}
        jobTitle="eWorx Technology"
        jobDescription="Software Engineer Intern | Jun - Sep 2022"
        link="https://eworx.ca/"
        skills={["React", "Django", "Javascript", "MySQL", "Node.js"]}
      />
    </div>
  );
}

export default Experience;
