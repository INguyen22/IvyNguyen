import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectLinks.css"

const ProjectLinks = () => {
  return (
    <div className='projectLinksContainer'>
        <Link className="projectLink"
          activestyle={{
          color: "#fff",
          paddingBottom: '10px',
          borderBottom: '1px solid white'
        }} 
        to={`/OneHitWonders/One-Hit-Wonders`} >One Hit Wonders
        </Link>
        <Link className="projectLink"         
          activestyle={{
          color: "#fff",
          paddingBottom: '10px',
          borderBottom: '1px solid white'
        }} 
        to={`/heatCheck/Heat-Check`} >Heat check
        </Link>
        <Link className="projectLink"         
          activestyle={{
          color: "#fff",
          paddingBottom: '10px',
          borderBottom: '1px solid white'
        }}
        to={`/amiiwho/AmiiWho`} >AmiiWho
        </Link>
    </div>
  )
}

export default ProjectLinks