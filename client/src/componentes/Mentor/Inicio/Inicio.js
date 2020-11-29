import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import {Image} from 'react-bootstrap';
import Ruta from '../../../Imagenes/ruta.png'; 
import './Inicio.css';
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'

class Inicio extends Component {
    render(){
        return (            
            <div>
                <div>
                    <Navbar></Navbar>
                </div>       
                <div>
                    <Navegacion></Navegacion>
                </div>             
                <Image className= "rutaAImg" src={Ruta}/>
            </div>
        )
    }
}

export default Inicio
