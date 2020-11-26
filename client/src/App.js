import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './componentes/Login/Login'
import Registro from './componentes/Registro/Registro'
import Administrador from './componentes/Administrador/Inicio/Inicio'
import ActivarCuenta from './componentes/Administrador/ActivarCuentas/ActivarCuentas'
import DiagnosticosADM from './componentes/Administrador/DiagnosticoBuscar/DiagnosticoBuscar'
import DiagnosticoADM from './componentes/Administrador/DiagnosticoConsulta/DiagnosticoConsulta'
import Emprendedor from './componentes/Emprendedor/Inicio/Inicio'
import Diagnostico from './componentes/Emprendedor/Diagnostico/Diagnostico'
import Ruta  from './componentes/Emprendedor/Ruta/Ruta'
import Mentor  from './componentes/Mentor/EmprendedorBuscar/EmprendedorBuscar'
import Mentor2  from './componentes/Mentor/EmprendedorConsulta/EmprendedorConsulta'


function App() {
  return (
    <Router>
      <Route exact path='/Mentor/Emprendedores' component={Mentor2} /> 
      <Route exact path='/Mentor/Emprendedor' component={Mentor} /> 
      <Route exact path='/' component={Login} /> 
      <Route exact path='/Registro' component={Registro} />
      <Route exact path='/Administrador' component={Administrador} />
      <Route exact path='/Administrador/Activar' component={ActivarCuenta} />
      <Route exact path='/Administrador/Diagnosticos' component={DiagnosticosADM} />
      <Route exact path='/Administrador/Diagnostico' component={DiagnosticoADM} />
      <Route exact path='/Emprendedor' component={Emprendedor} />
      <Route exact path='/Emprendedor/Diagnostico' component={Diagnostico} />
      <Route exact path='/Emprendedor/Ruta' component={Ruta} />
    </Router>
  );
}

export default App;
