import React from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import Tabla from './TablaBuscar/Tabla';
import './EmprendedorBuscar.css'



function EmprendedorBuscar() {
    return (
        <div>
            <Navbar></Navbar>
            <Navegacion></Navegacion> 

        <div> 
          <div className="titulopagina">
            <h3>Emprendedores</h3>
          </div>
          <div className= "contenedorD">
            <Tabla dato="Diagnosticos" textoBoton="Revisar" title="diagnóstico"></Tabla>
          </div>
      </div>

        </div>
    )
}

export default EmprendedorBuscar
