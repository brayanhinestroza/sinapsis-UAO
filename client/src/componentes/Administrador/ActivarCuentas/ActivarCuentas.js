import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar'
import Navegacion from '../Navegacion/Navegacion';
import Tabla from './TablaCuentas/Tabla';
import '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css';
import './ActivarCuentas.css';


class ActivarCuentas extends Component {

    render(){
        return (
        <div>
            <Navbar/>
            <Navegacion/>
            <div>    
                <div className="titulopaginaAA">
                    <h3>Activar cuentas</h3>
                </div>
                <div className= "contenedorDAA">
                    <Tabla/>
                </div>          
            </div>         
        </div>
        )
    }
}

export default ActivarCuentas
