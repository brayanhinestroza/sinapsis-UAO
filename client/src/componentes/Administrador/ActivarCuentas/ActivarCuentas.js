import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import Tabla from './TablaCuentas/Tabla';
import './ActivarCuentas.css'


class ActivarCuentas extends Component {

    render(){
        return (
            <div>
                <Navbar></Navbar>
                <Navegacion></Navegacion>
                <div className="crumb" >            
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
