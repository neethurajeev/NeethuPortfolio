import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  { name: "Bull & Bearz", link: "https://www.bullandbearz.com" },
  { name: "Ibiye", link: "https://ibiye.com/" },
  { name: "Dahab Select", link: "https://dahabselect.com/" },
  { name: "WP Moda", link: "https://www.wpmoda.com/" },
  { name: "Caveout", link: "https://www.caveout.ae" },
  { name: "Caveout Dashboard", link: "https://caveout-dash-board.vercel.app/" },
  { name: "Yedhugopan", link: "https://www.yedhugopan.com" },
  { name: "Yedhugopan Admin", link: "https://admin.yedhugopan.com/" },
  { name: "GSR Divine", link: "https://www.gsrdivine.com/" },
  { name: "TS Perfumes", link: "https://tsperfumes.com" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-bg"></div>
            <div className="project-overlay"></div>
            <h3>{project.name}</h3>
            <p>Explore →</p>
          </motion.a>
        ))}
      </div>

      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
};

export default Projects;
