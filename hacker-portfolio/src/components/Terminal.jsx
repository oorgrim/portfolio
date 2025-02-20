import React, { useState } from "react";
import "../assets/styles/terminal.css";

const Terminal = ({ closeTerminal }) => {
  const [output, setOutput] = useState([
    "Welcome to Kali Terminal",
    "Type 'help' to see available commands",
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      let response = "";

      switch (command) {
        case "help":
          response = "Available commands: help, clear, exit";
          break;
        case "clear":
          setOutput([]);
          setInput("");
          return;
        case "exit":
          closeTerminal();
          return;
        default:
          response = `Command not found: ${command}`;
      }

      setOutput([...output, `> ${command}`, response]);
      setInput("");
    }
  };

  return (
    <div className="terminal-overlay">
      <div className="terminal">
        <div className="terminal-header">
          <span>🔲 Terminal</span>
          <button className="close-btn" onClick={closeTerminal}>✖</button>
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
