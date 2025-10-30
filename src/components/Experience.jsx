import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    date: "25/09/2024 - 30/06/2025",
    company: "DSAM Tech Hub Trading LLC, Dubai",
    title: "Web Developer",
    details: [
      "Build and maintain responsive websites and web applications.",
      "Write clean, maintainable code and conduct regular performance optimization.",
      "Diagnose and resolve issues related to website functionality and performance.",
      "Develop front-end website architecture.",
    ],
  },
  {
    date: "02/02/2024 - 15/09/2024",
    company: "Nexura IT Solutions LLC, Dubai",
    title: "Front End Developer",
    details: [
      "Implemented user registration and login functionality.",
      "Built and integrated RESTful APIs connecting front-end systems with back-end services.",
      "Maintained clear documentation for code and development processes.",
      "Used AWS Cloud Platform for hosting.",
      "Demonstrated expertise in GitHub and BitBucket for version control.",
    ],
  },
  {
    date: "01/01/2023 - 31/12/2023",
    company: "HashGate Technologies LLC, Dubai",
    title: "Front End Developer",
    details: [
      "Developed user-friendly web interfaces using React and modern CSS frameworks.",
      "Collaborated with backend teams to implement RESTful APIs.",
      "Optimized performance and ensured cross-browser compatibility.",
    ],
  },
  {
    date: "01/04/2019 - 31/03/2022",
    company: "Reach Technologies, India",
    title: "Full Stack Developer",
    details: [
      "Developed and tested new features and enhancements internally.",
      "Designed and deployed database technology for web platforms.",
      "Integrated front-end UI with APIs and backend logic.",
      "Performed code reviews to ensure clean, quality code delivery.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🌟 Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <motion.div
              className="timeline-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul>
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
