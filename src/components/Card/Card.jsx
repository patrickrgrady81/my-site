import React, { useState } from 'react'
import uuid from 'react-uuid'

import data from '../../data'
import './Card.css'

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
    default: {
      throw new Error("Error: No Such Card");
    }
  }

}

export default Card;
