import React from 'react'
import Homepage from '../Homepage/Homepage';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import { projectData } from "../../assets/project-info"
import { Route } from 'react-router-dom';

const App = () => {
  console.log('data', projectData)

  const projectRoutes = (projects) => {
   return projects.map(project => <Route key={Math.random()} exact path={`/${project.path}/${project.title}`} render={() => <Project project={project}/>}/>)
  }

  return (
    <div>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path={`/projects`} render={() => <Projects />} />
      {projectRoutes(projectData)}
    </div>
  )
}

export default App
