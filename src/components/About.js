import React from "react";
import "./styles.css";

const About = () => {
    return ( 
        <section className="content-section" id="about">
            <img src="me_and_bellie.jpg" alt="Profile" className="profile-img" />
            <h2>About Me</h2>
            <p>I am a Computer Science graduate looking for a Software Engineering role.</p>
            <p>"Live as if you were to die tomorrow. Learn as if you were to live forever." - Mahatma Gandhi</p>
        </section>
    );
};

export default About;