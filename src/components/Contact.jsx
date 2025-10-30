import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">📬 Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h3>Email Me</h3>
            <p><a href="mailto:neethurajeev3@gmail.com">neethurajeev3@gmail.com</a></p>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <h3>Call Me</h3>
            <p><a href="tel:+971505064791">+971 50 50 64 791</a></p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>My Address</h3>
            <p>Sharjah Al-Nada, Dubai</p>
          </div>
        </div>

        <div className="social-section">
          <h3>Social Profiles</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/neethurajeev" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className="contact-footer">
          <p>Thank you for taking the time to visit my portfolio.</p>
          <p>I look forward to hearing from you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
