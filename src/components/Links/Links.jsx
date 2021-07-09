import React from 'react'

import './Links.css'
import github from './assets/gitthub.png'
import linkedin from './assets/linkedin.png'
import resume from './assets/Patrick.Grady.013.pdf'

const Links = () => {

  const handleClick = () => {
    window.open(resume)
  }

  return (
    <div className="myLinks">
      <a href="https://github.com/patrickrgrady81" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="github" /></a>
      <a href="https://www.linkedin.com/in/patgrady64/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="linkedin" /></a>
      <span onClick={handleClick} target="_blank"><div className="resume" rel="noopener noreferrer">Resume</div></span>
    </div>
  )
}

export default Links
