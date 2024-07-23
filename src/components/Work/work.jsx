import React, { useState } from 'react';
import {motion} from 'framer-motion';
import fadeIn from '../variants'
import './work.css';

const ProjectPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Clone the Paytm UI',
      image: require('../../assets/payrupee.png'),
      tech: 'HTML, CSS',
      details: `
        From the beginning of full stack development, I am starting with developing the Paytm website (static website).
        The primary objective of this project is to gain hands-on experience in HTML and CSS.
      `,
      link: 'https://upi-payrupee-46c27b.netlify.app'  
    },
    {
      title: 'Tuneguru website',
      image: require('../../assets/tuneguru.png'), 
      tech: 'React, Node.js, Express.js, MongoDB',
      details: `
        Currently, I am working on this project to develop my skills and enhance my knowledge.
        
        Implemented an intuitive admin panel to manage customer bookings effectively.
        
        Integrated Stripe payment gateway for seamless online transactions.
        
        Designed a responsive UI focusing on usability and accessibility.
       
      `,
      link: 'https://tuneguru.netlify.app/' 
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
      <div className='project-container'>
        <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.3}}>Projects</motion.h1>
      <motion.div variants={fadeIn('left',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.3}} className="projects">
        {projects.map((project, index) => (
          <motion.div variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.3}}
            key={index}
            className="flip-card"
            onClick={() => showModal(project)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="flip-card-back">
                <p>Tech I used: {project.tech}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isModalVisible && selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                View More
              </a>
            )}
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
