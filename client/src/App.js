import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Mentor from './components/Mentor/Mentor'
import Administrador from './components/Administrador/Administrador'
import Login from './components/helpers/Login'
import Registro from './components/helpers/Registro'

import Diagnostico from './components/Emprendedor/Diagnostico'
import Ruta from './components/Emprendedor/Ruta'
import RoutesEmprendedor from './routes/Emprendedor.router'
import Diagnosticos from './components/Administrador/Diagnosticos'
import Cuentas from './components/Administrador/Cuentas'

function App() {
  return (
    <Router>
      <RoutesEmprendedor/>
      <Route exact path='/Emprendedor/Diagnostico' component={Diagnostico}/>  
      <Route exact path='/Emprendedor/Ruta' component={Ruta}/> 
      <Route exact path='/Administrador/Diagnosticos' component={Diagnosticos}/> 
      <Route exact path='/Administrador/Cuentas' component={Cuentas}/> 
      <Route exact path='/' component={Home}/>      
      <Route exact path='/Mentor' component={Mentor}/>  
      <Route exact path='/Administrador' component={Administrador}/>      
      <Route  path='/Mentor/Login' component={Login}/> 
      <Route  path='/Administrador/Login' component={Login}/>       
      <Route  path='/Mentor/Registro' component={Registro}/> 
      <Route  path='/Administrador/Registro' component={Registro}/> 

    </Router>
  );
}

export default App;
