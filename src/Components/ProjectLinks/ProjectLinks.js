import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectLinks.css"

const ProjectLinks = () => {
  return (
    <div className='projectLinksContainer'>
        <Link className="projectLink" to={`/OneHitWonders/One-Hit-Wonders`} >One Hit Wonders</Link>
        <Link className="projectLink" to={`/heatCheck/Heat-Check`} >Heat check</Link>
        <Link className="projectLink" to={`/amiiwho/AmiiWho`} >AmiiWho</Link>
    </div>
  )
}

export default ProjectLinks