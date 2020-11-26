import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {Image} from 'react-bootstrap';
import Ruta from '../../../Imagenes/ruta.png'; 
import './Inicio.css';
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
 
function Inicio() {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>           
           <div>
           <Navegacion></Navegacion>
           </div>          
           <Image className= "rutaImg" src={Ruta}/>
        </div>
    )
}

export default Inicio
