import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import MobileNavBar from "./MobileNavBar";

import "../App.css";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("nav-bar-hidden");
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkClicked , setIsLinkClicked] = useState(false)
  const handleMenu = () => {
    if (!isClicked) {
      setBurgerClass("nav-bar-visible");
    } else {
      setBurgerClass("nav-bar-hidden");
    }
    setIsClicked(!isClicked);
  };
  return (
    <>
      <MobileNavBar
        burgerClass={burgerClass}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <div className="nav">
        <nav className="navbar">
          <h1>
            <Link className="nav-link" smooth to="/#">
              Vikie.dev
            </Link>
          </h1>

          <ul className="nav-bar-hidden">
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
          <label htmlFor="burger" className="burger">
            <input onClick={handleMenu} id="burger" className="burger-checkbx" type="checkbox" checked={isClicked}/>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
