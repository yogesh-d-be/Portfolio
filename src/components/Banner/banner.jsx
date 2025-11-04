import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./banner.css";
import fadeIn from "../variants";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

function Banner() {
  return (
    <section className="banner-container">
      <div className="text-content">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="role-name"
        >
          Hi, I'm <span className="highlight">Yogesh</span>
        </motion.h1>

        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="sub-heading"
        >
          <TypeAnimation
            sequence={["Full Stack Developer", 2000, "MERN Stack Developer", 2000]}
            wrapper="span"
            speed={50}
            className="animated-text"
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="role-explain"
        >
          I build robust and scalable full-stack web applications using modern technologies. Passionate about solving real-world problems with clean architecture, secure APIs, and optimized backend systems.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="cta-buttons"
        >
          <button onClick={() => scrollToSection("contact")} className="button-sty">
            Contact Me
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1m-8r_s7e7KKDrUJ3nqv2hKClq5hIhr53"
            download="Yogesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-sty"
          >
            <img src={require("../../assets/downloads.png")} alt="resume" className="download" />
            My Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          className="social-links"
        >
          <a href="https://github.com/yogesh-d-be" target="_blank" rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-d-69b6691ab" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        className="image-container"
      >
        <img src={require("../../assets/yogesh.png")} alt="Yogesh D" className="profile" />
      </motion.div>
    </section>
  );
}

export default Banner;
