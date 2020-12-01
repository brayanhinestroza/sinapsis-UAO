import React from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import TablaEmp from './TablaBuscar/TablaMBuscar';
import './EmprendedorBuscar.css'

function EmprendedorBuscar() {
  return (
    <div>
      <Navbar/>
      <Navegacion/> 
      <div> 
        <div className="titulopaginaME">
          <h3>Emprendedores</h3>
        </div>
        <div className= "contenedorDME">
          <TablaEmp/>
        </div>
      </div>
    </div>
  );
}

export default EmprendedorBuscar
