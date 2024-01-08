import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projectsHeaderContainer">
        <h1> projects.</h1>
      </div>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
