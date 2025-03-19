import React from "react";
import { motion } from "framer-motion";
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
  SiAwsamplify,
  SiSupabase,
  SiRedux,
  SiStripe,
  SiRazorpay,
} from "react-icons/si";
import fadeIn from "../variants";
import "./skills.css";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
        { name: "JavaScript", icon: <FaJsSquare className="skill-icon javascript" /> },
        { name: "React.js", icon: <FaReact className="skill-icon react" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" /> },
        { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
        { name: "WebSocket", icon: <SiExpress className="skill-icon express" /> },
      ],
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" /> },
        { name: "AWS S3", icon: <SiAwsamplify className="skill-icon aws" /> },
        { name: "Supabase", icon: <SiSupabase className="skill-icon supabase" /> },
      ],
    },
    {
      category: "Payments & State Management",
      skills: [
        { name: "Stripe", icon: <SiStripe className="skill-icon stripe" /> },
        { name: "Razorpay", icon: <SiRazorpay className="skill-icon razorpay" /> },
        { name: "Redux", icon: <SiRedux className="skill-icon redux" /> },
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", icon: <FaGit className="skill-icon git" /> },
        { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Postman", icon: <SiPostman className="skill-icon postman" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="skill-icon vscode" /> },
      ],
    },
  ];

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
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3 + index * 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="skills-category glass"
          >
            <h3>{category.category}</h3>
            <div className="skills-container">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  {skill.icon}
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
