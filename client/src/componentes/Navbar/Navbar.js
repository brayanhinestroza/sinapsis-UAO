import React from 'react'
import {Image} from 'react-bootstrap';
import logo from '../../Imagenes/sinapsis.png';
import menu from '../../Imagenes/menu.svg'; 
import exit from '../../Imagenes/exit.svg'; 
import user from '../../Imagenes/user.svg'; 
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">  
            <div className= "contenedorIzq">               
                <Image className= "logo" src={logo}/>
            </div>

            <div  className= "contenedorDer">
                <p className= "nombre" >Nombre Usuario</p>
                <Image className= "icono" src={user}/>
                <Image className= "icono" src={exit}/>
            </div>            
            
        </div>

        
    )
}

export default Navbar
