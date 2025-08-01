import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Contact from "./components/Contact/contact";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import ProjectPage from "./components/Work/work";
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="section"><Header/></div>
      <div id="home" className="section"><Banner/></div>
      <div id="about" className="section"><About /></div>
      <div id="skills" className="section"><Skills/></div>
      <div id="work" className="section project-container"><ProjectPage/></div>
      <div id="contact" className="section"><Contact/></div>
      
      <Navbar/>
      
    </div>
  );
}

export default App;
