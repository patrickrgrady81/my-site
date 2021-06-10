import React, { useState } from 'react'
import uuid from 'react-uuid'

import data from '../../data'
import './Card.css'

const Card = () => {
  // eslint-disable-next-line
  let [current, setCurrent] = useState(1);
  
  switch (data[current].type){
    case "Home":
      return(
        <div className="outer">
          <div className="card-container">
            <div className="home-card">
              <h1 className=".underline">{data[current].info[0]}</h1>
              <h3>{data[current].info[1]}</h3>
            </div>
          </div>
        </div>
      )
    case "Languages":
      return (
        <div className="outer">
          <div className="card-container">
            <div className="home-card">
              <h1 className="underline">{data[current].area}</h1>
              <ul>
                {data[current].info.map( (i) => {
                  return <li key={uuid()} className="list"><h3>{i}</h3></li>
                })}
              </ul>
            </div>
          </div>
        </div>     
      )
    default: {
      throw new Error("Error: No Such Card");
    }
  }

}

export default Card;
