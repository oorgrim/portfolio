import React, { useState, useRef, useEffect } from "react";
import ProjectsWindow from "./ProjectsWindow";
import ContactWindow from "./ContactWindow";
import SkillsWindow from "./SkillsWindow";
import AboutMe from "./AboutMe";
import "../assets/styles/terminal.css";

const Terminal = ({ closeWindow }) => {
  const [output, setOutput] = useState([
    "Welcome to Tomi's Terminal!",
    "Type 'help' to see available commands",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [openWindows, setOpenWindows] = useState({
    projects: false,
    contact: false,
    skills: false,
    aboutMe: false,
  });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const offset = useRef({ x: 0, y: 0 });

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const bringToFront = () => {
    setZIndex((prev) => prev + 1);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    bringToFront();
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
  
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const termWidth = 800;
    const termHeight = 700;
  
    let newX = e.clientX - offset.current.x;
    let newY = e.clientY - offset.current.y;
  
    newX = Math.max(0, Math.min(screenWidth - termWidth, newX));
    newY = Math.max(0, Math.min(screenHeight - termHeight, newY));
  
    setPosition({ x: newX, y: newY });
  };
  
  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      let response = "";
      if (command) {
        setHistory([...history, command]);
      }
      switch (command) {
        case "help":
          response = "Available commands: help, whoami, skills, projects, contact, clear, exit";
          break;
        case "whoami":
          setOpenWindows((prev) => ({ ...prev, aboutMe: true }));
          response = "User: Tomiris (Cybersecurity & Software Engineer)";
          break;
        case "skills":
          setOpenWindows((prev) => ({ ...prev, skills: true }));
          response = "Opening Skills Window...";
          break;
        case "projects":
          setOpenWindows((prev) => ({ ...prev, projects: true }));
          response = "Opening Projects Window...";
          break;
        case "contact":
          setOpenWindows((prev) => ({ ...prev, contact: true }));
          response = "Opening Contact Window...";
          break;
        case "clear":
          setOutput([]);
          setInput("");
          return;
        case "exit":
          closeWindow();
          return;
        default:
          response = `Command not found: ${command}`;
      }
      setOutput([...output, `$ ${command}`, response]);
      setInput("");
    }
  };

  return (
    <div className="terminal-overlay">
      <div
        className="terminal1"
        style={{ left: position.x, top: position.y, zIndex }}
        onMouseDown={bringToFront}
      >
        <div className="terminal-header" onMouseDown={handleMouseDown}>
          <span>🔲 Terminal</span>
          <button className="close-btn" onClick={closeWindow}>✖</button>
        </div>
        <div className="terminal-body">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="terminal-input">
          <span>$</span>
          <input
            type="text"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
          />
        </div>
      </div>
      {openWindows.aboutMe && <AboutMe closeWindow={() => setOpenWindows((prev) => ({ ...prev, aboutMe: false }))} bringToFront={bringToFront} />}
      {openWindows.projects && <ProjectsWindow closeWindow={() => setOpenWindows((prev) => ({ ...prev, projects: false }))} bringToFront={bringToFront} />}
      {openWindows.contact && <ContactWindow closeWindow={() => setOpenWindows((prev) => ({ ...prev, contact: false }))} bringToFront={bringToFront} />}
      {openWindows.skills && <SkillsWindow closeWindow={() => setOpenWindows((prev) => ({ ...prev, skills: false }))} bringToFront={bringToFront} />}
    </div>
  );
};

export default Terminal;
