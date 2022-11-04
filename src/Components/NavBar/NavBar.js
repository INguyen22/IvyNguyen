import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    const toggleMenu = () => {
      console.log('toggle', document.body.classList)
        document.body.classList.toggle("open");
    }

  return (
    <div>
        <button className="navbar-burger" onClick={() => toggleMenu()}></button>
        <nav className="menu">
          <button className="a" style={{animationDelay: `0.1s`}} onClick={() => toggleMenu()}><Link to={`/`} className="links" >Home</Link></button>
          <button className="a" style={{animationDelay: `0.2s`}} onClick={() => toggleMenu()}><Link to={`/projects`} className="links" >Projects</Link></button>
          <button className="a" style={{animationDelay: `0.3s`}} onClick={() => toggleMenu()}><Link to={`/aboutMe`} className="links" >About</Link></button>
          <button className="a" style={{animationDelay: `0.4s`}} onClick={() => toggleMenu()}><Link to={`/contact`} className="links" >Contact</Link></button>
        </nav>
    </div>
  )
}

export default NavBar