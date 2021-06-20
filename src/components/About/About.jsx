import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className="about about-container" id="About">
      <div className="me me-container">
        <div className="me-item">
          <p>I am Patrick Grady</p>
          <p>I do Full Stack Web Design</p>
          <p>I’m from Pottstown, PA</p>
          <p>Active for 3 years</p>
          <p>Learning for 20+ years</p>
        </div>
      </div>
       <div className="ed">
        <p>Education: Flatiron Bootcamp </p>
        <p className="dates">(11/2019 - 7/2021)</p>
       </div>
      <div className="my-form">
        <p className="more-info">Want to know leave a comment</p>
        <p className="more-info">or know more about me?</p>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Company"/>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Comment" cols="5" rows="10" />
        <p className="construction">(Under Construction)</p>
        </div>
      <div className="more more-container">
        <p>Also a family man with a wife and twin boys. Hobbies besides programming include video game, roller blading, editing videos, reading and writing fiction.</p>
      </div>
    </div>
  )
}

export default About
