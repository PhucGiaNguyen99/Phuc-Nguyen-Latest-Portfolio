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

            <div className="project-container">
                <div className="project-card">
                    <h3 className="project-title">🎓 Food Ingredient Scanner</h3>
                    <p className="project-description">
                    A mobile Android application that allows users to scan food ingredient labels or barcodes to extract product details such as ingredients, calories, and additives. The app uses machine learning for OCR, integrates with the Open Food Facts API, and presents the data in a clean, user-friendly interface. Built with a modular structure to support future features like scan history, favorites, and ingredient health analysis.
                    </p>
                    <ul className="project-features">
                        <li>📱 Built with Java & Android SDK</li>
                        <li>📸 CameraX integration for image and barcode capture</li>
                        <li>🧠 ML Kit OCR for extracting text from ingredient labels</li>
                        <li>📦 ML Kit Barcode Scanning for identifying food products</li>
                        <li>🌐 Open Food Facts API integration for nutritional data</li>
                        <li>🔗 Retrofit for network calls and data parsing</li>
                        <li>📸 CameraX integration for image and barcode capture</li>
                        <li>🧩 Modular architecture with multiple activity pages (Capture, Scan, Result)</li>
                        <li>🎨 Material Design UI for intuitive navigation and modern visuals</li>
                        <li>🧪 Unit tested API layer using JUnit & Mockito</li>
                        <li>🗃️ (Planned) Room Database support for scan history and favorites</li>
                        <li>🧬 (Planned) Ingredient categorization and color-coded health insights</li>
                    </ul>
                    <div className="project-links">
                        <a href="https://github.com/PhucGiaNguyen99/Ingredients-Scanner" target="_blank" rel="noopener noreferrer">GitHub</a>
                        {/* Optional: Add deployed site link */}
                        {/* <a href="https://gathermason.app" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
