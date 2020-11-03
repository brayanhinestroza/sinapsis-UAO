import React, {Component} from 'react'
import {Image} from 'react-bootstrap';
import logo from '../../Imagenes/sinapsis.png';
import exit from '../../Imagenes/exit.svg'; 
import user from '../../Imagenes/user.svg'; 
import './Navbar.css'

class Navbar extends Component {
    render(){
    return (
        <div className="Navbar">  
            <div className= "contenedorIzq">               
                <Image className= "logo" src={logo}/>
            </div>

            <div  className= "contenedorDer">
                <p className= "nombre" >{this.props.user}</p>
                <Image className= "icono" src={user}/>
                <Image className= "icono" src={exit}/>
            </div>            
            
        </div>
    )
    }
}

export default Navbar
