import React from "react";
import "./styles.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">💼 Experience</h2>

      {/* Quokka.io Internship */}
      <div className="experience-card">
        <h3>Software Engineering R&D Intern</h3>
        <p className="company">Quokka.io | Jun 2024 - Sep 2024 | Arlington, VA</p>
        <ul>
          <li>🚀 Developed and optimized back-end API services using **NestJS** and **Koa**, increasing customer satisfaction rates by **20%**.</li>
          <li>✅ Conducted **unit and end-to-end testing** using **Jest** and **Supertest**, achieving **80% validation service accuracy**.</li>
          <li>📌 Designed and implemented **JSON schema validation** using **class-validator**, expanding coverage by **50%**.</li>
          <li>🐳 Utilized **Docker** for containerization across development, testing, and production environments.</li>
          <li>⚡ Identified and resolved inefficiencies in **API functionality**, optimizing request handling for improved **system performance**.</li>
        </ul>
      </div>

      {/* Teaching Assistant Experience */}
      <div className="experience-card">
        <h3>Teaching Assistant – Object-Oriented Programming</h3>
        <p className="company">George Mason University | Aug 2023 - Dec 2023 | Fairfax, VA</p>
        <ul>
          <li>👨‍🏫 Supported **50+ students** in **Object-Oriented Programming, Data Structures, Debugging, and Testing**.</li>
          <li>💡 Provided **targeted guidance** to help students understand and implement **assignments and projects**.</li>
          <li>🔧 Assisted students in using **Java IDEs** such as **IntelliJ IDEA, Eclipse, and NetBeans** to write **organized, maintainable code**.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
