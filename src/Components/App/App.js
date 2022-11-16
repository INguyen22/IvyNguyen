import React from 'react'
import Homepage from '../Homepage/Homepage';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import { projectData } from "../../assets/project-info"
import { Route } from 'react-router-dom';

const App = () => {
  // console.log('data', projectData)

  const projectRoutes = (projects) => {
   return projects.map(project => <Route key={Math.random()} exact path={`/${project.path}/${project.title}`} render={() => <Project project={project}/>}/>)
  }

  return (
    <div className='app'>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path={`/projects`} render={() => <Projects />} />
      <Route exact path={'/aboutMe'} render={() => <AboutMe />} />
      {projectRoutes(projectData)}
    </div>
  )
}

export default App
