import React, { useState, useEffect } from "react";
import "../assets/styles/desktop.css";
import ProjectsWindow from "./ProjectsWindow";

const Desktop = ({ openTerminal }) => {
  const [time, setTime] = useState("");
  const [windows, setWindows] = useState([]);
  const [zIndexCounter, setZIndexCounter] = useState(1);

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
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), type: windowType, zIndex: zIndexCounter + 1 },
    ]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const bringToFront = (id) => {
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: zIndexCounter + 1 } : win
      )
    );
  };

  return (
    <div className="desktop">
      <div className="desktop-icons">
        <div className="icon" onClick={openTerminal}>
          <img src="/icons/terminal.svg" alt="Terminal" />
          <span>Terminal</span>
        </div>
        <div className="icon" onClick={() => openWindow("projects")}>
          <img src="/icons/folder.png" alt="Projects" />
          <span>Projects</span>
        </div>
      </div>

      {windows.map((win) =>
        win.type === "projects" ? (
          <ProjectsWindow
            key={win.id}
            closeWindow={() => closeWindow(win.id)}
            bringToFront={() => bringToFront(win.id)}
            zIndex={win.zIndex}
          />
        ) : null
      )}

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
