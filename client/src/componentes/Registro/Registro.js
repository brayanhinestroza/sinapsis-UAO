import React from 'react'
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Registro.css'
import {Button, Card, Form, Container, Row, Col, Image, InputGroup} from 'react-bootstrap';

class Login extends React.Component {
   
     Imagenhome() {
        return (          
              <Image className= "image" src={img}/> 
        );
      }

      CardRegistro()
      {
          return(
            <div className="home">
            <div className="CardRegistro">              
            <h3 className="titulo">Registrate en Sinapsis UAO</h3>
            <input className="input" placeholder="Nombre completo" type= "text"></input> 
            <input className="input" placeholder="Cédula" type= "text"></input> 
            <input className="input" placeholder="Correo" type= "text"></input> 
            <select className="input" placeholder ="Tipo de usuario" type= "text"></select> 
            <input className="input" placeholder="Contraseña" type= "password"></input>
            <input className="input" placeholder="Confirmar contraseña" type= "password"></input>
            <Button className="button" variant="primary"> Resgistrarse </Button>
            <p className="titulolink">Iniciar sesión</p>
            </div>          
        </div>
          );
      }

   render(){



    return (
        <div className= "containerprincipal" >
     
     { this.Imagenhome() }
      
      <div className="containerDerecha">
        <Image className= "imagelogo" src={logo}/> 
        { this.CardRegistro() }         
      </div>      
      
    </div>
    )

   }
    
}

export default Login
