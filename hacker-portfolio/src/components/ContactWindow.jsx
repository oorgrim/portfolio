import React, { useState } from "react";
import "../assets/styles/window.css";
import "../assets/styles/contact.css";
import useMovement from "../hooks/useMovement";

const AboutMeWindow = ({ closeWindow }) => {
  const { ref, handleMouseDown, offset } = useMovement();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) {
      setStatus("Please fill out all fields.");
      return;
    }
    
    console.log("Message sent:", { email, message });
    setStatus("Message sent successfully!");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="window" ref={ref} style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
      <div className="window-header" onMouseDown={handleMouseDown}>
        <span>Contact</span>
        <button className="close-btn" onClick={closeWindow}>✖</button>
      </div>
      <div className="window-body">
        <p>📩 Contact me:</p>
        <ul>
          <li>Email: <a href="mailto:oorgrim@gmail.com">oorgrim@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/oorgrim" target="_blank">github.com/oorgrim</a></li>
          <li>Telegram: <a href="https://t.me/yaredazed" target="_blank">@yaredazed</a></li>
        </ul>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email" 
            className="contact-input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Your message" 
            className="contact-input" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
          <button type="submit" className="send-btn">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default AboutMeWindow;
