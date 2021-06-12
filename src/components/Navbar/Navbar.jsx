import React from 'react'

import './Navbar.css'

const Navbar = () => {
  // eslint-disable-next-line
  const pageHeight = window.innerHeight;

  return (
    <div className="nav">
      <div className="logo"> Patrick Grady </div>
      <div className="links"> 
        <a href="#Home">Home</a> 
        <a href="#Projects">Projects</a> 
        <a href="#About">About</a> 
      </div>
    </div>
  )
}

export default Navbar
