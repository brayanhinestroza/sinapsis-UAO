import React from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import Tabla from './TablaBuscar/Tabla';
import './DiagnosticoBuscar.css'

function DiagnosticoBuscar() {
    return (
    <div>
      <Navbar></Navbar>
      <Navegacion></Navegacion>
      <div className="crumb mb-3" >
      </div>
      <div> 
          <div className="titulopagina">
            <h3>Diagnósticos</h3>
          </div>
          <div className= "contenedorD">
            <Tabla dato="Diagnosticos" textoBoton="Revisar" title="diagnóstico"></Tabla>
          </div>
      </div>
    </div>
    )
}

export default DiagnosticoBuscar
