import React, {Component} from 'react'
import Navbar from '../../Navbar/Navbar'
import './Diagnostico.css'
import '../../Registro/Registro.css'
import {Button, Modal} from 'react-bootstrap';
import Navegacion from '../Navegacion/Navegacion'
import Axios from 'axios'
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const validaciones = valores =>{
  const errors = {}
  const {celular,ciudad, clienteEmprendimiento, descripcionEmprendimiento, direccion, fechaNacimiento, genero, instrumentosValidacion, 
    necedidadEmprendimiento, nombreEmprendimiento, programa, tipoEconomia, tipoEmprendimiento, validacionesEmprendimeinto, vinculoConU} = valores
  if(!fechaNacimiento){
    errors.fechaNacimiento = "Campo Obligatorio"
  }
  if(!ciudad){
    errors.ciudad = "Campo Obligatorio"
  }
  if(!direccion){
    errors.direccion = "Campo Obligatorio"
  }
  if(!celular){
    errors.celular = "Campo Obligatorio"
  }else{
    const RegExp = /^\D*\d{1,10}$/
    if(!RegExp.test(celular)){
      errors.celular = "Solo se permiten numeros y maximo 10 digitos"
    }
  }
  if(!genero){
    errors.genero = "Campo Obligatorio"
  }
  if(!vinculoConU){
    errors.vinculoConU = "Campo Obligatorio"
  }
  if(!programa){
    errors.programa = "Campo Obligatorio"
  }
  if(!nombreEmprendimiento){
    errors.nombreEmprendimiento = "Campo Obligatorio"
  }
  if(!descripcionEmprendimiento){
    errors.descripcionEmprendimiento = "Campo Obligatorio"
  }
  if(!necedidadEmprendimiento){
    errors.necedidadEmprendimiento = "Campo Obligatorio"
  }
  if(!clienteEmprendimiento){
    errors.clienteEmprendimiento = "Campo Obligatorio"
  }
  if(!validacionesEmprendimeinto){
    errors.validacionesEmprendimeinto = "Campo Obligatorio"
  }
  if(!instrumentosValidacion){
    errors.instrumentosValidacion = "Campo Obligatorio"
  }
  if(!tipoEmprendimiento){
    errors.tipoEmprendimiento = "Campo Obligatorio"
  }
  if(!tipoEconomia){
    errors.tipoEconomia = "Campo Obligatorio"
  }
  return errors
}


class Diagnostico extends Component {
  constructor(){
    super()
    this.state = {
      errors:{},
      cedula: cookie.get("cedula"),
      nombreCompleto : cookie.get("nombreCompleto")
    }
  }

  //Eventos del componente  
  handleClose = () => window.location.href = "/Emprendedor"

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleClick = async e => {
    e.preventDefault()
    const {errors, ...SinError} = this.state
    const result = validaciones(SinError);
    
    if(Object.keys(result).length){
      this.setState({errors: result})
    }
    else{
      const {errors, ...Datos} = this.state
      await Axios.post("http://localhost:5000/Emprendedor/Diagnostico", Datos)
      .then(res=> {
        // eslint-disable-next-line
        if(res.status == 200){
          window.location.href = "/Emprendedor"
        }      
      })
    }
  }

