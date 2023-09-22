import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import moviemario from "../assets/movie-mario.jpg"
import pokemon from "../assets/pokemon.jpg"

const Project = () => {
  return (
    <div id="project">
      <h1>Portfolio</h1>
      <div className="project-content">
        <div className="project-cards project-cards1">
          <div className="proj-img">
            <img
              onClick={() =>
                window.open("https://moviemania-d0ed2.web.app/", "_blank")
              }
              src={moviemario}
              alt=""
            />
          </div>
          <div className="proj-desc">
            <h1>Movie Mario</h1>
            <p>
              A responsive web Application developed using React + firebase. The
              core idea of this app is to search through a vast collection of
              movies.
            </p>
            <div className="proj-skills">
              <h4>React</h4>
              <h4>MUI</h4>
              <h4>Firebase</h4>
            </div>
            <div className="proj-source">
              <div className="proj-icons">
                <p>
                  <a href="https://github.com/VigneshVikie" target="_blank">
                    Code
                  </a>
                </p>
                <FaGithub />
              </div>
              <div className="proj-icons">
                <p>
                  <a href="https://moviemania-d0ed2.web.app/" target="_blank">
                    Live Demo
                  </a>
                </p>
                <CiShare1 />
              </div>
            </div>
          </div>
        </div>
        <div className="project-cards project-cards2">
          <div className="proj-desc">
            <h1>Pokemon App</h1>
            <p>
              A dynamic Pokemon app featuring paginated listings and detailed
              profiles, seamlessly integrating real-time rendering and
              interactive evolution data.
            </p>
            <div className="proj-skills">
              <h4>Next JS</h4>
              <h4>GraphQL</h4>
              <h4>CSS</h4>
            </div>
            <div className="proj-source">
              <div className="proj-icons">
                <p>
                  <a
                    target="_blank"
                    href="https://github.com/VigneshVikie/PokemonApp"
                  >
                    Code
                  </a>
                </p>
                <FaGithub />
              </div>
              <div className="proj-icons">
                <p>
                  <a
                    target="_blank"
                    href="https://pokemon-app-delta-seven.vercel.app/"
                  >
                    Live Demo
                  </a>
                </p>
                <CiShare1 />
              </div>
            </div>
          </div>
          <div className="proj-img">
            <img
              onClick={() =>
                window.open(
                  "https://pokemon-app-delta-seven.vercel.app/",
                  "_blank"
                )
              }
              src={pokemon}
              alt=""
            />
          </div>
          {/* <div className="project-cards project-cards3">
            <img src="src\assets\pokemon.PNG" alt="" />
            <h1>Pokemon App</h1>
            <p>
              A dynamic Pokemon app featuring paginated listings and detailed
              profiles, seamlessly integrating real-time rendering and
              interactive evolution data.
            </p>
          </div> */}
        </div>
        {/* <div className="view-projects">
          <Link to="/allprojects">
            <button className="project-btn">View all Projects</button>
          </Link>
          <Link to="/allprojects">
            <div className="arrow">
              <svg
                width="26"
                height="20"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                  fill="#FF4C60"
                />
              </svg>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
