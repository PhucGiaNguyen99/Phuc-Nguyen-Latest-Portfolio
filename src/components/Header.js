import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Profile Image + Name & Title in the Same Row by putting them in profile-section. */}
        <h1>Phuc Nguyen</h1>
        <div className="profile-section">
          <img src="/Official_selfie.jpg" alt="Phuc Nguyen" className="profile-img" />
          <div className="name-title">
            CS Graduate @ GMU ’25 <br />
            <p className="subtitle">
            Open to Entry-Level Roles <br />
            <span className="highlight-role">Software Engineer</span> <br />
            <span className="highlight-role">Android Developer</span> <br />
            <span className="highlight-role">Full-stack Developer</span> <br />
            
          </p>
          </div>
        </div>

        {/* 📌 Divider Line */}
        <div className="vertical-divider"></div>

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Social Media + Download Resume Button */}
        <div className="header-cta">
          <div className="social-icons">
            <a href="https://github.com/PhucGiaNguyen99" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/phucgnguyen/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a href="/Phuc_Nguyen_Resume_May2025_AndroidDeveloper_FullStackDeveloper.docx" className="btn" download>Download Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
