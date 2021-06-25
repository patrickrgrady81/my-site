import React from 'react'
import uuid from 'react-uuid';

import './Card.css';

const video = [null, null, null, null, "https://www.youtube.com/watch?v=bmmeJO4AaBg&t=3s", "https://www.youtube.com/watch?v=Ho-NgldkZ7Y&t=2s]", "https://www.youtube.com/watch?v=OLrSQ4sMKso&t=2s", null, "https://www.youtube.com/watch?v=vXUJWl9necw"]


const Card = (props) => {
  return (
    <div className="individual" id={props.info.idName}>
      <div className="name-desc">
        <div className="name underline">{props.info.name}</div> 
        <div className="desc">{props.info.fullDescription}</div>
      </div>
      {(props.info.id !== 0 && props.info.id !== 1 && props.info.id !== 2 && props.info.id !== 3 && props.info.id !== 7) ?<a className="tooltips_cls" href={video[props.info.id]} target="_blank" rel="noopener noreferrer"><img className="project-page-image" src={props.image} alt="" /><span>Click for Video Demo</span></a> : <img className="project-page-image" src={props.image} alt="" />}
      <div className="languages">
        <div className="lang">Languages</div>
        <ul className="lang-list">
          {props.info.languages.map(lang => {
            return <li key={uuid()} className="li">{lang}</li>
          })}
        </ul>
      </div>
      <div className="demo-code">
      <div>{props.info.demoFront ? 
        <a href={props.info.demoFront} className="ilinks">Start Frontend</a>:
        <p>No Frontend</p>
      }</div>
      <div>{props.info.demoBack ? 
        <a href={props.info.demoBack} className="ilinks">Start Backend</a>:
        <p>No Backend</p>
      }</div>
      <div>{props.info.front ? 
        <a href={props.info.front} className="ilinks">Frontend Code</a>:
        <p>No Frontend Code</p>
      }</div>
      <div>{props.info.back ? 
        <a href={props.info.back} className="ilinks">Backend Code</a>:
        <p>No Backend Code</p>
      }</div>
      </div>
    </div>
  )
}
export default Card