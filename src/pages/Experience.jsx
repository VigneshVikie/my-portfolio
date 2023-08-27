import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="#ff4c60">
        <VerticalTimelineElement
          className="VerticalLine-Work Verticalline"
          date="Dec 2021 -Jul 2023"
          iconStyle={{ background: "#ff4c60", color: "#fff" }}
          icon={<MdWork />}
        >
          <h1>Application Development Associate</h1>
          <h3>Remote</h3>
          <p style={{ fontSize: "16px" }}>Accenture</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="VerticalLine-Education Verticalline"
          date="Aug 2019 - May 2021"
          iconStyle={{ background: "#ff4c60", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h1>Master of Computer Applications [MCA] </h1>
          <h3>Chennai, Tamilnadu</h3>
          <p style={{ fontSize: "16px" }}>Anna University</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="VerticalLine-Education Verticalline"
          date="Aug 2016 - May 2019"
          iconStyle={{ background: "#ff4c60", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h1>Bachelor of Computer Application [BCA]</h1>
          <h3>Chennai, Tamilnadu</h3>
          <p style={{ fontSize: "16px" }}>Dr. MGR University</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
