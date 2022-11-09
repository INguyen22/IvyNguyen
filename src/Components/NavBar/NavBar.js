import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../Images/menu.png"
import "./NavBar.css"

const NavBar = () => {
    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => toggleMenu()} className="burger"></button>
        <div className="dropdowns">
        <button className="button" onClick={() => toggleMenu()}><Link to={`/`} className="linkInNav">Home</Link></button>
          <div className="dropdown">
            <button className="button" onClick={() => toggleMenu()}>
              <Link to={`/projects`} className="linkInNav">Projects</Link>
            </button>
            <div className="dropdown-menu">
              <button onClick={() => toggleMenu()}><Link className='linkInNav' to={`/OneHitWonders/One-Hit-Wonders`}>One Hit Wonders</Link></button>
              <button onClick={() => toggleMenu()}><Link className='linkInNav' to={`/heatCheck/Heat-Check`}>Heat Check</Link></button>
              <button onClick={() => toggleMenu()}><Link className='linkInNav' to={`/amiiwho/AmiiWho`}>AmiiWho</Link></button>
            </div>
          </div>
          <button className="button" onClick={() => toggleMenu()}><Link to={`/aboutMe`} className="linkInNav" >About Me</Link></button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar