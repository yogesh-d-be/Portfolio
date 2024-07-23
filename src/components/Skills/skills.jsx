import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./skills.css";

function Skills() {
  return (
    <div className="skills-section" id="skills">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="section-title"
      >
        My Skills
      </motion.h2>
      <div className="skills-grid">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-category glass"
        >
          <h3>Frontend</h3>
          <div className="skills-container">
            <div className="skill-card">
              <FaHtml5 className="skill-icon html" />
              <p className="skill-name">HTML5</p>
            </div>
            <div className="skill-card">
              <FaJsSquare className="skill-icon javascript" />
              <p className="skill-name">JavaScript</p>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon react" />
              <p className="skill-name">React.js</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-category glass"
        >
          <h3>Backend</h3>
          <div className="skills-container">
            <div className="skill-card">
              <FaNodeJs className="skill-icon nodejs" />
              <p className="skill-name">Node.js</p>
            </div>
            <div className="skill-card">
              <SiExpress className="skill-icon express" />
              <p className="skill-name">Express.js</p>
            </div>
            <div className="skill-card">
              <SiMongodb className="skill-icon mongodb" />
              <p className="skill-name">MongoDB</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-category glass"
        >
          <h3>Version Control</h3>
          <div className="skills-container">
            <div className="skill-card">
              <FaGit className="skill-icon git" />
              <p className="skill-name">Git</p>
            </div>
            <div className="skill-card">
              <FaGithub className="skill-icon github" />
              <p className="skill-name">GitHub</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-category glass"
        >
          <h3>Styling</h3>
          <div className="skills-container">
            <div className="skill-card">
              <FaCss3Alt className="skill-icon css" />
              <p className="skill-name">CSS3</p>
            </div>
            <div className="skill-card">
              <SiTailwindcss className="skill-icon tailwind" />
              <p className="skill-name">Tailwind CSS</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-category glass"
        >
          <h3>Tools</h3>
          <div className="skills-container">
            <div className="skill-card">
              <SiPostman className="skill-icon postman" />
              <p className="skill-name">Postman</p>
            </div>
            <div className="skill-card">
              <SiVisualstudiocode className="skill-icon vscode" />
              <p className="skill-name">VS Code</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
