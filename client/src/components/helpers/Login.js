import React from 'react'
import img from '../../imagenes/img.png';
import logo from '../../imagenes/sinapsis.png';
import '../../styles/login.css';
import {Button, Image} from 'react-bootstrap';

class Login extends React.Component {
   
     Imagenhome() {
        return (        
            <Image className= "image" src={img}/> 
        );
      }

      CardLogin()
      {
          return(
              <div className="home">
                  <div className="CardLogin">
                  <Image className= "imagelogo" src={logo}/>   
                  <h3 className="titulo">Inicia sesión en Sinapsis UAO</h3>
                  <input className="input" placeholder="Cédula" type= "text"></input> 
                  <input className="input" placeholder="Contraseña" type= "password"></input>
                  <Button className="button" variant="primary"> Iniciar sesión </Button>
                  <p className="titulolink">Regístrate</p>
                  </div>          
              </div>
          );
      }

   render(){

    return (
      <div className= "containerprincipal" >     
        <div className="imagehome">
          { this.Imagenhome() }
        </div>      
        <div className="containerDerecha">
          { this.CardLogin() }         
        </div>     
    </div>
    )

   }
    
}

export default Login
