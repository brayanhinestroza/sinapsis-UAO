import React from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import Tabla from '../../Tabla/Tabla';
import { Table, Breadcrumb } from 'react-bootstrap';
import './DiagnosticoBuscar.css'



function DiagnosticoBuscar() {
    return (
        <div>
            <Navbar></Navbar>
            <Navegacion></Navegacion>

            <div className="crumb" >
          <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          </div>


          <div>


            
          <div className="titulopagina">
              <h3>Diagnósticos</h3>
          </div>

          <div className= "contenedorD">

          <Tabla title="diagnóstico"></Tabla>

          </div>
           
         

          </div>
           

        </div>
    )
}

export default DiagnosticoBuscar
