import React, { useState, useEffect } from "react";
import "../assets/styles/desktop.css";

const Desktop = ({ openTerminal, openProjects }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="desktop">
      <div className="desktop-icons">
        <div className="icon" onClick={openTerminal}>
          <img src="/icons/terminal.svg" alt="Terminal" />
          <span>Terminal</span>
        </div>
        <div className="icon" onClick={openProjects}>
          <img src="/icons/folder.png" alt="Projects" />
          <span>Projects</span>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Desktop;
