import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Navegacion from '../Navegacion/Navegacion';
import TablaEmp from './TablaBuscar/TablaABuscar';
import '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
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
