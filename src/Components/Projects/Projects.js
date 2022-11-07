import React from 'react'
import NavBar from '../NavBar/NavBar'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import gif from "../Images/kirby.gif"
import HomeNav from '../HomeNav/HomeNav'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projectsPage'>
      <HomeNav />
      <NavBar />
      <h1>Projects</h1>
      <h2>Welcome to my projects page! Feel free to click onto one of my projects to learn more about each one</h2>
      <div className='projectsLinkBox'>
        <ProjectLinks />
      </div>
      <img className="kirbyGif" src={gif} alt="projects gif"/>
    </div>
  )
}

export default Projects