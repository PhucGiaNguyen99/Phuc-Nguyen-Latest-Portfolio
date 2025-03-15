import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Phuc Nguyen</p>
        <p>Designed & Built by Phuc Nguyen</p>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
