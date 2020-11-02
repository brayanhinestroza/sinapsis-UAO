import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import Tabla from '../../Tabla/Tabla';
import {Breadcrumb } from 'react-bootstrap';
import './ActivarCuentas.css'


class ActivarCuentas extends Component {
    render(){
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
                <h3>Activar cuentas</h3>
            </div>
            <div className= "contenedorD">
            <Tabla dato="Cuentas" textoBoton="Activar" title="cuentas a activar"></Tabla>
            </div>           
            

            </div>           

            </div>
        )
    }
}

export default ActivarCuentas
