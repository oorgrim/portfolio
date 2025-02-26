import React, { useState, useEffect } from "react";
import "../assets/styles/desktop.css";
import ProjectsWindow from "./ProjectsWindow";
import SkillsWindow from "./SkillsWindow";
import AboutMe from "./AboutMe";
import ContactWindow from "./ContactWindow";
import Terminal from "./Terminal";

const Desktop = () => {
  const [time, setTime] = useState("");
  const [windows, setWindows] = useState([]);
  const [zIndexCounter, setZIndexCounter] = useState(1);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openWindow = (windowType) => {
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) => {
      let existingWindow = prev.find((win) => win.type === windowType);
      
      if (existingWindow) {
        return prev.map((win) =>
          win.id === existingWindow.id ? { ...win, zIndex: zIndexCounter + 1 } : win
        );
      }
  
      return [...prev, { id: Date.now(), type: windowType, zIndex: zIndexCounter + 1 }];
    });
  };
  
  const bringToFront = (id) => {
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: zIndexCounter + 1 } : win
      )
    );
  };
  
  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };


  return (
    <div className="desktop">
      <div className="desktop-icons">
          <div className="icon" onClick={() => openWindow("terminal")}>
      <img src="/icons/terminal.png" alt="Terminal" />
      <span>Terminal</span>
    </div>
        <div className="icon" onClick={() => openWindow("projects")}>
          <img src="/icons/projects.png" alt="Projects" />
          <span>Projects</span>
        </div>
        <div className="icon" onClick={() => openWindow("aboutme")}>
          <img src="/icons/me.png" alt="About Me" />
          <span>About Me</span>
        </div>
        <div className="icon" onClick={() => openWindow("skills")}>
          <img src="/icons/skills.png" alt="Skills" />
          <span>Skills</span>
        </div>
        <div className="icon" onClick={() => openWindow("contact")}>
          <img src="/icons/contact.png" alt="Contact" />
          <span>Contact</span>
        </div>
      </div>

      {windows.map((win) => {
        const WindowComponent =
          win.type === "terminal"
            ? Terminal
            : win.type === "projects"
            ? ProjectsWindow
            : win.type === "aboutme"
            ? AboutMe
            : win.type === "skills"
            ? SkillsWindow
            : win.type === "contact"
            ? ContactWindow
            : null;

        return (
          WindowComponent && (
            <div
              key={win.id}
              style={{ zIndex: win.zIndex }}
              onMouseDown={() => bringToFront(win.id)}
            >
            <WindowComponent closeTerminal={() => closeWindow(win.id)} closeWindow={() => closeWindow(win.id)} />
            </div>
          )
        );
      })}

      <div className="taskbar">
        <div className="menu">
          <span className="menu-button">☰</span>
        </div>
        <div className="taskbar-icons">
          <span className="taskbar-item">🔍</span>
          <span className="taskbar-item">📶</span>
          <span className="taskbar-item">🔊</span>
          <span className="taskbar-item">⚙️</span>
        </div>
        <div className="clock">{time}</div>
        <div className="avatar" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <img src="/icons/user.png" alt="User Avatar" />
        </div>
        {showProfileMenu && (
          <div className="profile-menu">
            <p>Profile Settings</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desktop;
