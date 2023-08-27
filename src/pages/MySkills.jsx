import React from "react";

import SkillIcons from "../components/SkillIcons";
import { SkillsList } from "../helper/SkillsList.js";
import graphskills from "../assets/graph_skills.png"
import computer from "../assets/computer.png"
import resume from "../assets/Resume/VigneshResume.pdf"

export const MySkills = () => {
  return (
    <div className="skills" id="skills">
      <div className="myskills">
        <div className="graph">
          <img src={graphskills} alt="" />
        </div>
        <div className="skills-content">
          <h1>My Best Skills</h1>
          <p>
            Proficient in React.js development with experience in legacy
            migration, strong frontend technologies (JavaScript, HTML, CSS), and
            data integration using SSIS.{" "}
          </p>
          <div className="skills-list">
            <div className="list">
              <h2>Frontend Development</h2>
              <p style={{ fontWeight: "bold" }}>90%</p>
            </div>
            <div className="list">
              <h2>Data Integration (SSIS)</h2>
              <p style={{ fontWeight: "bold" }}>85%</p>
            </div>
          </div>
          <div className="resume-skills">
            <button className="resume-btn">
              <a
                className="button"
                href={resume}
                download
              >
                Download Resume
              </a>
            </button>
            <hr style={{ backgroundColor: "#FF4C60" }} className="line" />
          </div>
        </div>
      </div>
      <div className="all-skills-list">
        <div className="skills-icon">
          {SkillsList.map((skill, idx) => {
            const Icon = skill.icon;
            return <SkillIcons key={idx} icon={<Icon />} name={skill.name} />;
          })}
        </div>
        <div className="computer-img">
          <img src={computer} alt="" />
        </div>
      </div>
    </div>
  );
};
