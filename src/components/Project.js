import React from "react";
import "./styles.css";

const Projects = () => {
    return (
        <section className="content-section" id="projects">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <h3 className="project-title">🎓 Gather Mason</h3>
                    <p className="project-description">
                        A full-stack event management platform for students to create, browse, and join campus events. Includes user authentication, role-based access, automated email reminders, and real-time filtering features.
                    </p>
                    <ul className="project-features">
                        <li>🔐 JWT Authentication & Role-Based Access</li>
                        <li>📅 Full CRUD for events with personalized dashboard</li>
                        <li>📧 Automated event reminders using AWS Lambda & Nodemailer</li>
                        <li>🔍 Dynamic search and filtering (title, location, date)</li>
                        <li>⚛️ Built with React, Node.js, Express, and MongoDB</li>
                    </ul>
                    <div className="project-links">
                        <a href="https://github.com/PhucGiaNguyen99/Gather-Mason" target="_blank" rel="noopener noreferrer">GitHub</a>
                        {/* Optional: Add deployed site link */}
                        {/* <a href="https://gathermason.app" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
