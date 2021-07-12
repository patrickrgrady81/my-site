import React from 'react'

import './Navbar.css'

const Navbar = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  const handleClick = () => {
    console.log("clicked");
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  }

  const goHome = (e) => {
    console.log(e);
    window.location = "http://localhost:3000/#Home";
  }

  const goToProjects = (e) => {
    console.log(e);
    window.location = "http://localhost:3000/#Projects";
  }

  const goToAbout = (e) => {
    console.log(e);
    window.location = "http://localhost:3000/#About";
  }

  return (
    <nav className="nav">
      <div className="logo"> <a href="https://github.com/patrickrgrady81"> Patrick Grady </a></div>
      <div className="links"> 
        <div className="navLink"onClick={goHome}>Home</div> 
        <div className="navLink"onClick={goToProjects}>Projects</div>
        {/* <div className="navLink"onClick={goToAbout}>About</div> */}
      </div>
        <div className="hamburger" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}

export default Navbar
