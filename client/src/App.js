import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Emprendedor from './components/Emprendedor/Emprendedor'
import Mentor from './components/Mentor/Mentor'
import Administrador from './components/Administrador/Administrador'
import Prueba from './components/helpers/Login'



function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route  path='/Emprendedor' component={Emprendedor}/>
      <Route  path='/Mentor' component={Mentor}/>  
      <Route  path='/Administrador' component={Administrador}/>
      <Route  path='/1' component={Prueba}/> 

    </Router>
  );
}

export default App;
