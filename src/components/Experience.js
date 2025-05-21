import React from "react";
import "./styles.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>

      {/* 🔹 Quokka.io Internship */}
      <div className="experience-card fade-in">
        <div className="experience-header">
          <h3>Software Engineering R&D Intern</h3>
          <p className="company">Quokka.io · Arlington, VA · Jun 2024 – Sep 2024</p>
        </div>
        <ul className="experience-list">
          <li>Built and optimized backend APIs using <strong>NestJS</strong> and <strong>Koa</strong>, improving customer satisfaction by <strong>20%</strong>.</li>
          <li>Designed and executed <strong>unit & E2E tests</strong> with <strong>Jest</strong> and <strong>Supertest</strong>, achieving <strong>80% validation accuracy</strong>.</li>
          <li>Designed and integrated <strong>JSON schema validation</strong> with <strong>class-validator</strong> across multiple endpoints.</li>
          <li>Identified API inefficiencies and improved system performance through code refactoring.</li>
          <li>Containerized dev and test environments using <strong>Docker</strong> for streamlined deployment.</li>
        </ul>
      </div>

      {/* 🔹 Teaching Assistant */}
      <div className="experience-card fade-in">
        <div className="experience-header">
          <h3>Teaching Assistant – Object-Oriented Programming</h3>
          <p className="company">George Mason University · Fairfax, VA · Aug 2023 – Dec 2023</p>
        </div>
        <ul className="experience-list">
          <li>Mentored <strong>50+ students</strong> in Java, OOP, data structures, and debugging best practices.</li>
          <li>Guided students through assignments and project implementation with hands-on support.</li>
          <li>Helped students master IDEs like <strong>IntelliJ</strong>, <strong>Eclipse</strong>, and <strong>NetBeans</strong> to write maintainable code.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
