import React from 'react';
import './App.css';

import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
  <div className="page">
    <Navbar />
    <a href="#Home"><Carousel id="Home"/></a>
    <a href="#Projects"><Projects id="Projects"/></a>
    <a href="#About"><About id="#About"/></a>
  </div>
  )
}

export default App;