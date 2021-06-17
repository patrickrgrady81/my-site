import React from 'react'
import uuid from 'react-uuid';

import './Card.css';


const Card = (props) => {
  return (
    <div className="individual">
      <div className="name-dec">
        <div className="name underline">{props.info.name}</div> 
        <div className="desc">{props.info.fullDescription}</div>
      </div>
      <img className="project-page-image" src={props.image} alt="" />
      <div className="languages">
        <div className="lang">Languages</div>
        <ul className="lang-list">
          {props.info.languages.map(lang => {
            return <li className="lang-item" key={uuid()}>{lang}</li>
          })}
        </ul>
      </div>
      <div className="demo-code">
      <div className="links">Start Backend: {props.info.demoBack}</div>
      <div className="links">Start Frontend: {props.info.demoFront}</div>
      <div className="links">Backend Code: {props.info.back}</div>
      <div className="links">Frontend Code: {props.info.front}</div>
      </div>
    </div>
  )




  // return (
  //   <div className={`${props.cls} project-page-grid`}>   
  //     <div className="flex1 span-row-3">
  //       <div className="name">{props.info.name}</div>
  //       <div className="desc">{props.info.fullDescription}</div>
  //     </div>
  //     <img className="projects-page-img span-row-3" src={props.image} alt={`${props.name}`} />

  //       <div className="languages span-row-4">
  //         <h2 className="underline">Languages</h2>
  //         <ul>
  //           {props.info.languages.map(lang => {
  //             return <li key={uuid()}>{lang}</li>
  //           })}
  //         </ul>
  //       </div>
  //       <div className="code span-row-4">
  //         <div className="demoBack">Start Backend: {props.info.demoBack ? props.info.demoBack : "<no backend>"}</div>
  //         <div className="demoFront">Start Frontend: {props.info.demoFront ? props.info.demoFront : "<no frontend>"}</div>
  //         <div className="demoBack">Backend Code: {props.info.back ? props.info.back : "<no backend>"}</div>
  //         <div className="demoBack">FrontEnd Code: {props.info.front ? props.info.front : "<no frontend>"}</div>
  //       </div>

  //   </div>
  // )
}

export default Card