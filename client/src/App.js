import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Emprendedor from './components/Emprendedor/Emprendedor'
import Mentor from './components/Mentor/Mentor'
import Administrador from './components/Administrador/Administrador'
import Login from './components/helpers/Login'
import Registro from './components/helpers/Registro'



function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Emprendedor' component={Emprendedor}/>
      <Route exact path='/Mentor' component={Mentor}/>  
      <Route exact path='/Administrador' component={Administrador}/>
      <Route  path='/Emprendedor/Login' component={Login}/> 
      <Route  path='/Mentor/Login' component={Login}/> 
      <Route  path='/Administrador/Login' component={Login}/> 
      <Route  path='/Emprendedor/Registro' component={Registro}/> 
      <Route  path='/Mentor/Registro' component={Registro}/> 
      <Route  path='/Administrador/Registro' component={Registro}/> 

    </Router>
  );
}

export default App;
