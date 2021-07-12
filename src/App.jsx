import React from 'react';
import './App.css';

import BackgroundImage from './assets/bg1.jpg';

import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
// import About from './components/About/About';
import Links from './components/Links/Links';


function App() {

  console.log(BackgroundImage);
  return (
  <div className="page" style={{backgroundImage: `url(${BackgroundImage})`}}>
    <Navbar />
    <Links />
    <Carousel />
    <Projects/>
  </div>
  )
}

export default App;