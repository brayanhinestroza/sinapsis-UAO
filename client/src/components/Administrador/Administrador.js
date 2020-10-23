import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'

export default class Administrador extends Component {
    render() {
        return (
            <>
            <Banner/>
            <div>
                Bienvenido Administrador
                <Link className="d-block ml-5" to="/Administrador/Login">
                    Login
                </Link>
                <Link className="d-block ml-5" to="/Administrador/Registro">
                    Registro
                </Link>
            </div>
            </>
        )
    }
}
