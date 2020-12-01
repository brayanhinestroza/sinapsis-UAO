import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Image, Modal} from 'react-bootstrap';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import md5 from 'md5'
import img from '../../Imagenes/img.png';
import logo from '../../Imagenes/sinapsis.png';
import './Registro.css'

const cookie = new Cookies();

const validaciones = valores =>{
  const errors = {}
  const {cedula, nombreCompleto, correo, tipoUsuario, contrasena, confirmContrasena} = valores

  //Validaciones para la cedula
  if(!cedula){
    errors.cedula = "Campo obligatorio"
  }else{
    const RegExp = /^\D*\d{5,11}$/
    if(!RegExp.test(cedula)){
      errors.cedula = "Solo se permiten numeros entre 5 a 11 digitos"
    }
  }
  //Validaciones para el nombre
  if(!nombreCompleto){
    errors.nombreCompleto = "Campo obligatorio"    
  }else{
    const RegExp = /^[A-Za-z ]{1,50}$/
    if(!RegExp.test(nombreCompleto)){
      errors.nombreCompleto = "Solo se permiten letras, minimo 1 y maximo 50 caracteres."
    }
  }
  //Validaciones para el correo
  if(!correo){
    errors.correo = "Campo obligatorio"
  }else{
    // eslint-disable-next-line
    const RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if(!RegExp.test(correo)){
      errors.correo = "El correo no es valido"
    }
  }
  //Validaciones para el tipo de usuario
  if(!tipoUsuario){
    errors.tipoUsuario = "Campo obligatorio"
  }
  //Validaciones para la contrasena
  if(!contrasena){
    errors.contrasena = "Campo obligatorio"
  }else{
    if(!confirmContrasena){
      errors.confirmContrasena = "Campo obligatorio"
    }else{
      const RegExp = /^(?=.*\d).{4,8}$/
      if(!RegExp.test(contrasena)){
        errors.contrasena = "La contraseña debe tener entre 4 y 8 caracteres y al menos un dígito."
      }else{
        // eslint-disable-next-line
        if(contrasena != confirmContrasena){
          errors.contrasena = "Las contraseñas deben ser iguales"
          errors.confirmContrasena = "Las contraseñas deben ser iguales"
        }
      }
    }    
  }
  return errors
}

class Login extends React.Component {   
  constructor(){
    super();  
    this.state = {
      errors:{}
    }
  }
  //Ciclo de vida del componente
  componentDidMount(){
    if(cookie.get("cedula")){
      alert("Ya has iniciado sesion");
      window.location.href = "/" + cookie.get("tipoUsuario");
    }
  }

  //Eventos del componente
  handleClose = () => window.location.href = "/";

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {errors, ...SinError} = this.state
    const result = validaciones(SinError);
    //Pregunta si hay errores, True = error, false= no hay error
    if(Object.keys(result).length){
      this.setState({errors: result})      
    }else{
      await Axios.post("http://localhost:5000/Registro",{
        cedula: this.state.cedula,
        nombreCompleto: this.state.nombreCompleto,
        correo: this.state.correo,
        contrasena: md5(this.state.contrasena),
        tipoUsuario: this.state.tipoUsuario
      })
      .then(res => {
        if(res.data.res1.affectedRows && res.data.res2.affectedRows){
          this.setState({showModal: true});
        }else{
          alert("Ha ocurrido un error");
        }
      });
    }
  }

  Imagenhome() {
    return (          
          <Image className= "imageR" src={img}/> 
    );
  }

  CardRegistro() {
    const {errors} = this.state
    return(
      <div className="homeR">
        <form className="CardRegistroR">              
        <p className="tituloR">Registrate en Sinapsis UAO</p>

        <div className="form-controls">
          <input name="nombreCompleto" className="inputR" placeholder="Nombre completo" type="text" onChange={this.handleChange} ></input>
          {errors.nombreCompleto && <small class="form-text font-weight-bold text-danger">{errors.nombreCompleto}</small>}
        </div> 

        <div className="form-controls">
          <input name="cedula" className="inputR" placeholder="Cédula" type= "text" onChange={this.handleChange}></input> 
          {errors.cedula && <small class="form-text font-weight-bold text-danger">{errors.cedula}</small>}
        </div>

        <div className="form-controls">
          <input name="correo" className="inputR" placeholder="Correo" type= "text" onChange={this.handleChange}></input>  
          {errors.correo && <small class="form-text font-weight-bold text-danger">{errors.correo}</small>}
        </div> 

        <div className="form-controls">
          <select value={this.state.tipoUsuario} name="tipoUsuario" className="inputR" placeholder="Tipo de usuario" type= "text" onChange={this.handleChange}>
          <option className="inputR" value="-1" disabled selected>Tipo de usuario</option> 
            <option className="inputR" value="Emprendedor">Emprendedor</option> 
            <option className="inputR" value="Mentor">Mentor</option> 
            <option className="inputR" value="Administrador">Administrador</option>  
          </select>
          {errors.tipoUsuario && <small class="form-text font-weight-bold text-danger">{errors.tipoUsuario}</small>}
        </div>

        <div className="form-controls">
          <input name="contrasena" className="inputR" placeholder="Contraseña" type= "password" onChange={this.handleChange}></input>
          {errors.contrasena && <small class="form-text font-weight-bold text-danger">{errors.contrasena}</small>}
        </div>

        <div className="form-controls">
          <input name="confirmContrasena" className="inputR" placeholder="Confirmar contraseña" type= "password" onChange={this.handleChange}></input>
          {errors.confirmContrasena && <small class="form-text font-weight-bold text-danger">{errors.confirmContrasena}</small>}
        </div>

        <Button className="buttonR" variant="primary" type="button" onClick={this.handleSubmit}> Registrarse </Button>
        <p className="titulolinkR">¿Ya tienes una cuenta? <Link to="/" >Iniciar sesión</Link></p>      
        </form>          
    </div>
    );
    }

   render(){
    return (  
      this.state.showModal ? (
      <Modal centered show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Correcto</Modal.Title>
        </Modal.Header>
        <Modal.Body> Has sido registrado correctamente</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>      
      )   
    :      
    <div className= "containerprincipalR" >     
      { this.Imagenhome() }      
      <div className="containerDerechaR">
        <Image className= "imagelogoR" src={logo}/> 
        { this.CardRegistro() }         
      </div>     
    </div>
    )
   }    
}
export default Login
