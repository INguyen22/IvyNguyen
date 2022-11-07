import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeNav.css"

const HomeNav = () => {
  return (
    <div className='homeNav'>
        <Link className='homeText' to={'/'}>IN</Link>
    </div>
  )
}

export default HomeNav