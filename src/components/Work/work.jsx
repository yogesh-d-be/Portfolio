import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./work.css";

const ProjectPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Multi-Vendor Service Booking Website",
      image: require("../../assets/service_booking.jpg"),
      tech: "Node.js, Express.js, MongoDB, WebSocket, AWS S3, Razorpay",
      description: "A dynamic multi-vendor service booking platform designed to streamline bookings, real-time tracking, and secure payments.",
      details: [
       "Seamless Vendor Management: Efficient handling of multiple service providers under one platform.",
      "Live Booking Updates: Integrated WebSocket for real-time booking status updates.",
      "Secure Transactions: Razorpay-powered payment system ensuring smooth and reliable payments."
      ],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      image: require("../../assets/ecoomerce.jpg"),
      tech: "Node.js, Express.js, MongoDB, Razorpay, AWS-S3",
      description: "A high-performance e-commerce platform supporting thousands of products, real-time order status update, and secure payment processing.",
      details: [
        "Optimized Backend: High-speed API response and efficient database management.",
      "Real-Time Order Tracking: Stay updated with live order statuses using WebSocket.",
      "Secure & Scalable Payments: Integrated Razorpay for hassle-free transactions."
      ],
      link: "#",
    },
    {
      title: "Temple Donation Management System",
      image: require("../../assets/temple.jpg"),
      tech: "Node.js, Express.js, MongoDB",
      description: "A smart donation management system designed to handle contributions, financial tracking, and automated receipts with ease.",
      details: [
       "Admin Control & User Management: Super Admin panel for managing admins, users, and donation records.",
      "Automated Reporting: Generates spending reports and real-time donation insights.",
      "Flexible Payment Options: One-time & recurring donations with Razorpay integration."
      ],
      link: "#",
    },
    {
      title: "Real-Time Chat System",
      image: require("../../assets/chat.jpg"),
      tech: "Node.js, WebSocket, MongoDB, Express.js, Redis",
      description: "An ultra-fast chat system built for real-time messaging, powered by WebSocket and Redis for optimal performance.",
      details: [
       "Instant Messaging: Lightning-fast communication with real-time updates.",
      "Scalable & Secure: Optimized with Redis for efficient message caching.",
      "User & Admin Interactions: Seamless user-to-user and admin chat functionality."
      ],
      link: "#",
    },
  ];

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <div className="project-page">
      <div className="project-container">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="project-title"
        >
          My Projects 🚀
        </motion.h1>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="projects"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="project-card"
              onClick={() => showModal(project)}
            >
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isModalVisible && selectedProject && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p className="describe">{selectedProject.description}</p>
              <ul className="list">
                {selectedProject.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              {/* {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  View More
                </a>
              )} */}
              <button onClick={handleClose} className="modal-close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
