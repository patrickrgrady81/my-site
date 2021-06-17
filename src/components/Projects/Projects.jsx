import React from 'react';
import uuid from 'react-uuid';
import './Projects.css';
import Card from './Card/Card';

import data from '../../data'

import MiniJs from '../Card/assets/MiniJs.png'
import RecipeRevamp from '../Card/assets/RecipeRevamp.png';
import NovelIdeas from '../Card/assets/NovelIdeas.png';
import PaddySnake from '../Card/assets/PaddySnake.png';
import Peeker from '../Card/assets/Peeker.png';
import CityInfo from '../Card/assets/CityInfo.png';


const Projects = () => {
  const image = [null, null, null, MiniJs, RecipeRevamp, NovelIdeas, PaddySnake, Peeker, CityInfo];
  return (
    <div className="projects-page" id="Projects">
      <div className="note">
        <div className="message">Note: All backends are hosted on Heroku. <br />Please give the backend up to 30 seconds to load. <br /> Thank you.</div>
      </div>
      <div className="project-list">
          { data.map(info => {
            if (info.id >2 ){
              return <Card key={uuid()} info={info} cls={`card${info.id}`} image={image[info.id]} />
            }
            return null;
        })}
      </div>
    </div>
  )
}

export default Projects;