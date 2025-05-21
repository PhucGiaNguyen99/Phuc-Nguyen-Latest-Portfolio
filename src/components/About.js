import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section className="card about-intro fade-in">
      <h2 className="section-title">About Me</h2>
      <p>
        <strong>Welcome to my page!</strong> I’m Phuc Nguyen, a senior studying Computer Science at <strong>George Mason University</strong>, graduating in May 2025. I’m actively seeking entry-level roles in <span className="highlight">software engineering, mobile development, or full-stack development</span> where I can contribute and grow.
      </p>

      <p>I’m passionate about building real projects that matter. Here are a few that I’m proud of:</p>
      <div className="react-showcase">
        <div className="mini-card">
          📷 <strong>BiteWise</strong>
          <p>An Android barcode-scanning app using ML Kit OCR to help users track food ingredients and calorie intake.</p>
        </div>
        <div className="mini-card">
          🗓 <strong>Gather Mason</strong>
          <p>A full-stack student event platform with a React UI, MongoDB backend, and AWS Lambda-powered email reminders.</p>
        </div>
        <div className="mini-card">
          💪 <strong>TrackMyReps</strong>
          <p>A fitness tracking app built with SQLite and modern Android UI to help users log and review their workouts.</p>
        </div>
      </div>

      <p>
        During my internship at <strong>Quokka.io</strong>, I improved backend API performance using NestJS and Koa, introduced strong validation with <code>class-validator</code>, and helped boost test coverage to 80%.
      </p>

      <p>
        I love writing maintainable, readable code — and learning by iterating, experimenting, and improving my work bit by bit. Outside of tech, I unwind with board games like Wingspan, Splendor, Carcassonne, and Go.
      </p>

      <blockquote className="bible-verse">
        “And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart.” — Galatians 6:9
      </blockquote>

      <p className="connect-text">
        Let’s connect — I’d love to share ideas, hear your story, and build something meaningful together!
      </p>
    </section>

  );
};

export default About;
