import React from "react";
import useMovement from "../hooks/useMovement";
import "../assets/styles/window.css";

const SkillsWindow = ({ closeWindow }) => {
  const { ref, handleMouseDown, offset } = useMovement();

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
        <p>🔧 Skills:</p>
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>React</li>
          <li>C++</li>
          <li>Cybersecurity</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsWindow;
