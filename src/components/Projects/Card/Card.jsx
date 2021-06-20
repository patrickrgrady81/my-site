import React from 'react'
import uuid from 'react-uuid';

import './Card.css';

const video = [null, null, null, null, "https://www.youtube.com/watch?v=bmmeJO4AaBg&t=3s", "https://www.youtube.com/watch?v=Ho-NgldkZ7Y&t=2s]", "https://www.youtube.com/watch?v=OLrSQ4sMKso&t=2s", null, "https://www.youtube.com/watch?v=vXUJWl9necw"]


const Card = (props) => {
  return (
    <div className="individual" id={props.info.name}>
      <div className="name-desc">
        <div className="name underline">{props.info.name}</div> 
        <div className="desc">{props.info.fullDescription}</div>
      </div>
      {(props.info.id !== 0 && props.info.id !== 1 && props.info.id !== 2 && props.info.id !== 3 && props.info.id !== 7) ?<a class="tooltips_cls" href={video[props.info.id]} target="_blank" rel="noopener noreferrer"><img className="project-page-image" src={props.image} alt="" /><span>Click for Video Demo</span></a> : <img className="project-page-image" src={props.image} alt="" />}
      {/* <a class="tooltips_cls" href="#"><span>Click for Brief Youtube Demo</span><img className="project-page-image" src={props.image} alt="" /></a>*/}
      <div className="languages">
        <div className="lang">Languages</div>
        <ul className="lang-list">
          {props.info.languages.map(lang => {
            return <li key={uuid()} className="li">{lang}</li>
          })}
        </ul>
      </div>
      <div className="demo-code">
      <div>Start Backend: <a href={props.info.demoBack} className="ilinks">{props.info.demoBack}</a></div>
      <div>Start Frontend: <a href={props.info.demoFront} className="ilinks">{props.info.demoFront}</a></div>
      <div>Backend code: <a href={props.info.back} className="ilinks">{props.info.back}</a></div>
      <div>Backend code: <a href={props.info.front} className="ilinks">{props.info.front}</a></div>
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