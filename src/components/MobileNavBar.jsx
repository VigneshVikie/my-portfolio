import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MobileNavBar = ({ burgerClass, isClicked, setIsClicked }) => {
  const handleNavLink = () => {
    setIsClicked(false);
  };

  return (
    <div className="mobile-nav">
      {isClicked && (
        <ul className={burgerClass}>
          <li>
            <Link className="nav-link" smooth to="/#" onClick={handleNavLink}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              smooth
              to="/#skills"
              onClick={handleNavLink}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              smooth
              to="/#experience"
              onClick={handleNavLink}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              smooth
              to="/#project"
              onClick={handleNavLink}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              smooth
              to="/#contact"
              onClick={handleNavLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavBar;
