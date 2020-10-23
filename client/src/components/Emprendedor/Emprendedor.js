import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'

class Emprendedor extends Component {
    render() {
        return (
            <>
            <Banner/>
                <div>
                    Pagina inicio Emprendedor
                    <Link className="d-block ml-5" to="/Emprendedor/Login">
                        Login
                    </Link> 
                    <Link className="d-block ml-5" to="/Emprendedor/Registro">
                        Registro
                    </Link>                    
                </div>
            </>
        )
    }
}

export default Emprendedor