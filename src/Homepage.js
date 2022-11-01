import React from 'react'
import ivy from "./20221018_180042.png"
import resumeIcon from "./resume-logo.png"
import pdf from "./Nguyen_resume.pdf"
import { SocialIcon } from 'react-social-icons';
import NavBar from './NavBar';
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className='homepage'>
      <NavBar />
        <img className="portfolioImage" src={ivy} alt="ivy portfolio image"/>
        <h1>Ivy Nguyen</h1>
        <div className='iconContainer'>
            <SocialIcon className="icons" url="https://www.linkedin.com/in/ivy-nguyen-051b27212/" />
            <SocialIcon className="icons" url="https://github.com/INguyen22" />
            <a href={pdf}><button className="icons" id='resume'>Resume</button></a>
        </div>
        <p className='intro'>Hi! My name is Ivy and I am a Software Developer with a focus on Front-End tech</p>
    </div>
  )
}

export default Homepage