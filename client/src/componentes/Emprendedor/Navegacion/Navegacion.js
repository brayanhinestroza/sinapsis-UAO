import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import './Navegacion.css'

const cookie = new Cookies();
class Navegacion extends Component {

    state={
        diagnostico: true
    }

    componentDidMount(){
        Axios.get("http://localhost:5000/Emprendedor/Diagnostico",{
            params: {
                idEmprendedor: cookie.get("cedula")
            }
        })
        .then(res => {
            //Si el usuario ya ha realizado el diagnostico, desaparece la opcion del menu
            if(res.data.length > 0){
                this.setState({diagnostico: false});
            }            
        })
    }

    render(){
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
                                <Link class="nav-link" to="/Emprendedor">INICIO</Link>
                            </li>
                            {
                                this.state.diagnostico ? 
                                <li className="nav-item">
                                    <Link class="nav-link" to="/Emprendedor/Diagnostico"> DIAGNÓSTICO</Link>
                                </li>
                                :
                                <></>
                            }                            
                            <li className="nav-item">
                                    <Link class="nav-link" to="/Emprendedor/Ruta">MI RUTA</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    }
}

export default Navegacion
