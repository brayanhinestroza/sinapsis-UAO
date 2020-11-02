import React from 'react'
import { Link } from 'react-router-dom'
import './Navegacion.css'

function Navegacion() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark "  style={{'background-color': '#684571', 'margin-top':'4.5rem'}}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar10">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <Link class="nav-link" to="/Administrador">INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/Administrador/Activar"> ACTIVAR CUENTAS</Link>
                        </li>
                        <li className="nav-item">
                             <Link class="nav-link" to="/Administrador/Diagnosticos">DIAGNÓSTICOS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navegacion
