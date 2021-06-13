import React from 'react'

import './Navbar.css'

const Navbar = () => {
  // eslint-disable-next-line
  const pageHeight = window.innerHeight;

  return (
    <nav className="nav">
      <div className="logo"> <a href="https://github.com/patrickrgrady81"> Patrick Grady </a></div>
      <div className="links"> 
        <a href="/#Home">Home</a> 
        <a href="/#Projects">Projects</a>
        <a href="/#About">About</a>
      </div>
    </nav>
  )
}

export default Navbar
