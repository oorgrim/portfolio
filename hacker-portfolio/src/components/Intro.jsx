
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../assets/styles/intro.css";

export default function StartScreen({ onStart }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showTypeText, setShowTypeText] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.toLowerCase() === "y") {
      onStart();
    } else if (input.toLowerCase() === "n") {
      setError("Maybe next time!");
    } else {
      setError("Invalid input. Type Y or N.");
    }
    setInput("");
  };

  return (
    <div className="start-screen">
      <div className="content">
        <TypeAnimation
          sequence={[
            "Welcome to my portfolio website!", 
            1000, 
            () => setShowTypeText(true)
          ]}
          wrapper="h1"
          cursor={false}
          className={`welcome-text ${showTypeText ? "move-up" : ""}`}
        />

        {showTypeText && <p className="type-text">Type Y/N to continue...</p>}
      </div>

      <div className="terminal-wrapper">
        <form onSubmit={handleSubmit} className="terminal">
          <span className="prompt">$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
