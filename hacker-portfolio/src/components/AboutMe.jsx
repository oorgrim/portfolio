import React from "react";
import "../assets/styles/window.css";
import "../assets/styles/whoami.css";
import useDraggable from "../hooks/useMovement";

const AboutMeWindow = ({ closeWindow }) => {
    const { ref, handleMouseDown, offset } = useDraggable();

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
        <p>Welcome to this page!</p>
        <div className="text">
            <div className="heart">
            <p>█▀▀▀▀▀▀▀▀▀█
                ▌░▄██▄██▄░ ▌
                ▌░███████░ ▌
                ▌░░▀███▀░░ ▌
                ▌░░░░▀░░░░ ▌
                █▄▄▄▄▄▄▄▄▄█</p></div>
            
            <div className="myText">            <p>Hi, I’m Tomiris – a passionate and ambitious software developer focused on cybersecurity and cutting-edge tech. Studying Software Engineering at IT Step Academy, I’m mastering a wide range of skills, preparing for Cisco CCNA certification, and deepening my cybersecurity expertise.</p>
            <br />
            <p>Age: 17</p>

            <div className="download-buttons">
                <a href="/files/resume.pdf" download className="download-btn">Download Resume</a>
                <a href="/files/characteristics.pdf" id="characteristics" download className="download-btn">Download Characteristics</a>
            </div>

            <div className="languages">
            <h2>🌍 Languages</h2>
            <div className="language-item">
                <span className="lang">English</span>
            </div>
            <div className="language-item">
                <span className="lang">Kazakh</span>
            </div>
            <div className="language-item">
                <span className="lang">Russian</span>
            </div>
        </div>

            <div className="certificates">
            <h2>📜 Diplomas & Certificates</h2>
            
            <div className="certificate-item">
                <span className="cert">ITStep Junior Academy Diploma</span>
                <a href="/certificates/it1diploma.pdf" download className="download-btn">⬇ Download</a>
            </div>

            <div className="certificate-item">
                <span className="cert">Cisco Networking Academy IT Essentials</span>
                <a href="/certificates/cisco_skills.pdf" download className="download-btn">⬇ Download</a>
                </div>
                <a id="scndBtn" href="/certificates/cisco_it_essentials.pdf" download className="download-btn">⬇ Download</a><br />
        </div>

<div className="experience">
    <h2>💼 Experience</h2>

    <div className="experience-item">
        <span className="year">2024 June</span>
        <div className="exp-details">
            <h3>ITStep Academy</h3>
            <p>IT-start Teacher Intern</p>
        </div>
    </div>

    <div className="experience-item">
        <span className="year">2024 June</span>
        <div className="exp-details">
            <h3>ITStep Academy</h3>
            <p>Python Teacher</p>
        </div>
    </div>

    <div className="experience-item">
        <span className="year">2024-2025</span>
        <div className="exp-details">
            <h3>Backend Developer Intern</h3>
        </div>
    </div>
</div>



            <div class="education">
            <h2>🎓 Education</h2>
            <div class="education-item">
                <span class="year">2022-2024</span>
                <div class="edu-details">
                    <h3>134 Lyceum</h3>
                    <p>MPhI - Mathematics, Physics, Informatics</p>
                </div>
            </div>
            <div class="education-item">
                <span class="year">2024-2025</span>
                <div class="edu-details">
                    <h3>IT Lyceum №54</h3>
                </div>
            </div>
        </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AboutMeWindow;