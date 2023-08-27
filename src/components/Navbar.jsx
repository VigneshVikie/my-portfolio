import React from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <nav className="navbar">
          <h1>
            <Link className="nav-link" smooth to="/#">
              Portfo.
            </Link>
          </h1>
          <ul>
            <li>
              <Link className="nav-link" smooth to="/#">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" smooth to="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-link" smooth to="/#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="nav-link" smooth to="/#project">
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
