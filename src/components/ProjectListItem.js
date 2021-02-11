import React, { Component } from 'react';
import '../css/Projects.css';

function ProjectListItem({ photo, title, subtitle, skills, description, ghLink, demoLink }) {
  console.log(skills)
  return (
    <div className="project">
      <div className="project-photo">
        <img src={photo}></img>
      </div>
      <div className="profile-title">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <ul className="skills">
        {skills.map((skillitem) => (
          <li>{skillitem}</li>
        ))}
      </ul>
      <div className="project-description">
        <p>{description}</p>
      </div>
      <div className="github-link">
        <a href={ghLink}>GitHub</a>
      </div>
      { demoLink
        ? <div className="demo-link">
            <a href={demoLink}>Demo</a>
          </div>
        : null
      }
  </div>
  );
}

export default ProjectListItem;