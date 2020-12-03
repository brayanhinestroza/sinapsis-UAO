import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import Navbar from '../../Navbar/Navbar'
import Navegacion from '../Navegacion/Navegacion'
import './Diagnostico.css'
import '../../Registro/Registro.css'

const cookie = new Cookies();
const validaciones = valores =>{
  const errors = {}
  const {celular,ciudad,file, clienteEmprendimiento, descripcionEmprendimiento, direccion, fechaNacimiento, genero, instrumentosValidacion, 
    necedidadEmprendimiento, nombreEmprendimiento, programa, tipoEconomia, tipoEmprendimiento, validacionesEmprendimiento, vinculoConU} = valores
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
      errors.celular = "Solo se permiten números y máximo 10 dígitos"
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
  if(!validacionesEmprendimiento){
    errors.validacionesEmprendimiento = "Campo Obligatorio"
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
  if(!file){
    errors.archivo = "Campo Obligatorio"
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

  handleClick = e => {
    e.preventDefault()
    const {errors, ...SinError} = this.state
    const result = validaciones(SinError);
    if(Object.keys(result).length){
      this.setState({errors: result})
    }
    else{
      console.log("Entra qui");
      const form = new FormData();
      const {celular,ciudad,file, clienteEmprendimiento, descripcionEmprendimiento, direccion, fechaNacimiento, genero, instrumentosValidacion, 
        necedidadEmprendimiento, nombreEmprendimiento, programa, tipoEconomia, tipoEmprendimiento, validacionesEmprendimiento, vinculoConU} = this.state
        form.append('cedula', this.state.cedula )
        form.append('celular', celular )
        form.append('ciudad', ciudad)
        form.append('file', file)
        form.append('clienteEmprendimiento', clienteEmprendimiento)
        form.append('descripcionEmprendimiento', descripcionEmprendimiento)
        form.append('direccion', direccion)
        form.append('fechaNacimiento', fechaNacimiento)
        form.append('genero', genero )
        form.append('instrumentosValidacion', instrumentosValidacion)
        form.append('necedidadEmprendimiento', necedidadEmprendimiento)
        form.append('nombreEmprendimiento', nombreEmprendimiento)
        form.append('programa', programa)
        form.append('tipoEconomia', tipoEconomia)
        form.append('tipoEmprendimiento', tipoEmprendimiento)
        form.append('validacionesEmprendimiento', validacionesEmprendimiento )
        form.append('vinculoConU', vinculoConU)

      Axios.post("http://localhost:5000/Emprendedor/Diagnostico", form)
      .then(res=> {
        if(res.data.res1.affectedRows == 1 && res.data.res2.affectedRows == 1 ){
          alert("Diagnostico enviado correctamente");
          window.location.href = "/Emprendedor"
        }else{
          alert("Ha ocurrido un error");
        } 
      })
    }
  }

  onFileChange = e =>{
    e.preventDefault();
    if(e.target.files && e.target.files.length >0){
        const file = e.target.files[0]
        this.setState({
            [e.target.name] : file
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

      <form enctype="multipart/form-data" className="contenedorDiag">
          <div className="contenedorIzqD">
              <div className="Subtitulo">
              <h5>Información del emprendedor</h5>
              </div>
            
              <div>
                <label className="nombreInput">Nombre completo</label>
                <br></br>
                <label name="nombreCompleto" className="inputDiag" disabled>{cookie.get("nombreCompleto")}</label> 
              </div>

              <div>
                <label className="nombreInput">Cédula</label>
                <br></br>
                <label name="cedula" className="inputDiag" disabled>{cookie.get("cedula")}</label> 
              </div>
              
              <div>
                <label className="nombreInput">Correo</label>
                <br></br>
                <label name="cedula" className="inputDiag" disabled>{cookie.get("correo")}</label> 
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
                <textarea name="validacionesEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                {errors.validacionesEmprendimiento && <small class="form-text font-weight-bold text-danger">{errors.validacionesEmprendimiento}</small>}
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
              <br></br>
                <h5 className="">Descarga el formato del autodiagnóstico, digiléncialo y súbelo</h5>
                <br/>
                <div>
                  <a className="btn-archivo" href="http://localhost:5000/AutoDiagnosticoSinapsis.xlsm">
                    <img src="http://localhost:5000/download.png" height="150"/>
                  </a>
                </div>
                <br/>
                <hr></hr>
                <h4>Sube tu autodiagnóstico</h4>
                <div className="mt-2">
                  <h6> Diagnóstico:</h6>
                  <input name="file" className="input-fileD" type="file" onChange={this.onFileChange}/>
                  {errors.file && <small class="form-text font-weight-bold text-danger">{errors.file}</small>}
                </div>               
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
      </form>          
    </div>
    )
  }
}

export default Diagnostico
