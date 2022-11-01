import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }

  return (
    <div>
        <button className="navbar-burger" onClick={() => toggleMenu()}></button>
        <nav className="menu">
            <Link to={`/`} className="a" style={{animationDelay: `0.1s`}}>Home</Link>
            <Link to={`/projects`} className="a" style={{animationDelay: `0.2s`}}>Projects</Link>
            <Link to={`/`} className="a" style={{animationDelay: `0.3s`}}>About</Link>
            <Link to={`/`} className="a" style={{animationDelay: `0.4s`}}>Contact</Link>
        </nav>
    </div>
  )
}

export default NavBar