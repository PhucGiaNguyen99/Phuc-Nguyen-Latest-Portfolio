import React from "react";
import "./styles.css";

const Projects = () => {
    return (
        <section className="content-section" id="projects">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project">
                    <h3>Expense Tracker</h3>
                    <p>A full stack web app for tracking expenses. <a href="#">Github</a></p>
                </div>
                <div className="project">
                    <h3>QueueUp</h3>
                    <p>A collaborative music queue app. <a href="#">GitHub</a></p>
                </div>
            </div>
        </section>
    );
};

export default Projects;