import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <section className="content-section" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">{status === "loading" ? "Sending..." : "Send Message"}</button>
        {status === "success" && <p className="success">Message sent!</p>}
        {status === "error" && <p className="error">Failed to send message.</p>}
      </form>
    </section>
  );
};

export default Contact;