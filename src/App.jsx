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
    <Carousel />
    <Projects/>
  </div>
  )
}

export default App;