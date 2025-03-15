import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Reset status when user starts typing
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-description">Have a question or want to collaborate? Send me a message!</p>

      <div className="contact-container">
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:phucgianguyen0199@gmail.com">phucgianguyen0199@gmail.com</a></p>
          <p><i className="fab fa-github"></i> GitHub: <a href="https://github.com/PhucGiaNguyen99" target="_blank" rel="noopener noreferrer">PhucGiaNguyen99</a></p>
          <p><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/phucgnguyen/" target="_blank" rel="noopener noreferrer">phucgnguyen</a></p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="contact-btn">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="success-message">Message sent successfully!</p>}
          {status === "error" && <p className="error-message">Failed to send message. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;