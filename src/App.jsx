import React from 'react';
import './App.css';

import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Links from './components/Links/Links';


function App() {
  return (
  <div className="page">
    <Navbar />
    <Links />
    <a href="#Home" ><Carousel/></a>
    <a href="#Projects" ><Projects/></a>
    <a href="#About" ><About/></a>
  </div>
  )
}

export default App;