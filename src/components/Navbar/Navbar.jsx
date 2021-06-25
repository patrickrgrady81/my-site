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

  return (
    <nav className="nav">
      <div className="logo"> <a href="https://github.com/patrickrgrady81"> Patrick Grady </a></div>
      <div className="links"> 
        <a href="/#Home">Home</a> 
        <a href="/#Projects">Projects</a>
        <a href="/#About">About</a>
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
