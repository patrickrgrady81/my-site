import React from 'react';
import uuid from 'react-uuid';

import './About.css'

const About = () => {

  const clicker = (e) => {
    e.preventDefault();
    console.log("clicked");
    // setName("Name");
    // window.location.href = "mailto:mail@example.org";
  }

  // const [name, setName] = useState("Name");

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
        <p className="boot">Education: Flatiron Bootcamp </p>
        <p className="dates">(11/2019 - 7/2021)</p>
       </div>
      <form key={uuid()} className="my-form">
        <p key={uuid()} className="more-info">Want to know leave a comment</p>
        <p key={uuid()} className="more-info">or know more about me?</p>
        <input key={uuid()} type="text" defaultValue="Name" placeholder="Name"/>
        <input key={uuid()} type="text" placeholder="Company"/>
        <input key={uuid()} type="text" placeholder="Email"/>
        <textarea key={uuid()} placeholder="Comment" cols="5" rows="10" />
        <button key={uuid()} onClick={clicker}>Send</button>
      </form>
      <div className="more more-container">
        Also a family man with a wife and twin boys.
        Hobbies besides programming include video games,
        roller blading, editing videos, reading and writing fiction.
      </div>
    </div>
  )
}

export default About
