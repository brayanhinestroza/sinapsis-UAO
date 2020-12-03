import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Navegacion from '../Navegacion/Navegacion';
import Tabla from './TablaBuscar/Tabla';
import '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import './DiagnosticoBuscar.css'

function DiagnosticoBuscar() {
    return (
    <div>
      <Navbar></Navbar>
      <Navegacion></Navegacion>     
      <div> 
          <div className="titulopaginaAD">
            <h3>Diagnósticos</h3>
          </div>
          <div className= "contenedorDAD">
            <Tabla/>
          </div>
      </div>
    </div>
    )
}

export default DiagnosticoBuscar
