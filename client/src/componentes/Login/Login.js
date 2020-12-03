import React from 'react'
import {Button, Image, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import md5 from 'md5';
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Login.css'

const cookie = new Cookies();
const validaciones = valores =>{
  const errors = {};
  const {cedula, contrasena} = valores
  //Validaciones de Cedula
  if(!cedula){
    errors.cedula = "Este campo es obligatorio"
  }else{
    const regExp = /^\D*\d{5,11}$/
    if(!regExp.test(cedula)){
      errors.cedula = "Solo se permiten números de 5 a 11 dígitos"
    }    
  }
  //Validaciones de Contrasena
  if(!contrasena){
    errors.contrasena = "Este campo es obligatorio"
  }
  const regExp1 = /^(?=.*\d).{4,8}$/
  if(!regExp1.test(contrasena)){
    errors.contrasena = "La contraseña debe tener entre 4 y 8 caracteres"
  }
  return errors;
}

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      errors: {},
      mensaje: null
    }
  }

  //Ciclo de vida del componente
  componentDidMount(){
    if(cookie.get("cedula")){
      alert("Ya has iniciado sesión");
      window.location.href = "/" + cookie.get("tipoUsuario");
    }
  }

  //Eventos del componente
  handleClose = () => this.setState({showModal:false})

  //Se activa cuando se cambia algun campo en el formulario y lo asigna al estado
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //Se activa cuando se presiona el boton de iniciar sesion
  handleSubmit = async e => {
    e.preventDefault();
    const {errors, mensaje, ...SinErrors} = this.state
    const result = validaciones(SinErrors);
    if(Object.keys(result).length){
      this.setState({errors: result})      
    }else{ 
    this.setState({errors:result})
    await Axios.post("http://localhost:5000/Login",{
      cedula: this.state.cedula,
      contrasena: md5(this.state.contrasena)
    })
    .then(res =>{
      if(!res.data.message){
        const respuesta  = res.data[0];
        cookie.set("cedula", respuesta.cedula, {path:"/"});
        cookie.set("tipoUsuario", respuesta.tipoUsuario, {path:"/"});
        cookie.set("nombreCompleto", respuesta.nombreCompleto, {path:"/"});
        cookie.set("correo", respuesta.correo, {path:"/"});
        cookie.set("estado", respuesta.estado, {path:"/"});
        window.location.href = "/" + respuesta.tipoUsuario;
      }else{
        this.setState({mensaje: res.data.message, showModal: true});
      }
    });
  }
}
  //Subcomponentes
  Imagenhome = () => {
    return (          
          <Image className= "imageL" src={img}/> 
    );
  }

  CardLogin()
  {
    const {errors} = this.state
    return(
        <div className="homeL">
            <form onSubmit={this.handleSubmit} className="CardLoginL">
            <Image className= "imagelogoL" src={logo}/>   
            <h3 className="tituloL">Inicia sesión en Sinapsis UAO</h3>
            <div className="form-controls">
              <input name="cedula" placeholder="Cédula" type= "text" onChange={this.handleChange}></input>
                {errors.cedula && <small class="form-text font-weight-bold text-danger">{errors.cedula}</small>} 
            </div>
            <div className="form-controls">
              <input name="contrasena" placeholder="Contraseña" type= "password" onChange={this.handleChange}></input>   
              {errors.contrasena && <small class="form-text font-weight-bold text-danger">{errors.contrasena}</small>}   
            </div>             
            <Button className= "buttonL" variant="primary" type="button" onClick={this.handleSubmit} >Iniciar sesión </Button>                                  
            <p className="titulolinkL">¿No tienes una cuenta? <Link to="/Registro" >Regístrate</Link></p>
          </form>
        </div>
    );
  }

  render(){

  return (       
    /*Bloque del if */
    this.state.showModal ? 
    <Modal centered show={this.state.showModal} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body> {this.state.mensaje} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
    : /*Bloque del Else */
    <div className= "containerprincipalL" >    
    { this.Imagenhome() }      
    <div className="containerDerechaL">
    { this.CardLogin() }         
    </div>    
  </div>
  )
  }    
}

export default Login
