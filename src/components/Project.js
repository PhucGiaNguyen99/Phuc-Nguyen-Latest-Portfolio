import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <section className="content-section" id="projects">
      <h2 className="section-title">🚀 Projects</h2>

      {/* === Project: Gather Mason === */} 
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">Gather Mason</h3>
          <p className="project-description">
            Gather Mason is a production-ready full-stack web application designed to help students create, browse, and join campus events efficiently. The platform offers secure user authentication, dynamic event participation management, and automated reminders, with real-time interactions and a scalable architecture built for deployment.
          </p>
        </div>
        <div className="project-body">
          <ul className="project-features">
            <li>
              <strong>Secure Authentication and Role-Based Access:</strong> Implemented robust JWT authentication and authorization, ensuring only authorized users can create, update, or delete events. Role-based permissions protect event data integrity and enhance application security.
            </li>
            <li>
              <strong>Comprehensive Event Management System:</strong> Developed full CRUD functionality for events, allowing users to create, browse, update, and delete events easily. Users can track created events and joined events through a personalized dashboard with real-time updates.
            </li>
            <li>
              <strong>Automated Email Notifications:</strong> Integrated AWS Lambda, EventBridge, and Nodemailer to automatically send reminder emails to participants before their events. This serverless solution increases user engagement without burdening the core backend.
            </li>
            <li>
              <strong>Advanced Event Search and Filtering:</strong> Built flexible search features that allow users to find events quickly by title, location, and date. Backend APIs use optimized query logic for fast and accurate results.
            </li>
            <li>
              <strong>Professional Deployment with HTTPS:</strong> Deployed the backend on Render and the frontend on Vercel, ensuring fully encrypted HTTPS communication. The frontend connects seamlessly to the backend API without any mixed content issues.
            </li>
            <li>
              <strong>Tech Stack:</strong> Built with React for the frontend, Node.js and Express for the backend, and MongoDB for persistent database storage.
            </li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/PhucGiaNguyen99/Gather-Mason"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://gather-mason.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "1rem" }}
            >
              Live Demo
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
