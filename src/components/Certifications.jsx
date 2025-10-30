import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">🎓 Trainings & Workshops</h2>

      <div className="certifications-content">
        <div className="certificate-item">
          <h3>MEARN Stack Web Development</h3>
          <p>
            Undergone six-month course in <strong>Luminar Technolab</strong>,
            Kochi, Kerala, India.
          </p>
        </div>

        <div className="certificate-item">
          <h3>
            Seminar on Distributed, Concurrent and Independent Access to
            Encrypted Cloud Databases
          </h3>
        </div>

        <div className="certificate-item">
          <h3>Industrial Training in Deline Technology</h3>
          <p>Kinfra, Calicut, Kerala, India.</p>
        </div>

        <div className="certificate-item">
          <h3>Participated in Ethical Hacking Workshop</h3>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
