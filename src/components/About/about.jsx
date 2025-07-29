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
            Full Stack Developer • Backend Engineer
          </p>
          <p className="about-description">
            I'm a full stack developer focused on building performant web applications using the MERN stack. I enjoy designing scalable backend systems, integrating real-time functionality, and deploying reliable cloud-based solutions. With a strong foundation in backend logic and API architecture, I aim to deliver clean, maintainable code that solves real business problems.
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
                {inView && <CountUp start={0} end={5} duration={3} />}+
              </div>
              <div className="exp">Web Apps<br />Deployed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
