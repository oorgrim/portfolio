import React, { useState } from "react";
import useMovement from "../hooks/useMovement";
import "../assets/styles/window.css";
import "../assets/styles/skills.css";

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Django", description: "Creating web applications with Django." },
      { name: "C# (ASP.NET)", description: "Developing web applications with ASP.NET." },
      { name: "Python + OpenCV", description: "Python and computer vision with OpenCV." },
      { name: "Solidity", description: "Smart contract development." },
      { name: "Aiogram/Telebot", description: "Creating Telegram bots with Python." }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", description: "Building interactive interfaces." },
      { name: "JavaScript", description: "Frontend development." }
    ]
  },
  {
    category: "Game Development",
    skills: [
      { name: "Unity", description: "Game development." },
      { name: "C#", description: "Programming for games." }
    ]
  },
  {
    category: "Algorithms & Data Structures",
    skills: [
      { name: "Algorithms", description: "Optimization and algorithm complexity." }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", description: "Studied at school." },
      { name: "MSSQL", description: "Studied at IT Step Academy." },
      { name: "PostgreSQL", description: "Working with databases." }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", description: "Application containerization." },
      { name: "Git", description: "Version control." },
      { name: "VirtualBox", description: "System virtualization." }
    ]
  },
  {
    category: "Networking & Cybersecurity",
    skills: [
      { name: "Cisco Packet Tracer", description: "Network simulation." }
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Windows", description: "Working with Windows." },
      { name: "MacOS", description: "Working with MacOS." },
      { name: "Ubuntu", description: "Working with Ubuntu." },
      { name: "Red Hat Linux", description: "Working with Red Hat Linux." }
    ]
  },
  {
    category: "Software & Design",
    skills: [
      { name: "Adobe Photoshop", description: "Graphic design." },
      { name: "Adobe Illustrator", description: "Vector graphics." },
      { name: "After Effects", description: "Animation and visual effects." },
      { name: "Premiere Pro", description: "Video editing." },
      { name: "Figma", description: "UI/UX design." },
      { name: "Canva", description: "Creating beautiful presentations." },
      { name: "SketchUp", description: "3D modeling." },
      { name: "Blender", description: "3D animation and modeling." }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Visual Studio", description: "Development environment for C#." },
      { name: "Visual Studio Code", description: "Code editor." },
      { name: "PyCharm", description: "Development environment for Python." }
    ]
  }
];

const SkillsWindow = ({ closeWindow }) => {
  const { ref, handleMouseDown, offset } = useMovement();
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div
      className="window"
      ref={ref}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <span>💻 Skills</span>
        <button className="close-btn" onClick={closeWindow}>✖</button>
      </div>
      <div className="window-body">
        {skillsData.map((section) => (
          <div key={section.category}>
            <button className="category-btn" onClick={() => toggleCategory(section.category)}>
              {openCategories[section.category] ? "🔽" : ""} {section.category}
            </button>
            {openCategories[section.category] && (
              <ul className="skill-list">
                {section.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <strong>{skill.name}</strong> – <span className="skill-desc">{skill.description}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWindow;
