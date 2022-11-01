import React, { useState } from 'react'
import "./NavBar.css"

const NavBar = () => {
    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }

  return (
    <div>
        <button className="navbar-burger" onClick={() => toggleMenu()}></button>
        <nav className="menu">
            <a href="#" style={{animationDelay: `0.1s`}}>Home</a>
            <a href="#" style={{animationDelay: `0.3s`}}>Projects</a>
            <a href="#" style={{animationDelay: `0.2s`}}>About</a>
            <a href="#" style={{animationDelay: `0.4s`}}>Contact</a>
        </nav>
    </div>
  )
}

export default NavBar