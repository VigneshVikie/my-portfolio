import React from "react";
import Typed from "typed.js";
import "../App.css";
import Experience from "./Experience";
import { MySkills } from "./MySkills";
import Project from "./Project";
import Contact from "./Contact";
import characterimg from "../assets/home-character.jpg"
import Footer from "./Footer";
import resume from "../assets/Resume/VigneshResume.pdf"

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Vignesh"],
      typeSpeed: 150,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="main">
        <div className="text">
          Hello, World! I'm <br />
          <span ref={el} />
          <br />
          <span className="sub-text">Front End Dev</span>
          <div className="resume">
            <button className="resume-btn">
              <a
                className="button"
                href={resume}
                download
              >
                Download Resume
              </a>
            </button>
            <hr className="line" />
          </div>
          <svg
            className="cube cube-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="162"
            viewBox="0 0 162 162"
            fill="none"
          >
            <path
              d="M80.9999 130.404L29.6709 100.769V41.4998L80.9999 11.8652L132.329 41.4998V100.769L80.9999 130.404Z"
              fill="#F9F3F5"
            />
            <path
              d="M132.329 41.4998L81.0001 11.8652L29.6714 41.4998L81.0001 71.1348V130.404L132.329 100.769V41.4998H132.329Z"
              fill="white"
            />
            <path
              d="M132.329 41.5L81 71.1349V130.404L132.329 100.77V41.5H132.329Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            className="cube1 cube-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
          >
            <path
              d="M55.9999 90.1559L20.5132 69.6677V28.6913L55.9999 8.20312L91.4866 28.6913V69.6675L55.9999 90.1559Z"
              fill="#F9F3F5"
            />
            <path
              d="M91.4862 28.6913L55.9997 8.20312L20.5132 28.6913L55.9997 49.1796V90.1558L91.4864 69.6677V28.6913H91.4862Z"
              fill="white"
            />
            <path
              d="M91.4865 28.6914L56 49.1797V90.156L91.4867 69.6679V28.6914H91.4865Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            className="cube3 cube-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path
              d="M55.9999 90.1559L20.5132 69.6677V28.6913L55.9999 8.20312L91.4866 28.6913V69.6675L55.9999 90.1559Z"
              fill="#F9F3F5"
            />
            <path
              d="M91.4862 28.6913L55.9997 8.20312L20.5132 28.6913L55.9997 49.1796V90.1558L91.4864 69.6677V28.6913H91.4862Z"
              fill="white"
            />
            <path
              d="M91.4865 28.6914L56 49.1797V90.156L91.4867 69.6679V28.6914H91.4865Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            className="cube2 cube-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M35.9994 57.9573L13.1865 44.7864V18.4444L35.9994 5.27344L58.8123 18.4444V44.7863L35.9994 57.9573Z"
              fill="#F9F3F5"
            />
            <path
              d="M58.8125 18.4444L35.9998 5.27344L13.187 18.4444L35.9998 31.6155V57.9573L58.8127 44.7864V18.4444H58.8125Z"
              fill="white"
            />
            <path
              d="M58.8128 18.4443L36 31.6154V57.9573L58.8129 44.7864V18.4443H58.8128Z"
              fill="#EBEBEB"
            />
          </svg>
        </div>
        <div className="character">
          <img src={characterimg} alt="" />
        </div>
      </div>
      <MySkills/>
      <Experience  />
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
