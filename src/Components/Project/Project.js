import React from 'react'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import NavBar from '../NavBar/NavBar'
import { SocialIcon } from 'react-social-icons';
import "./Project.css"

const Project = ({project}) => {
    const {title, githubLink, technologies, overview, wins, challenges, images } = project

    const info = (topic) => {
        const details = topic.map(detail => <p key={detail}>{detail}</p>)
        return details
    }
  return (
    <div className='projectPage'>
        <NavBar />
        <ProjectLinks />
        <h1>{title}</h1>
        <SocialIcon className="icons" url={githubLink} />
        <img className="projectImage" src={images[0].link} alt={title}/>
        <h2>{technologies}</h2>
        <h3>Overview:</h3>
        <p>{overview}</p>
        <h3>Wins:</h3>
        <div className='infoContainer'>
            {info(wins)}
        </div>
        <h3>Challenges:</h3>
        <div className='infoContainer'>
            {info(challenges)}
        </div>
    </div>
  )
}

export default Project