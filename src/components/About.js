import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">Hi Everyone! 👋</h2>

      <p className="intro-text">
        I’m a <strong>Computer Science senior</strong> at <strong>George Mason University</strong> with a passion for building <strong>Android apps</strong> and <strong>full-stack web applications</strong>.  
        I love turning real-world problems into clean, user-friendly software — whether it’s a mobile app or a scalable backend.
      </p>

      {/* 📌 Skills Section */}
      <div className="skills-grid">
        <div className="skill-card">
          💻 <strong>Backend</strong><br />
          Node.js, Express, NestJS, Koa, MongoDB, SQLite
        </div>
        <div className="skill-card">
          🌐 <strong>Frontend</strong><br />
          React, Material UI, Responsive Design
        </div>
        <div className="skill-card">
          📱 <strong>Android</strong><br />
          Java, Android SDK, CameraX, ML Kit, Retrofit
        </div>
        <div className="skill-card">
          🧪 <strong>Testing & Tools</strong><br />
          Jest, Supertest, Docker, Git, VS Code
        </div>
      </div>

      <p className="about-text">
        I’ve worked on event platforms, food scanner apps, and workout trackers — sharpening my skills in <strong>API development</strong>, <strong>mobile UI</strong>, and <strong>data processing</strong>.  
        I focus on writing clean, reliable code that’s easy to maintain and fun to use.
      </p>

      {/* 📌 Job Seeking */}
      <div className="job-card">
        🚀 <strong>Actively seeking an entry-level opportunity</strong> in:
        <ul>
          <li>✅ Software Engineering</li>
          <li>✅ Web & Mobile Development</li>
          <li>✅ Data Analysis</li>
        </ul>
        <p className="job-note">Let’s build something impactful together.</p>
      </div>

      {/* 📌 Fun Fact */}
      <div className="fun-fact">
        <h3>🎲 Fun Fact About Me!</h3>
        <p>
          I’m a huge fan of board games — whether it's Wingspan, Splendor, Catan, or Go, I’m always down for a match.  
          Challenge me anytime! 😄
        </p>
      </div>

      {/* 📌 Favorite Quote */}
      <div className="quote-section">
        <h3>✨ A Quote I Live By:</h3>
        <blockquote>
          "Live as if you were to die tomorrow. Learn as if you were to live forever."
          <span>— Mahatma Gandhi</span>
        </blockquote>
        <p>
          I believe in giving my best every day while staying curious and continuously learning.
        </p>
      </div>

      <p className="connect-text">
        Let’s connect, swap ideas, and create something awesome together! 🚀
      </p>
    </section>
  );
};

export default About;
