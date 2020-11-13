import React from 'react'
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Login.css'
import {Button, Image, Modal} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import md5 from 'md5';

const cookie = new Cookies();

class Login extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      respuestaServidor: null,
      usuarioValidado: false,
      usuario: null,
    }
  }

  componentDidMount(){
    if(cookie.get("cedula")){
      alert("Ya has iniciado sesion");
      window.location.href = "/" + cookie.get("tipoUsuario");
    }
  }

  handleClose = () => this.setState({showModal:false})

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async e => {
    await Axios.post("http://localhost:5000/Login",{
      cedula: this.state.cedula,
      contrasena: md5(this.state.contrasena)
    })
    .then(res =>{
      if(res.data.length > 0){
        const respuesta  = res.data[0];
        cookie.set("cedula", respuesta.cedula, {path:"/"});
        cookie.set("tipoUsuario", respuesta.tipoUsuario, {path:"/"});
        cookie.set("nombreCompleto", respuesta.nombreCompleto, {path:"/"});
        cookie.set("estado", respuesta.estado, {path:"/"});
        this.setState({usuarioValidado:true, usuario: respuesta});                
      }else{
        this.setState({showModal: true, respuestaServidor: "Correo o contrasena invalidos"});
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }

  urlRedirect(){
    const tipoUser = this.state.usuario.tipoUsuario
    return "/" + tipoUser
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
            <input name="cedula" placeholder="Cédula" type= "text" onChange={this.handleChange}></input> 
            <input name="contrasena" placeholder="Contraseña" type= "password" onChange={this.handleChange}></input>                  
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
      <Modal.Body> {this.state.respuestaServidor} </Modal.Body>
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
