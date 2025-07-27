import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import "./work.css";

const ProjectPage = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const roles = ["All", "Backend", "Full Stack"];
  const techStack = ["All", "Node.js", "React.js" ,"WebSocket", "Redis", "Express.js", "Hugging Face API", "Twilio", "Google Sheets API", "Cloudflare"];

  const projects = [
    {
      title: "Multi-Vendor Booking",
      role: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB", "WebSocket", "Razorpay"],
      image: require("../../assets/service_booking.jpg"),
      description: "A scalable service booking platform supporting real-time vendor-user interaction and secure payment.",
      details: [
        "Real-time updates with WebSocket-based live tracking",
        "Razorpay payment integration for bookings",
        "Modular vendor-service schema supporting multiple professions",
        "Admin panel for managing vendors, users, services, and payments",
        "Separate panels for user, vendor, and admin"
      ],
      links: {
        user: "https://servigozapi.99wincart.com",
        vendor: "https://servigozapivendor.99wincart.com",
        admin: "https://servigozapiadmin.99wincart.com"
      }
    },
{
  title: "Temple Donation System",
  role: "Full Stack",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Twilio"],
  image: require("../../assets/temple.jpg"),
  description: "A full-stack donation and temple management system enabling digital contributions, family lineage tracking, and admin-driven analytics.",
  details: [
    "Donation Management – Enables devotees to securely donate online and view transaction history with Razorpay or direct integration.",
    "Family Tree Representation – Visualizes devotees' lineage with structured family hierarchies for traditional ceremonies and record-keeping.",
    "WhatsApp Notifications – Sends automated confirmation and thank-you messages via Twilio's WhatsApp API for each donation or event registration.",
    "Admin Dashboard – Allows administrators to manage donations, view analytics, update temple events, and verify family records.",
    "Secure Record Handling – All donation and devotee data is stored securely in MongoDB with proper user roles and access control.",
    "Event & Ritual Coordination – Supports tracking of temple events, rituals, and volunteer tasks tied to individual or family contributions.",
    "Custom UI/UX – Built with React.js for a clean and intuitive interface tailored to devotees and administrators."
  ],
  links: {
    admin: "https://kathavanadarmagasabai.com"
  }
},
{
  title: "Real-Time Chat System",
  role: "Full Stack",
  tech: ["React.js", "Node.js", "Express.js", "WebSocket", "Redis", "Hugging Face API"],
  image: require("../../assets/chat.jpg"),
  description: "A high-performance, full-stack chat application built for instant communication, featuring a custom AI assistant and admin-user interaction.",
  details: [
    "One-to-One Real-Time Messaging – Implemented WebSocket (Socket.IO) for persistent and bi-directional communication between users and admins.",
    "AI Assistant Chatbot – Integrated Hugging Face-based large language model (LLM) to serve as a virtual assistant for the organization’s users.",
    "Admin Panel with Live Chat – Admins can monitor, message, and respond to users in dedicated single-room chats, enhancing support efficiency.",
    "Redis Caching for Performance – Configured Redis to handle user sessions, message queues, and caching, improving chat speed and reducing DB load.",
    "Institution-Specific Intelligence – AI is fine-tuned to answer organization-specific queries, making it an intelligent assistant for users.",
    "Scalability and Optimization – Backend optimized for concurrent users with lightweight session management and real-time message delivery."
  ],
  links: {
    user: "https://chatuser.whydev.in/",
    admin: "https://chat.whydev.in"
  }
},

{
  title: "Custom E-Commerce Themes",
  role: "Backend",
  tech: ["Node.js", "Express.js", "MongoDB", "Razorpay", "Stripe", "PayPal"],
  image: require("../../assets/ecommerce-themes.png"),
  description: "Backend for a customizable e-commerce platform enabling businesses to design unique storefronts with integrated payment options.",
  details: [
    "Dynamic Theme Management – Built backend architecture allowing clients to fully customize themes (layouts, banners, colors, fonts) through an intuitive admin panel.",
    "Live Storefront Preview – Integrated real-time syncing between admin panel and storefront for live preview of changes.",
    "Multi-Gateway Payment Integration – Added Razorpay, Stripe, and PayPal for secure and flexible checkout processes.",
    "Product & Inventory Management – Designed scalable product schema supporting variants, stock tracking, and dynamic filters.",
    "Admin Authentication & Roles – Implemented secure access for super admins and theme managers with JWT authentication.",
    "Plug-and-Play Architecture – Enables clients to launch fully branded stores without frontend code changes."
  ],
  links: {
    user: "https://ecommercethemes.whydev.co.in/",
    admin: "https://adminpanelecommerce.whydev.co.in/"
  }
}
,
{
  title: "Fancy Cracker Website",
  role: "Backend",
  tech: ["Node.js", "Express.js", "MongoDB", "Google Sheets API", "Cloudflare"],
  image: require("../../assets/fancycracker.png"),
  description: "A festive e-commerce platform enabling users to order crackers with invoice generation and backend automation, without traditional order DB.",
  details: [
    "User Authentication with MongoDB – Registered users' data is securely stored for login and personalized experiences.",
    "Add-to-Cart with Instant Checkout – Users can add crackers to their cart and download a PDF invoice for offline or cash payments.",
    "Google Sheets Integration – Each order auto-syncs to a client-maintained Google Sheet in real-time (no local DB used for orders).",
    "Cloudflare Image Hosting – High-resolution cracker images are delivered via Cloudflare CDN for fast performance during festival traffic.",
    "No Order DB Approach – Lightweight, scalable solution without traditional order database—ideal for seasonal use and direct follow-ups.",
    "Mobile-Responsive Design – Optimized for smooth mobile experience with fast image loads and smooth cart interaction."
  ],
  links: {
    user: "https://www.fancycracker.com/"
  }
},
{
  title: "KK InfoTech — Second-Hand Electronics E-Commerce",
  role: "Full Stack",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Sheets API", "Cloudflare"],
  image: require("../../assets/kkinfotech.png"),
  description: "Second-hand electronics store for computers, laptops, monitors, with admin-managed inventory and automated invoice sync.",
  details: [
    "User Authentication with MongoDB – Secure login and registration for users browsing second-hand tech inventory.",
    "Cart + PDF Invoice Download – Authenticated users can add items to cart and instantly download an invoice.",
    "Google Sheets Sync – Each invoice is automatically pushed to the client’s Google Sheet for centralized tracking (no order DB).",
    "Admin Dashboard – Allows category and product management, image uploads, and live listing control via secure panel.",
    "Cloudflare CDN for Images – Used for fast and scalable image delivery across product catalogues.",
    "Product Types Supported – Includes laptops, CPUs, monitors, accessories, and other refurb tech gear.",
    "Client Notification Workflow – Once invoice is generated, client follows up based on synced sheet data."
  ],
  links: {
    user: "https://kkinfotech.net/",
    admin: "https://kkitadmin.99wincart.com/"
  }
}



  ];

  const filteredProjects = projects.filter((project) => {
    const roleMatch = selectedRole === "All" || project.role === selectedRole;
    const techMatch = selectedTech === "All" || project.tech.includes(selectedTech);
    return roleMatch && techMatch;
  });

  return (
    <div className="project-page">
      <motion.h2
        className="project-title"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        💼 My Projects
      </motion.h2>

      {/* Filters */}
      <div className="filter-box">
        <div className="filter-group">
          {roles.map((role) => (
            <button
              key={role}
              className={`filter-btn ${selectedRole === role ? "active" : ""}`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="filter-group">
          {techStack.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${selectedTech === tech ? "active" : ""}`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {filteredProjects.map((project, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            variants={fadeIn("up", 0.2 + idx * 0.1)}
            initial="hidden"
            whileInView="show"
            onClick={() => setModalProject(project)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="card-overlay">
              <h3>{project.title}</h3>
              <p className="stack">{project.tech.join(", ")}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="modal-overlay" onClick={() => setModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalProject.title}</h2>
            <p className="describe">{modalProject.description}</p>
            <ul className="list">
              {modalProject.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {/* Live Panel Links */}
            {modalProject.links && (
              <div className="modal-links">
                {modalProject.links.user && (
                  <a
                    href={modalProject.links.user}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    🔗 User Panel
                  </a>
                )}
                {modalProject.links.vendor && (
                  <a
                    href={modalProject.links.vendor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    🔗 Vendor Panel
                  </a>
                )}
                {modalProject.links.admin && (
                  <a
                    href={modalProject.links.admin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    🔗 Admin Panel
                  </a>
                )}
              </div>
            )}

            <button className="modal-close-button" onClick={() => setModalProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
