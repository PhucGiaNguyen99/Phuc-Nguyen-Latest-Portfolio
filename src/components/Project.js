import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <section className="content-section" id="projects">
      <h2 className="section-title">🚀 Projects</h2>

      {/* === Project: Gather Mason === */}
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">🎓 Gather Mason</h3>
          <p className="project-description">
            A full-stack event management platform for students to create, browse, and join campus events.
          </p>
        </div>
        <div className="project-body">
          <ul className="project-features">
            <li>🔐 JWT Authentication & Role-Based Access</li>
            <li>📅 Full CRUD for events with personalized dashboard</li>
            <li>📧 Automated event reminders using AWS Lambda & Nodemailer</li>
            <li>🔍 Dynamic search and filtering (title, location, date)</li>
            <li>⚛️ Built with React, Node.js, Express, and MongoDB</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/PhucGiaNguyen99/Gather-Mason"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === Project: Food Ingredient Scanner === */}
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">🍏 Food Ingredient Scanner</h3>
          <p className="project-description">
            Android app for scanning food ingredient labels/barcodes and retrieving product data using ML Kit and Open Food Facts API.
          </p>
        </div>
        <div className="project-body">
          <ul className="project-features">
            <li>📱 Java & Android SDK with Material Design</li>
            <li>📸 CameraX for image and barcode capture</li>
            <li>🧠 ML Kit OCR for label extraction</li>
            <li>🌐 Open Food Facts API integration</li>
            <li>🔗 Retrofit for networking</li>
            <li>🧩 Modular pages: Capture, Scan, Result</li>
            <li>🧪 Unit tested API with JUnit & Mockito</li>
            <li>🗃️ Planned: Room DB for scan history</li>
            <li>🧬 Planned: Health-based ingredient insights</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/PhucGiaNguyen99/Ingredients-Scanner"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === Project: TrackMyReps === */}
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">🏋️ TrackMyReps</h3>
          <p className="project-description">
            Android workout tracker for managing exercises, building workout plans, and logging progress with session state support.
          </p>
        </div>
        <div className="project-body">
          <ul className="project-features">
            <li>📋 Add/edit/delete exercises (sets, reps, weight)</li>
            <li>🧠 Input validation and crash protection</li>
            <li>✅ Plan workouts by selecting exercises</li>
            <li>💪 Track completed exercises in-session</li>
            <li>📤 Handles screen rotation with global state</li>
            <li>🗃️ SQLite for persistent data storage</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/PhucGiaNguyen99/TrackMyReps"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
