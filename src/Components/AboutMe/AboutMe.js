import React from 'react'
import NavBar from '../NavBar/NavBar'
import zoom from "../Images/Screen Shot 2022-07-17 at 12.11.08 PM.png"
import pharm from "../Images/20220115_220301.jpg"
import fun from "../Images/1647539793814.jpg"
import HomeNav from '../HomeNav/HomeNav'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className='aboutMePage'>
        <HomeNav />
        <NavBar />
        <h1>About Me</h1>
        <div className='introduction'>
            <p>
                My name is Ivy Nguyen and I am a recent graduate of Turing School of Software and Design.
                Turing is an intensive 7 month software development program where I focused a lot on Front-End Development.
                I was initially drawn to programming from my middle school days where I would create bootleg versions of Pacman and 
                Leap frog. 
                I didn't pursue it as a career at first because of the lack of support. But now that i've been given the opprotunity because of Turing, 
                i'm eager to learn more about new technologies and work with others to create robust applications that users can enjoy.
                I don't know where I will be in the future but I hope to experience the joys of creating games/applications from code again. 
            </p>
            <img className="zoomImage" src={zoom} alt="fun zoom meet"/>
        </div>
        <div className='background'>
            <p>
                Before Turing, I went to the University of Colorado Boulder and graduated with a bachelors degree in Chemistry. 
                I became a pharmacy technician with the intention of becoming a pharmacist someday. I spent alot of my time helping patients
                recieve the care they need by processing refill requests, filling prescriptions, process insurance claims, etc.
                I had to learn alot as fast as I could in order to contribute to my team by easing their workload from the pandemic. 
                While my experience as a pharmacy tech was short, 
                I credit a lot of my ability to make conceptual transfers of learning new languages directly to my experience as a pharmacy technician.
            </p>
            <img className="pharmImage" src={pharm} alt="pharmacy days"/>
        </div>
        <div className='offTime'>
            <p>
                On my days off, I love to play games,
                go out and try new food places in Denver, CO with friends (my favorite place right now is Pork.Let 🐷),
                and spend time with my significant other!
            </p>
            <img className="escapeImage" src={fun} alt="escape room image"/>
        </div>
    </div>
  )
}

export default AboutMe