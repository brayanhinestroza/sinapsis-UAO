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
            <Navbar></Navbar>
            <Navegacion></Navegacion> 

        <div> 
          <div className="titulopaginaME">
            <h3>Emprendedores</h3>
          </div>
          <div className= "contenedorDME">
            <TablaEmp dato="Diagnosticos" textoBoton="Revisar" title="emprendedores"></TablaEmp>
          </div>
      </div>

        </div>
    )
}

export default EmprendedorBuscar
