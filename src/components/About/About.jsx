import React from 'react';
// import uuid from 'react-uuid';

import MyForm from './Form/Form';
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
          <p>Learning for much more</p>
        </div>
      </div>
       <div className="ed">
        <p className="boot">Education: Flatiron Bootcamp </p>
        <p className="dates">(11/2019 - 7/2021)</p>
       </div>
      <MyForm />
      <div className="more more-container">
        Also a family man with a wife and twin boys.
        Hobbies besides programming include video games,
        roller blading, editing videos, reading and writing fiction.
      </div>
    </div>
  )
}

export default About
