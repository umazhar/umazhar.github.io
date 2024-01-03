import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css";

function ProjectItem({ image, name, id, description }) {
  // const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        // navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div className="description">
        <h1> {name} </h1>
        <p>{description.split('\n').map((line, index) => {
          if (line.includes('</mark>')) {
            const parts = line.split('</mark>');
            return (
              <React.Fragment key={index}>
                {parts[0]}<mark>{parts[1]}</mark>{parts[2]}<br />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                {line}<br />
              </React.Fragment>
            );
          }
        })}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
