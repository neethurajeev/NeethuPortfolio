import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">💡 Skills</h2>

      <div className="skills-bubbles">
        <div className="bubble-group">
          <h3 className="bubble-title">Languages</h3>
          <div className="bubble-container">
            <span className="bubble">JavaScript</span>
            <span className="bubble">Node.js</span>
            <span className="bubble">HTML</span>
            <span className="bubble">CSS</span>
            <span className="bubble">PHP</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Frameworks</h3>
          <div className="bubble-container">
            <span className="bubble">Next.js</span>
            <span className="bubble">Express</span>
            <span className="bubble">Bootstrap</span>
            <span className="bubble">MUI</span>
            <span className="bubble">WordPress</span>
            <span className="bubble">Tailwind CSS</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Libraries</h3>
          <div className="bubble-container">
            <span className="bubble">React.js</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Database</h3>
          <div className="bubble-container">
            <span className="bubble">MongoDB</span>
            <span className="bubble">MySQL</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Prototype Tools</h3>
          <div className="bubble-container">
            <span className="bubble">Figma</span>
            <span className="bubble">Zeplin</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Familiar With</h3>
          <div className="bubble-container">
            <span className="bubble">TypeScript</span>
            <span className="bubble">AWS</span>
            <span className="bubble">WordPress</span>
            <span className="bubble">MongoDB Atlas</span>
          </div>
        </div>

        <div className="bubble-group">
          <h3 className="bubble-title">Dev Tools</h3>
          <div className="bubble-container">
            <span className="bubble">Visual Studio</span>
            <span className="bubble">Git</span>
            <span className="bubble">Bitbucket</span>
            <span className="bubble">GitHub</span>
            <span className="bubble">Postman</span>
            <span className="bubble">WordPress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
