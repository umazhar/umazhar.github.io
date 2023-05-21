import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#333333">
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#169AC6", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ross Sheppard High School, Edmonton, Alberta
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-204"
          contentStyle={{ background: 'rgb(47, 49, 54)', color: '#fff' }}
          iconStyle={{ background: "#169AC6", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of British Columbia          
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's of Applied Science
          </h4>

          <p> Electrical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - Sept 2022"
          contentStyle={{ background: 'rgb(47, 49, 54)', color: '#fff' }}
          iconStyle={{ background: "#0F302E", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - eWorx 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, AB
          </h4>
          {/* <p>Developed the backend infrastructure for 3 projects.</p> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - Apr 2023"
          iconStyle={{ background: "#0F302E", color: "#fff" }}
          contentStyle={{ background: 'rgb(47, 49, 54)', color: '#fff' }}

          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sound Localization Team Member - UBC Subbots
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vancouver, BC
          </h4>
          {/* <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - Present"
          contentStyle={{ background: 'rgb(47, 49, 54)', color: '#fff' }}
          iconStyle={{ background: "#0F302E", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jr. Developer Co-op - Jostle
          </h3>
          <h4 className="vertical-timeline-element-subtitle" >
            Vancouver, BC
          </h4>
          {/* <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p> */}
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
