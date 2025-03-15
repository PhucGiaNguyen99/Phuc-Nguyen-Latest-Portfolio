import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">Hi Everyone! 😊👋</h2>

      <p className="intro-text">
        I’m a **Computer Science senior** at **George Mason University**, passionate about building **software solutions** that drive impact.  
        Currently seeking **entry-level opportunities** in **software development, mobile development, web development, or data analysis**.  
      </p>

      <p className="highlight-text">
        💻 **Specializing in:** Backend Development | API Design | Data Processing  
        🚀 **Core Focus:** Performance | Scalability | System Efficiency  
      </p>

      <p className="about-text">
        I thrive on **solving complex problems**, **optimizing workflows**, and **building robust web & mobile applications**.  
        Passionate about **clean code, scalable solutions, and data-driven development**, I’m always exploring **new technologies & best practices**  
        to **create high-impact software**. 👨‍💻  
      </p>

      <div className="fun-fact">
        <h3>🎲 Fun Fact About Me!</h3>
        <p>
          I’m a **big fan of board games** – whether it's **collecting birds in Wingspan**,  
          **gems in Splendor**, **building roads & cities in Carcassonne**, **expanding empires in Catan**,  
          or **strategizing in Go**, I’m always up for a game! **Challenge me anytime!** 😊😊  
        </p>
      </div>

      <div className="quote-section">
        <h3>✨ A Quote I Live By:</h3>
        <blockquote>
          "Live as if you were to die tomorrow. Learn as if you were to live forever."  
          <span>— Mahatma Gandhi</span>
        </blockquote>
        <p>
          There's something about this quote that just **resonates with me**.  
          I believe in **giving my best in everything I do** while **staying curious & learning along the way**.  
        </p>
      </div>

      <p className="connect-text">
        Let’s **connect, swap ideas, and create something awesome together!** 🚀🚀  
      </p>
    </section>
  );
};

export default About;
