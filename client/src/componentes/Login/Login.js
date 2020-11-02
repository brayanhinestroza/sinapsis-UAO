import React from 'react'
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Login.css'
import {Button, Image, Modal} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import Axios from 'axios'

class Login extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cedula: "",
      contrasena: "",
      showModal: false,
      serverMessage: "",
      usuarioValidado: false,
      usuario: null,
    }
  }

  handleClose = () => this.setState({showModal:false})

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    Axios.post("http://localhost:5000/Login",{
      cedula: this.state.cedula,
      contrasena: this.state.contrasena
    }).then((res) => {

      if(res.data.message !== "Correcto"){
       this.setState({showModal: true});
       this.setState({serverMessage: res.data.message});
      }else{
        console.log(res.data.usuario);
        this.setState({usuarioValidado:true, usuario: res.data.usuario})     
      }
    })
  }

  urlRedirect(){
    const tipoUser = this.state.usuario.tipoUsuario
    console.log(tipoUser);
    if(tipoUser === 1){
      return "/Emprendedor"
    }
    if(tipoUser === 2){
      return "/Mentor"
    }
    if(tipoUser === 0){
      return "/Administrador"
    }
  }

  Imagenhome = () => {
    return (          
          <Image className= "image" src={img}/> 
    );
  }

  CardLogin()
  {
    return(
        <div className="home">
            <form onSubmit={this.handleSubmit} className="CardLogin">
            <Image className= "imagelogo" src={logo}/>   
            <h3 className="titulo">Inicia sesión en Sinapsis UAO</h3>
            <input className="input" name="cedula" placeholder="Cédula" type= "text" onChange={this.handleChange}></input> 
            <input className="input" name="contrasena" placeholder="Contraseña" type= "password" onChange={this.handleChange}></input>                  
            <Button className= "button" variant="primary" type="button" onClick={this.handleSubmit} >Iniciar sesión </Button>                                  
            <p className="titulolink">¿No tienes una cuenta? <Link to="/Registro" >Regístrate</Link></p>
          </form>
        </div>
    );
  }

  render(){
  return (
    this.state.usuarioValidado ? <Redirect to={this.urlRedirect()}/> 
    :
    
    /*Bloque del if */
    this.state.showModal ? 
    <Modal centered show={this.state.showModal} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body> {this.state.serverMessage} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
    : /*Bloque del Else */
    <div className= "containerprincipal" >    
    { this.Imagenhome() }      
    <div className="containerDerecha">
    { this.CardLogin() }         
    </div>    
  </div>
  )
  }    
}

export default Login
