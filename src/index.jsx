import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";

import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

import './index.css';
import App from './App';

<Router>
  <Switch>
    <Route path="/about">
      <About />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route path="/">
      <Carousel />
    </Route>

  </Switch>
</Router>

ReactDOM.render(<App />, document.getElementById('root'));
