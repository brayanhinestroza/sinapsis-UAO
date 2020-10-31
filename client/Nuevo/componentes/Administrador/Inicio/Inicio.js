import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Bienvenida from '../../Bienvenida/Bienvenida';
import {Image} from 'react-bootstrap';
import Ruta from '../../../Imagenes/ruta.png'; 
import './Inicio.css';

function Inicio() {
    return (
        <div>
           <Navbar></Navbar>
           <Bienvenida></Bienvenida> 
           <Image className= "ruta" src={Ruta}/>


        </div>
    )
}

export default Inicio
