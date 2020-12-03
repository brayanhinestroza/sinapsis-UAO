import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './componentes/Login/Login'
import Registro from './componentes/Registro/Registro'
//Imports del administrador
import Administrador from './componentes/Administrador/Inicio/Inicio'
import ActivarCuenta from './componentes/Administrador/ActivarCuentas/ActivarCuentas'
import DiagnosticosADM from './componentes/Administrador/DiagnosticoBuscar/DiagnosticoBuscar'
import DiagnosticoADM from './componentes/Administrador/DiagnosticoConsulta/DiagnosticoConsulta'
import EmprendedoresADM from './componentes/Administrador/EmprendedorBuscar/EmprendedorBuscar'
import EmprendedorADM from './componentes/Administrador/EmprendedorConsulta/EmprendedorConsulta'
//Imports del Emprendedor
import Emprendedor from './componentes/Emprendedor/Inicio/Inicio'
import Diagnostico from './componentes/Emprendedor/Diagnostico/Diagnostico'
import Ruta  from './componentes/Emprendedor/Ruta/MiRuta'
import EmprendedorT from './componentes/Emprendedor/Ruta/TareaModal'
//Imports del Mentor
import Mentor from './componentes/Mentor/Inicio/Inicio'
import EmprendedoresMTR  from './componentes/Mentor/EmprendedorBuscar/EmprendedorBuscar'
import EmprendedorMTR  from './componentes/Mentor/EmprendedorConsulta/EmprendedorConsulta'
import CrearTarea from './componentes/Mentor/Tarea/TareaModal'
import CrearConsultoria from './componentes/Mentor/Consultoria/ConsultoriaModal'
import RevisarTarea from './componentes/Mentor/EmprendedorConsulta/Tab/TablaTareas/VerTarea/VerTarea'
import RevisarConsultoria from './componentes/Mentor/EmprendedorConsulta/Tab/TablaConsultorias/VerConsultoria/VerConsultoria'

function App() {
  return (
    <Router>
      <Route exact path='/Mentor' component={Mentor} /> 
      <Route exact path='/Mentor/Emprendedores' component={EmprendedoresMTR} />
      <Route path='/Mentor/Emprendedor' component={EmprendedorMTR} />
      <Route path='/Mentor/Emprendedor/CrearTarea' component={CrearTarea} />
      <Route path='/Mentor/Emprendedor/RevisarTarea' component={RevisarTarea} />
      <Route path="/Mentor/Emprendedor/CrearConsultoria" component={CrearConsultoria}/>
      <Route path='/Mentor/Emprendedor/Consultoria' component={RevisarConsultoria} />
      <Route exact path='/' component={Login} /> 
      <Route exact path='/Registro' component={Registro} />
      <Route exact path='/Administrador' component={Administrador} />
      <Route exact path='/Administrador/Activar' component={ActivarCuenta} />
      <Route exact path='/Administrador/Diagnosticos' component={DiagnosticosADM} />
      <Route exact path='/Administrador/Diagnostico' component={DiagnosticoADM} />
      <Route exact path='/Administrador/Emprendedores' component={EmprendedoresADM} />
      <Route exact path='/Administrador/Emprendedor' component={EmprendedorADM} />
      <Route exact path='/Emprendedor' component={Emprendedor} />
      <Route exact path='/Emprendedor/Diagnostico' component={Diagnostico} />
      <Route path='/Emprendedor/Ruta' component={Ruta} />
      <Route path='/Emprendedor/Ruta/Tarea' component={EmprendedorT} />
    </Router>
  );
}

export default App;
