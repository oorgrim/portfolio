import React from "react";
import "../assets/styles/window.css";
import useMovement from "../hooks/useMovement";

const AboutMeWindow = ({ closeWindow }) => {
  const { ref, handleMouseDown, offset } = useMovement();

  return (
    <div
    className="window"
    ref={ref}
    style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
    <div className="window-header" onMouseDown={handleMouseDown}>
        <span>About Me</span>
        <button className="close-btn" onClick={closeWindow}>✖</button>
    </div>
    <div className="window-body">
        <p>📩 Contact me:</p>
        <ul>
        <li>Email: <a href="mailto:oorgrim@gmail.com">oorgrim@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/oorgrim" target="_blank">github.com/oorgrim</a></li>
        <li>Telegram: <a href="https://t.me/yaredazed" target="_blank">@yaredazed</a></li>
        </ul>
    </div>
    </div>
);
};

export default AboutMeWindow;