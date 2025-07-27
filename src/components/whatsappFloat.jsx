import React from "react";
import "./whatsappFloat.css";

const WhatsAppFloat = () => {
  const phoneNumber = "6374694062"; // Your WhatsApp number
  const message = "Hi, I would like to know more about your work!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          src={require("./../assets/whatsapp.png")}
          alt="Chat on WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
