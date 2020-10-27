import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'
import Busqueda from './Busqueda'

class Diagnosticos extends Component {

    Navegacion(){
        return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar10">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Administrador">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Administrador/Diagnosticos">Diagnosticos Recientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Administrador/Cuentas">Activar cuentas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    }

    render() {
        return (
        <>
            <Banner/>
            {this.Navegacion()}
            <Busqueda Title="Diagnosticos"/>            
        </>);
    }
}

export default Diagnosticos