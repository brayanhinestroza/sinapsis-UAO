import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'

export default class Mentor extends Component {
    render() {
        return (
            <>
            <Banner/>
            <div>
                Hola mentor
                <Link className="d-block ml-5" to="/Mentor/Login">
                    Login
                </Link>
                <Link className="d-block ml-5" to="/Mentor/Registro">
                    Registro
                </Link>
            </div>
            </>
        )
    }
}
