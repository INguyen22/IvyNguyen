import React from 'react'
import NavBar from '../NavBar/NavBar'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projectsPage'>
        <NavBar />
        <h1>Projects</h1>
        <h2>Welcome to my projects page! Feel free to click onto one of my projects to learn more about each one</h2>
        <ProjectLinks />
    </div>
  )
}

export default Projects