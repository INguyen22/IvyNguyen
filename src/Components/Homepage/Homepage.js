import React from 'react'
import ivy from "../Images/20221018_180042.png"
import pdf from "../Images/Nguyen_resume.pdf"
import { SocialIcon } from 'react-social-icons';
import NavBar from '../NavBar/NavBar';
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className='homepage'>
      <NavBar />
        <img className="portfolioImage" src={ivy} alt="ivy portfolio image"/>
        <h1>Ivy Nguyen</h1>
        <div className='iconContainer'>
            <SocialIcon target="_blank" rel="noopener noreferrer" className="icons" url="https://www.linkedin.com/in/ivy-nguyen-051b27212/" />
            <SocialIcon target="_blank" rel="noopener noreferrer" bgColor={"gold"} className="icons" url="https://github.com/INguyen22" />
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="icons" id='resume'>Resume</a>
        </div>
        <p className='intro'>Hi! My name is Ivy and I am a Gamer, Foodie, and Software Developer too with a passion in Front-End tech</p>
    </div>
  )
}

export default Homepage