  render(){
    const {errors} = this.state
    return (    
    this.state.diagnosticoEnviado ? (
      <Modal centered show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Correcto</Modal.Title>
        </Modal.Header>
        <Modal.Body> Has sido registrado correctamente </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    )     
    : 
             
    <div className="body-diagnostico">
      <Navbar></Navbar>
      <Navegacion></Navegacion>

      <div className="titulopagina">
          <h3>Diagnóstico</h3>
      </div>

      <div className="contenedorDiag">
          <div className="contenedorIzqD">
              <div className="Subtitulo">
              <h5>Información del emprendedor</h5>
              </div>
            
              <div>
                <label className="nombreInput">Nombre completo</label>
                <br></br>
                <label name="nombreCompleto" className="inputDiag">{cookie.get("nombreCompleto")}</label> 
              </div>

              <div>
                <label className="nombreInput">Cédula</label>
                <br></br>
                <label name="cedula" className="inputDiag">{cookie.get("cedula")}</label> 
              </div>
              
              <div>
                <label className="nombreInput">Correo</label>
                <br></br>
                <label name="cedula" className="inputDiag">{cookie.get("cedula")}</label> 
              </div>
              <div>
                <label className="nombreInput">Fecha de nacimiento</label>
                <br></br>
                <input name="fechaNacimiento" className="inputDiag" placeholder="Fecha de nacimiento" type= "date" onChange={this.handleChange}></input> 
                {errors.fechaNacimiento && <small class="form-text font-weight-bold text-danger">{errors.fechaNacimiento}</small>}
              </div>

              <div>
                <label className="nombreInput">Ciudad</label>
                <br></br>
                <input name="ciudad" className="inputDiag" placeholder="Ciudad" type= "text" onChange={this.handleChange}></input> 
                {errors.ciudad && <small class="form-text font-weight-bold text-danger">{errors.ciudad}</small>}
              </div>

              <div>
                <label className="nombreInput">Dirección</label>
                <br></br>
                <input name="direccion" className="inputDiag" placeholder="Dirección" type= "text" onChange={this.handleChange}></input> 
                {errors.direccion && <small class="form-text font-weight-bold text-danger">{errors.direccion}</small>}
              </div>

              <div>
                <label className="nombreInput">Celular</label>
                <br></br>
                <input name="celular" className="inputDiag" placeholder="Celular" type= "text" onChange={this.handleChange}></input> 
                {errors.celular && <small class="form-text font-weight-bold text-danger">{errors.celular}</small>}
              </div>

              <div>
                <label className="nombreInput">Género</label>
                <br></br>
                <select name="genero" className="inputDiag" placeholder="Género" type= "text" onChange={this.handleChange}>
                        <option disabled selected>Selecciona un género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenimo</option>   
                        <option value="Otro">Otro</option>  
                </select> 
                {errors.genero && <small class="form-text font-weight-bold text-danger">{errors.genero}</small>}
              </div>

              <div>
                <label className="nombreInput">Vinculo con la universidad</label>
                <br></br>
                <select name="vinculoConU" className="inputDiag" placeholder="Vinculo con la universidad" type= "text" onChange={this.handleChange}>
                        <option disabled selected>Selecciona un vinculo</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Egresado">Egresado</option>                               
                </select> 
                {errors.vinculoConU && <small class="form-text font-weight-bold text-danger">{errors.vinculoConU}</small>}
              </div>

              <div>
                <label className="nombreInput">Programa</label>
                <br></br>
                <select name="programa" className="inputDiag" placeholder="Programa" type= "text" onChange={this.handleChange}>
                        <option disabled selected>Selecciona tu programa</option>
                        <option value="Ingeniera Ambiental">Ingenieria Ambiental</option>
                        <option value="Ingenieria Multimedia">Ingenieria Multimedia</option>
                        <option value="Ingenieria Informatica">Ingenieria Informatica</option>
                        <option value="Ingenieria Electronica">Ingenieria Electronica</option>   
                </select> 
                {errors.programa && <small class="form-text font-weight-bold text-danger">{errors.programa}</small>}
              </div>
              

              <div className="Subtitulo">
              <h5>Información del emprendimiento</h5>
              </div>

              <div>
                <label className="nombreInput">Nombre del emprendimiento</label>
                <br></br>
                <input name="nombreEmprendimiento" className="inputlargo" placeholder="Nombre del emprendimeinto" type= "text" onChange={this.handleChange}></input> 
                {errors.nombreEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.nombreEmprendimiento}</small>}
              </div>

              <div>
                <label className="nombreInput">Descripción del emprendimiento</label>
                <br></br>
                <textarea name="descripcionEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                {errors.descripcionEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.descripcionEmprendimiento}</small>}
              </div>
              

          </div>

            <div className="contenedorDerD">

              <div>
                <label className="nombreInput">Necesidad o problema que soluciona</label>
                <br></br>
                <textarea name="necedidadEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                {errors.necedidadEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.necedidadEmprendimiento}</small>}
              </div>

              <div>
                <label className="nombreInput">Principal cliente o usuario</label>
                <br></br>
                <textarea name="clienteEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                {errors.clienteEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.clienteEmprendimiento}</small>}
              </div>

              <div>
                <label className="nombreInput">Validaciones que ha realizado</label>
                <br></br>
                <textarea name="validacionesEmprendimeinto" className="textarea" onChange={this.handleChange}></textarea>
                {errors.validacionesEmprendimeinto && <small class="form-text font-weight-bold text-danger">{errors.validacionesEmprendimeinto}</small>}
              </div>                
            
              <div>
                <label className="nombreInput">Instrumentos que ha utilizado para realizar las validaciones</label>
                <br></br>
                <textarea name="instrumentosValidacion" className="textarea" onChange={this.handleChange}></textarea>
                {errors.instrumentosValidacion && <small class="form-text font-weight-bold text-danger">{errors.instrumentosValidacion}</small>}
              </div>

              <div>
                <label className="nombreInput">Tipo de emprendimiento</label>
                <br></br>
                <select name="tipoEmprendimiento" className="inputDiag" type= "text" onChange={this.handleChange}>
                        <option disabled selected>Selecciona el tipo de emprendimiento</option>
                        <option value="Dinamico">Dinámico</option>
                        <option value="Alto Impacto">Alto impacto</option>
                </select> 
                {errors.tipoEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.tipoEmprendimiento}</small>}
              </div>

              <div>
                <label className="nombreInput">Tipo de económia</label>
                <br></br>
                <select name="tipoEconomia" className="inputDiag" placeholder="Tipo de económia" type= "text" onChange={this.handleChange}>
                        <option disabled selected>Selecciona el tipo de económia</option>
                        <option value="Digital">Digital</option>
                        <option value="Creativo y Cultural">Creativo y cultural</option>
                        <option value="Verde">Verde</option>
                        <option value="Social y Solidario">Social y solidario</option>
                        
                </select> 
                {errors.tipoEconomia && <small class="form-text font-weight-bold text-danger">{errors.tipoEconomia}</small>}
              </div>

              <div>
                <Button className= "buttonDiag" variant="primary" 
                onClick={ e =>{ 
                  if(window.confirm("Esta seguro que desea enviar el diagnostico?")){
                    this.handleClick(e)
                  }
                  }
                }>
                  Enviar diagnóstico </Button>
              </div>               
          </div>
      </div>          
    </div>
    )
  }
}

export default Diagnostico
