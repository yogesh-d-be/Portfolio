import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./about.css";

function About() {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-container">
        {/* Image */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="about-img-box"
        >
          <img
            src={require("../../assets/yogeshd.png")}
            alt="Yogesh"
            className="about-img"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="about-content"
        >
          <h2 className="about-heading">About Me</h2>
          <p className="about-tagline">
            MERN Stack Developer • Technical Trainer • Backend Engineer
          </p>
          <p className="about-description">
            I'm a passionate full-stack web developer with hands-on experience building real-world applications using the MERN stack. I specialize in backend engineering, real-time integrations, and deployment, while also mentoring students and junior devs. I love turning complex problems into elegant, scalable solutions and thrive in collaborative environments.
          </p>

          {/* Stats */}
          <div className="count-box">
            <div>
              <div className="count">
                {inView && <CountUp start={0} end={1} duration={5} />}+
              </div>
              <div className="exp">Years<br />Experience</div>
            </div>
            <div>
              <div className="count">
                {inView && <CountUp start={0} end={6} duration={3} />}+
              </div>
              <div className="exp">Projects<br />Completed</div>
            </div>
            <div>
              <div className="count">
                {inView && <CountUp start={0} end={30} duration={3} />}+
              </div>
              <div className="exp">Students<br />Mentored</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
