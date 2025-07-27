import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGit,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiFigma, SiRedux, SiDocker, SiRazorpay, SiStripe, SiSupabase, SiVisualstudiocode, SiClickup, SiNextdotjs, SiRedis
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import fadeIn from "../variants";
import "./skills.css";

function Skills() {
  const skillsData = [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
        { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
        { name: "React.js", icon: <FaReact className="skill-icon react" /> },
        { name: "Next.js", icon: <SiNextdotjs className="skill-icon next" /> },
      ],
    },
    {
      category: "Database & Caching",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" /> },
        { name: "Redis", icon: <SiRedis className="skill-icon redis" /> },
      ],
    },
    {
      category: "Real-Time & State",
      skills: [
        { name: "WebSocket", icon: <SiExpress className="skill-icon express" /> },
        { name: "Redux", icon: <SiRedux className="skill-icon redux" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "DigitalOcean", icon: <TbBrandVercel className="skill-icon digitalocean" /> },
        { name: "Supabase", icon: <SiSupabase className="skill-icon supabase" /> },
        { name: "Hostinger", icon: <SiDocker className="skill-icon docker" /> },
        { name: "Cloudflare", icon: <SiDocker className="skill-icon docker" /> },
        { name: "Docker (Basic)", icon: <SiDocker className="skill-icon docker" /> },
        { name: "CI/CD (GitHub Actions)", icon: <FaGithub className="skill-icon github" /> },
      ],
    },
    {
      category: "Styling & UI",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGit className="skill-icon git" /> },
        { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
        { name: "Postman", icon: <SiPostman className="skill-icon postman" /> },
        { name: "Figma", icon: <SiFigma className="skill-icon figma" /> },
        { name: "ClickUp", icon: <SiClickup className="skill-icon clickup" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="skill-icon vscode" /> },
      ],
    },
    {
      category: "Payments & Registry",
      skills: [
        { name: "Razorpay", icon: <SiRazorpay className="skill-icon razorpay" /> },
        { name: "Stripe", icon: <SiStripe className="skill-icon stripe" /> },
        { name: "Verdaccio (NPM Registry)", icon: <FaGithub className="skill-icon github" /> },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="section-title"
      >
        Tech Stack & Tools
      </motion.h2>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            className="skills-category glass"
          >
            <h3 className="skills-heading">{category.category}</h3>
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
    </section>
  );
}

export default Skills;
