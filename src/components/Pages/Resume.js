import React, { Fragment } from "react";
import resume from "./data/resume.json";
import "./Styles/Resume.css";
import Footer from "../assets/Footer";

function Resume() {
  const {
    personal_details,
    objectives,
    education,
    projects,
    skills,
    certificates,
  } = resume;
  const { name, address, mobile, email } = personal_details;

  return (
    <div className="resume">
      <div className="intro">
        <div className="name">
          <strong>{name}</strong>
        </div>
        <div className="address">{address}</div>
        <div className="mobile">{mobile}</div>
        <div className="resume-email">
          <a>{email}</a>
        </div>
      </div>

      <div className="objectives">
        <div className="resume-heading">Objectives</div>
        <ul>
          {objectives &&
            objectives.map((objective) => (
              <li key={objective} className="objective">
                {objective}
              </li>
            ))}
        </ul>
      </div>
      <div className="education">
        <div className="resume-heading">Education</div>
        <div className="education-section">
          {education &&
            education.map((section) => (
              <Fragment key={section.course}>
                <div className="course">
                  {section.status === "pursuing"
                    ? `Pursuing ${section.course}`
                    : section.course}
                </div>
                <div className="span">{section.span}</div>
                <div className="institution">{section.institution}</div>
                {section.marks.map((mark, index) => (
                  <Fragment key={`${index}`}>
                    {mark.class && (
                      <div className="mark-class">
                        <strong>{mark.class}</strong>
                      </div>
                    )}
                    <div className="mark-type">
                      <strong>{mark.type} : </strong>
                      <span>{mark.mark}</span>
                    </div>
                    <br />
                  </Fragment>
                ))}
              </Fragment>
            ))}
          <div className="resume-projects">
            <div className="resume-heading">Projects</div>
            <div className="project-section">
              {projects &&
                projects.map((project) => (
                  <Fragment key={project.name}>
                    <div className="project-name">{project.name}</div>
                    <div className="project-url">
                      <a href={project.url}>{project.url}</a>
                    </div>
                    <div className="project-span">{project.span}</div>
                    <div className="project-description">
                      {project.description}
                    </div>
                    <div className="project-button">
                      <a href={project.url}>See Project</a>
                    </div>
                  </Fragment>
                ))}
            </div>
          </div>
          <div className="skills">
            <div className="resume-heading">Skills</div>
            <div className="skill-list">
              <ul>
                {skills &&
                  skills.map((skill) => (
                    <li className="skillset" key={skill.name}>
                      <div className="skill">{skill.name}</div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="certificates">
              <div className="resume-heading">Certificates</div>
              <div>
                {certificates &&
                  certificates.map((certificate) => (
                    <Fragment key={certificate.description}>
                      <div className="certificate-name">
                        {certificate.certificate}
                      </div>
                      <div className="certificate-date">{certificate.date}</div>
                      <div className="certificate-description">
                        {certificate.description}
                      </div>
                      <div className="certificate-issuer">
                        {certificate.issuer}
                      </div>
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Resume;
