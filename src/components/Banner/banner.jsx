import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./banner.css";
import fadeIn from "../variants";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function Banner() {
  return (
    <>
      <div className="">
        <div className="banner-container">
          <div>
            <div>
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="role-name"
              >
                YOGESH
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="role-box"
              >
                <span className="role-txt">I am a </span>
                <span className="role">
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Mern Stack Developer",
                      2000,
                    ]}
                    speed={50}
                    className="animated-text"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </span>
              </motion.div>
            </div>
            <div className="role-explain">
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Passionate about creating seamless user experiences and robust
                back-end solutions with MERN Stack.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn"
            >
              <button
                className="button-st"
                onClick={() => scrollToSection("contact")}
              >
                <span>Contact me</span>
              </button>

              {/* https://drive.google.com/file/d/1p5CDAArN87fbvVM0vOHaKwPERnbV97dg/view?usp=sharing */}
             <a
  href="https://drive.google.com/uc?export=download&id=1p5CDAArN87fbvVM0vOHaKwPERnbV97dg"
  download="My_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume"
>


                <button className="button-sty">
                  <img
                    src={require("../../assets/downloads.png")}
                    alt="download"
                    className="download"
                  />
                  <span>My resume</span>
                </button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a
                href="https://github.com/yogesh-d-be"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-d-69b6691ab"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="image"
          >
            <img
              src={require("../../assets/yogesh.png")}
              alt="yogesh"
              className="profile"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Banner;
