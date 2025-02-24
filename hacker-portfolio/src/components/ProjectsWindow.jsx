import React from "react";
import "../assets/styles/window.css";
import useMovement from "../hooks/useMovement";

const ProjectsWindow = ({ closeWindow, bringToFront, zIndex }) => {
  const { ref, handleMouseDown, offset } = useMovement();

  return (
    <div
      className="window"
      ref={ref}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        zIndex: zIndex,
      }}
      onMouseDown={bringToFront}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <span>📂 Projects</span>
        <button className="close-btn" onClick={closeWindow}>✖</button>
      </div>
      <div className="window-body">
        <p>🔹 Project 1: </p>
        <p>🔹 Project 2: </p>
        <p>🔹 Project 3: </p>
        <p>🔹 Project 4: </p>
      </div>
    </div>
  );
};

export default ProjectsWindow;
