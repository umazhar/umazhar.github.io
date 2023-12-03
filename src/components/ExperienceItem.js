import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExperienceItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  background-color: rgb(18, 18, 18);
  transition: 0.3s;
  border-radius: 10px; // Added for rounded corners
  max-width: 800px; // Limit the width to 800px
  font-size: 12px;


  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CompanyLogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;

const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const JobInfoContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

const JobTitle = styled.h2`
  margin-bottom: 0.2em;
  color: rgb(200, 200, 200);
`;

const JobDescription = styled.p`
  margin-top: 0;
  font-size: 18px;
  color: white;
  margin-bottom: -10px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Skill = styled.li`
  border: 1px solid black; /* Add a border */
  padding: 6px; /* Add some padding */
  margin: 2px; /* Add some margin */
  background-color: rgb(64, 168, 181); /* Add a background color */
  border-radius: 9px; /* Add rounded corners */
  display: inline-block; /* Display the boxes side by side */
  color: white; 
`;

const ExperienceItem = ({
  logoSrc,
  jobTitle,
  jobDescription,
  link,
  skills,
}) => {
  return (
    <ExperienceItemContainer>
      <CompanyLogoContainer>
        <Link to={link}>
          <CompanyLogo src={logoSrc} alt="Company Logo" />
        </Link>
      </CompanyLogoContainer>
      <JobInfoContainer>
        <JobTitle>{jobTitle}</JobTitle>
        <JobDescription>{jobDescription}</JobDescription>
        <SkillsList>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsList>
      </JobInfoContainer>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
