import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p> Copyright &copy; 2023. All rights are reserved</p>
      </div>
      <div className="personal-handles">
        <Link to="https://github.com/VigneshVikie" target="_blank">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/vikie" target="_blank">
          <ImLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
