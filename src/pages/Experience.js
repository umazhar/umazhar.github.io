import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import ExperienceItem from "../components/ExperienceItem";
import jostle from "../assets/jostle.jpeg";
import amd from "../assets/amd.jpeg";
import eworx from "../assets/eworx.jpeg";

function Experience() {
  return (
    <div className="experiences">
      <div className = "experienceTitleContaienr">
        <h1>experience.        </h1>
      </div>

      <ExperienceItem
        logoSrc={amd}
        jobTitle="AMD"
        jobDescription="Silicon Design Engineering Intern | Sep 2023 - Apr 2024"
        link="https://www.amd.com/en.html"
      />

      <ExperienceItem
        logoSrc={jostle}
        jobTitle="Jostle"
        jobDescription="Junior Developer Intern | Jan 2023 - Aug 2023"
        link="https://jostle.me/"
      />

      <ExperienceItem
        logoSrc={eworx}
        jobTitle="eWorx Technology"
        jobDescription="Software Developer Intern | Jun - Sep 2022"
        link="https://eworx.ca/"
      />
    </div>
  );
}

export default Experience;
