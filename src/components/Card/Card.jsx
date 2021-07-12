import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useInterval } from '../useInterval';

import data from '../../data';
import './Card.css';

import Clock from './assets/Clock.png'
import Fresco from './assets/Fresco.png'
import NovelIdeas from './assets/NovelIdeas.png';
import Breakout from './assets/Breakout.png';
import PaddySnake from './assets/PaddySnake.png';
import CityInfo from './assets/CityInfo.png';

const Card = () => {
  const len = data.length - 1;

  let [current, setCurrent] = useState(0);

  const handlePrevious  = (current) => {
    if (current === 0){
      setCurrent(len);
      return;
    }
    setCurrent(current - 1);
  }

    const handleNext  = (current) => {
    if (current === len){
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  }

  useInterval(() => {
    handleNext(current);
  }, 1500);

  switch (data[current].type){
    case "Home":
      return(
        <div className="outer">
        <div className="card-container">
          <div className="previous" onClick={() => handlePrevious(current)}>&#60;</div>
            <div className="home-card">
              <h1 className=".underline">{data[current].info[0]}</h1>
              <h3>{data[current].info[1]}</h3>
            </div>
            <div className="next" onClick={() => handleNext(current)}>&#62;</div>
          </div>
        </div>
      )
    case "Languages":
      return (
        <div className="outer">
          <div className="card-container">
            <div className="previous" onClick={() => handlePrevious(current)}>&#60;</div>
            <div className="home-card">
              <h1 className="underline">{data[current].area}</h1>
              <ul>
                {data[current].info.map( (i) => {
                  return <li key={uuid()} className="list"><h3>{i}</h3></li>
                })}
              </ul>
            </div>
            <div className="next" onClick={() => handleNext(current)}>&#62;</div>
          </div>
        </div>     
      )
    case "Project": {
      let image;
      switch (data[current].id) {
        case 3:
          image = Clock;
          break;
        case 4:
          image = Fresco;
          break;
        case 5:
          image = Breakout;
          break; 
        case 6:
          image = NovelIdeas;
          break; 
        case 7:
          image = PaddySnake;
          break; 
        case 8:
          image = CityInfo;
          break; 
        default:
          throw new Error("No such image");
      }
      return (
        <div className="outer">
          <div className="card-container">
            <div className="previous" onClick={() => handlePrevious(current)}>&#60;</div>
            <div className="home-card project-card">
              <div className="project-image">
                <div>
                  <h1 className="p1 item underline">Projects</h1>
                  <h2 className="title">{data[current].name}</h2>
                </div>
                <img className="item project-pic" src={image} alt="MiniJs" />
              </div>
              <div className="item bottom">{data[current].briefDesc}</div>
              <a className="item bottom pad" href={`/#${data[current].idName}`}>(Click Here For More Information)</a>
            </div>
            <div className="next" onClick={() => handleNext(current)}>&#62;</div>
          </div>
        </div>    
      )
    }
    default: {
      throw new Error("Error: No Such Card");
    }
  }

}

export default Card;