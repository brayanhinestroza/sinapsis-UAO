import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'

import '../../styles/app.css'
import Imagen from '../../imagenes/RutaSinapsis.png'

class Emprendedor extends Component {
    render() {
        return (
            <>
            <Banner/>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbar10">
                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Emprendedor">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Emprendedor/Diagnostico">Diagnostico</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Emprendedor/Ruta">Mi Ruta</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="text-center mt-5 mb-5">
                <img src={Imagen} alt="Sinapsis ruta" width="60%" height="70%" />
            </div>
            </>
        )
    }
}

export default Emprendedor