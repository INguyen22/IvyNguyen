import React from 'react'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import NavBar from '../NavBar/NavBar'
import { SocialIcon } from 'react-social-icons';
import "./Project.css"

const Project = ({project}) => {
    const {title, githubLink, technologies, overview, wins, challenges, images } = project

    const info = (topic) => {
        const details = topic.map(detail => <p className="sectionInfo" key={detail}> * {detail}</p>)
        return details
    }
  return (
    <div className='projectPage'>
        <NavBar />
        <div className='projectContent'>
        <ProjectLinks />
        <div className='projectHeaderInfo'>
            <h1 className='projectTitle'>{title}</h1>
            <SocialIcon bgColor={"gold"} className="icons" url={githubLink} />
        </div>
        <img className="projectImage" src={images[0].link} alt={title}/>
        <h2 className='projectTech'>{technologies}</h2>
        <h3 className='sectionHeader'>Overview:</h3>
        <div className='infoContainer'>
            <p className="sectionInfo" >{overview}</p>
        </div>
        <h3 className='sectionHeader'>Wins:</h3>
        <div className='infoContainer'>
            {info(wins)}
        </div>
        <h3 className='sectionHeader'>Challenges:</h3>
        <div className='infoContainer'>
            {info(challenges)}
        </div>
        </div>
    </div>
  )
}

export default Project