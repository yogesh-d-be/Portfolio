import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./about.css";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="box" id="about" ref={ref}>
      <div className="container">
        <div className="about-container">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about-img-box"
          >
            <img
              src={require("../../assets/yogeshd.png")}
              alt="yogesh"
              className="about-img"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about-content"
          >
            <h2>About Me.</h2>
            <h3>
              Aspiring MERN Stack Developer with 6 months hands-on internship
              experience in building scalable applications.
            </h3>
            <p>
              Proficient in React.js and Node.js, eager to leverage my skills in
              a dynamic team environment. Committed to continuous learning and
              adaptability to industry advancements. Ready to contribute
              innovative solutions and drive team success as a dedicated and
              dependable team player.
            </p>
            <div className="count-box">
              <div>
                <div className="count">
                  {inView ? <CountUp start={0} end={6} duration={5} /> : null}
                </div>
                <div className="exp">
                  Months of
                  <br /> Experience
                </div>
              </div>
              <div>
                <div className="count">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="exp">
                  Projects
                  <br /> completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
