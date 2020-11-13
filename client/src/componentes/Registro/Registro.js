import React from 'react'
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Registro.css'
import {Button, Image, Modal} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie';
import md5 from 'md5'

const cookie = new Cookies();

class Login extends React.Component {
   
  constructor(){
    super();
  
    this.state = {
      tipoUsuario: "Emprendedor",
      serverMessage: null,
      showModal: false,
      usuarioValidado: false      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(cookie.get("cedula")){
      alert("Ya has iniciado sesion");
      window.location.href = "/" + cookie.get("tipoUsuario");
    }
  }

  handleSubmit = async e => {
    await Axios.post("http://localhost:5000/Registro",{
      cedula: this.state.cedula,
      nombreCompleto: this.state.nombreCompleto,
      correo: this.state.correo,
      contrasena: md5(this.state.contrasena),
      tipoUsuario: this.state.tipoUsuario
    })
    .then(res => {
      if(res.data.res1.affectedRows && res.data.res2.affectedRows){
        this.setState({usuarioValidado: true});
      }else{
        alert("Ha ocurrido un error");
      }
    });   
  }

  handleClose = () => this.setState({showModal:false})
  handleCloseModal = () => this.setState({redirecionar:true})

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

    Imagenhome() {
      return (          
            <Image className= "image" src={img}/> 
      );
    }

    CardRegistro()
    {
    return(
      <div className="home">
      <form method="post" onSubmit={this.handleSubmit} className="CardRegistro">              
      <h3 className="titulo">Registrate en Sinapsis UAO</h3>
      <input name="nombreCompleto" className="input" placeholder="Nombre completo" type="text" onChange={this.handleChange} ></input> 
      <input name="cedula" className="input" placeholder="Cédula" type= "text" onChange={this.handleChange}></input> 
      <input name="correo" className="input" placeholder="Correo" type= "text" onChange={this.handleChange}></input> 
      <select value={this.state.tipoUsuario} name="tipoUsuario" className="input" placeholder="Tipo de usuario" type= "text" onChange={this.handleChange}>
        <option className="input" value="Emprendedor">Emprendedor</option> 
        <option className="input" value="Mentor">Mentor</option> 
        <option className="input" value="Administrador">Administrador</option>  
      </select>
      <input name="contrasena" className="input" placeholder="Contraseña" type= "password" onChange={this.handleChange}></input>
      <input className="input" placeholder="Confirmar contraseña" type= "password"></input>
      <Button className="button" variant="primary" type="button" onClick={this.handleSubmit}> Registrarse </Button>
      <p className="titulolink">¿Ya tienes una cuenta? <Link to="/" >Iniciar sesión</Link></p>      
      </form>          
    </div>
    );
    }

   render(){
    return (  
      this.state.redirecionar ? (
        <Redirect to="/"/> 
      )
      :
      this.state.usuarioValidado ? (
      <Modal centered show={this.state.usuarioValidado} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Correcto</Modal.Title>
        </Modal.Header>
        <Modal.Body> Has sido registrado correctamente </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>      
      )   
    :      
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
    :
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
