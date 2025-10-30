import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        className="home-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="home-text">
          <h1>
            Hello, I'm <span className="highlight">Neethu Rajeev</span> 👋
          </h1>
          <h2>Frontend Developer & React Enthusiast</h2>
          <p>
            I love crafting user-friendly, responsive, and visually engaging web
            experiences. My goal is to combine clean code with creative design
            to build impactful digital products.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <motion.div
          className="home-photo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="photo-border">
            <img src={profile} alt="Neethu Rajeev" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
