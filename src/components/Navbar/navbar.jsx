import React, { useState } from "react";
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import './navbar.css'

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }



function Navbar(){
    
    const [activeSection, setActiveSection] = useState('');

    const handleClick = (id) => {
        scrollToSection(id);
        setActiveSection(id);
      };

    return(
        <>
        <nav className="navbar">
            <div className="container nav-div">
            <div className="icon-div">
            <div  className={`icon-container ${activeSection === 'home' ? 'active' : ''}`}  onClick={() => handleClick('home')}><BiHomeAlt className="icon" /></div>
            <div  className={`icon-container ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}><BiUser className="icon" /></div>
            <div  className={`icon-container ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleClick('skills')}><BsClipboardData className="icon" /></div>
            <div  className={`icon-container ${activeSection === 'work' ? 'active' : ''}`} onClick={() => handleClick('work')}><BsBriefcase className="icon" /></div>
            <div  className={`icon-container ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}><BsChatSquare className="icon" /></div>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;