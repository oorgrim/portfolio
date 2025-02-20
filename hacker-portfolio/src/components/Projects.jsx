import React from "react";
import "../assets/styles/projects.css";

const ProjectsWindow = ({ closeProjects }) => {
  const projects = [
    { name: "Portfolio", type: "Folder" },
    { name: "Django Project", type: "Folder" },
    { name: "React App", type: "Folder" },
  ];

  return (
    <div className="projects-overlay">
      <div className="projects-window">
        <div className="projects-header">
          <span>📁 Projects</span>
          <button className="close-btn" onClick={closeProjects}>✖</button>
        </div>
        <div className="projects-body">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src="/icons/folder.png" alt="Folder" />
              <span>{project.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;
