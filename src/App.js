import React from 'react'
import Homepage from './Homepage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Route path="/" component={ Homepage }/>
    </div>
  )
}

export default App
