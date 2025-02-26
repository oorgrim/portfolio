import React from "react";
import "../assets/styles/window.css";
import useMovement from "../hooks/useMovement";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Vinylon",
    link: "https://github.com/oorgrim/vinylon/tree/tomi-develop",
    description: "A platform for listening to and buying vinyl recordings.",
    image: "/icons/github.png",
  },
  {
    name: "ASCII-convertor",
    link: "https://github.com/oorgrim/ascii-convertor",
    description: "The system for converting photos to ASCII characters in C# was written by me when I was 12-13 years old",
    image: "/icons/project2.png",
  },
  {
    name: "Portfolio",
    link: "https://github.com/oorgrim/portfolio",
    description: "The portfolio you see now:)",
    image: "/icons/project3.png",
  },
  {
    name: "My Own Comics Website",
    link: "https://tomicomics.vercel.app/",
    description: "A card website for a comic book. All the illustrations were drawn by me, a fairly old project, preferably opened from laptops/PCs/tablets, as adaptability was not provided.",
    image: "/icons/project4.png",
  },
  {
    name: "Smart Camera System (CyberGuard)",
    link: "https://github.com/oorgrim/smart-camera-system",
    description: "A Python/OpenCV project to improve the security system using computer vision. The project is still being written, updates will be added soon.",
    image: "/icons/project4.png",
  },
  {
    name: "Gallery of Memory of the Panfilov's Guardsmen",
    link: "https://github.com/oorgrim/Panfilov-s-Twenty-Eight-Guardsmen-Info",
    description: "The website is a gallery dedicated to the event dedicated to the memory of the Panfilov heroes for the school. The website was written in 2 days.",
    image: "/icons/project4.png",
  },
];

const ProjectsWindow = ({ closeWindow, bringToFront, zIndex }) => {
  const { ref, handleMouseDown, offset } = useMovement();

  return (
    <div
      className="window projects-window kali-theme"
      ref={ref}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, zIndex }}
      onMouseDown={bringToFront}
    >
      <div className="window-header projects-header kali-header" onMouseDown={handleMouseDown}>
        <span>📂 Projects</span>
        <button className="close-btn kali-close" onClick={closeWindow}>✖</button>
      </div>
      <div className="window-body projects-body kali-body">
        {projects.map((project, index) => (
          <div key={index} className="project-item kali-item">
            <div className="project-info">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> {project.name}
              </a>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWindow;
