import React from "react";
import "./Styles/Projects.css";
import projects from "../Pages/data/projects.json";
import Footer from "../assets/Footer";

export const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="heading">PROJECTS</h1>
      <div>
        <div>
          {projects &&
            projects.map((project) => (
              <div className="project" key={project.name}>
                <div className="project-name-project">{project.name}</div>

                <div className="project-desktop-image">
                  <div className="img">
                    <img src={project.project_desktop_image} alt="" />
                  </div>
                </div>

                <div className="project-mobile-image">
                  <div className="img">
                    <img src={project.project_mobile_image} alt="" />
                  </div>
                </div>
                <div className="project-description-project">
                  {project.description}
                </div>
                <div className="tech-used">
                  <div
                    style={{
                      color: "#ad6684",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Technologies Used
                  </div>
                  <div>
                    <ul>
                      {project.technologies.map((technology) => (
                        <li className="tech-list" key={technology.name}>
                          {technology.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <div>
                    <a className="project-url" href={project.url}>
                      See Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
