import React from "react";

const SkillIcons = ({ icon, name }) => {
  return (
    <div className="skill-icons">
      <div className="icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default SkillIcons;
