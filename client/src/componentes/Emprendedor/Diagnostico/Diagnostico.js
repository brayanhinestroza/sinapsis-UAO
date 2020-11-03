import React, {Component} from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Diagnostico.css'
import '../../Registro/Registro.css'
import {Button, Modal} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import Navegacion from '../Navegacion/Navegacion'
import Axios from 'axios'


class Diagnostico extends Component {

  constructor(props){
    super(props)
    this.state = {
      serverMessage: null,
      showModal: false,
      diagnosticoEnviado: false,
      redireccionar: false
      
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleClick = e => {
    Axios.post("http://localhost:5000/Emprendedor/Diagnostico", this.state)
    .then((respuesta) => {
      if(respuesta.data.message === "Correcto"){
        this.setState({diagnosticoEnviado: true});
      }
      console.log(respuesta.data.message);
    })
    .catch((err) => console.log(err))
  }

  handleClose = () => this.setState({showModal:false})
  handleCloseModal = () => this.setState({redirecionar:true, diagnosticoEnviado:false})

  render(){
    return (
    this.state.redireccionar ? <Redirect to="/Emprendedor"/>
    :
    this.state.diagnosticoEnviado ? (
      <>
      <Modal centered show={this.state.diagnosticoEnviado} onHide={this.handleCloseModal}>
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
      </>
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
        <div className="body-diagnostico">
          <Navbar></Navbar>
          <Navegacion></Navegacion>
          <div className="t">
          <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          </div>

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
                    <input name="nombreCompleto" className="inputDiag" placeholder="Nombre Completo" type= "text" onChange={this.handleChange}></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Cédula</label>
                    <br></br>
                    <input name="cedula" className="inputDiag" placeholder="Cédula" type= "text" onChange={this.handleChange}></input> 
                  </div>
                  
                  <div>
                    <label className="nombreInput">Fecha de nacimiento</label>
                    <br></br>
                    <input name="fechaNacimiento" className="inputDiag" placeholder="Fecha de nacimiento" type= "date" onChange={this.handleChange}></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Ciudad</label>
                    <br></br>
                    <input name="ciudad" className="inputDiag" placeholder="Ciudad" type= "text" onChange={this.handleChange}></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Dirección</label>
                    <br></br>
                    <input name="direccion" className="inputDiag" placeholder="Dirección" type= "text" onChange={this.handleChange}></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Celular</label>
                    <br></br>
                    <input name="celular" className="inputDiag" placeholder="Celular" type= "text" onChange={this.handleChange}></input> 
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
                  </div>

                  <div>
                    <label className="nombreInput">Vinculo con la universidad</label>
                    <br></br>
                    <select name="vinculoConU" className="inputDiag" placeholder="Vinculo con la universidad" type= "text" onChange={this.handleChange}>
                            <option disabled selected>Selecciona un vinculo</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Egresado">Egresado</option>                               
                    </select> 
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
                  </div>
                  

                  <div className="Subtitulo">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInput">Nombre del emprendimiento</label>
                    <br></br>
                    <input name="nombreEmprendimiento" className="inputlargo" placeholder="Nombre del emprendimeinto" type= "text" onChange={this.handleChange}></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Descripción del emprendimiento</label>
                    <br></br>
                    <textarea name="descripcionEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                  </div>
                  

              </div>

               <div className="contenedorDerD">

                  <div>
                    <label className="nombreInput">Necesidad o problema que soluciona</label>
                    <br></br>
                    <textarea name="necedidadEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Principal cliente o usuario</label>
                    <br></br>
                    <textarea name="clienteEmprendimiento" className="textarea" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Validaciones que ha realizado</label>
                    <br></br>
                    <textarea name="validacionesEmprendimeinto" className="textarea" onChange={this.handleChange}></textarea>
                  </div>                
               
                  <div>
                    <label className="nombreInput">Instrumentos que ha utilizado para realizar las validaciones</label>
                    <br></br>
                    <textarea name="instrumentosValidacion" className="textarea" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de emprendimiento</label>
                    <br></br>
                    <select name="tipoEmprendimiento" className="inputDiag" type= "text" onChange={this.handleChange}>
                            <option disabled selected>Selecciona el tipo de emprendimiento</option>
                            <option value="Dinamico">Dinámico</option>
                            <option value="Alto Impacto">Alto impacto</option>
                    </select> 
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
                  </div>

                  <div>
                    <Button className= "buttonDiag" variant="primary" onClick={this.handleClick}> Enviar diagnóstico </Button>
                  </div>               
              </div>
          </div>          
        </div>
    )
  }
}

export default Diagnostico
