import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import './DiagnosticoConsulta.css'
import '../../Registro/Registro.css'
import Navegacion from '../Navegacion/Navegacion'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import ContenedorAsignar from './ContenedorAsignar';
import Cookies from 'universal-cookie'

const cookies =  new Cookies();


class DiagnosticoConsulta extends Component {
  constructor(props){
    super(props);
    this.state = {
      idEmprendedor : cookies.get("idEmprendedor"),
      loading: true,
      datos: null,
      diagnosticoRealizado:false
    }    
  }

  componentDidMount(){
    const URL = "http://localhost:5000/Administrador/Diagnostico"
    Axios.get(URL,{
      params: {
        idEmprendedor: this.state.idEmprendedor
      }
    })
    .then((response) =>{
      this.setState({datos:response.data[0], loading:false});
    });
  }

  render(){
    return (
      this.state.diagnosticoRealizado ? <Redirect to="/Administrador/Diagnosticos"/>
      :
      this.state.loading ? 
      <div>Cargando</div>
      :
        <div className="body-diagnosticoDC">
          <div>
          <Navbar></Navbar>
          </div>
          
          <div>
            <Navegacion></Navegacion>
          </div>

          <div className="titulopaginaDC">
              <h3>Diagnósticos</h3>
          </div>

          <div className= "contenedorDDC">

          <div className="contenedorDiagDC">

              <div className="contenedorIzqDDC">
                  <div className="SubtituloDC">
                  <h5>Información del emprendedor</h5>
                  </div>
                
                  <div>
                    <label className="nombreInputDC">Nombre completo</label>
                    <br></br>
                    <label className="inputDiagDC" disabled> {this.state.datos.nombreCompleto} </label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Cédula</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled> {this.state.datos.cedula} </label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Correo</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled> {this.state.datos.correo} </label> 
                  </div>
                  
                  <div>
                    <label className="nombreInputDC">Fecha de nacimiento</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled> {this.state.datos.fechaNacimiento} </label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Ciudad</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.ciudad}</label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Dirección</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.direccion}</label>  
                  </div>

                  <div>
                    <label className="nombreInputDC">Celular</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.celular}</label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Género</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.genero}</label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Vinculo con la universidad</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.vinculoConU}</label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Programa</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.programa}</label> 
                  </div>
                  

                  <div className="SubtituloDC">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInputDC">Nombre del emprendimiento</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.nombreIniciativa}</label>  
                  </div>

                  <div>
                    <label className="nombreInputDC">Descripción del emprendimiento</label>
                    <br></br>
                    <label className="textareaDC" disabled>{this.state.datos.idea}</label>
                  </div>
                  

              </div>

               <div className="contenedorDerDDC">

                  <div>
                    <label className="nombreInputDC">Necesidad o problema que soluciona</label>
                    <br></br>
                    <label className="textareaDC" disabled>{this.state.datos.necesidad}</label>
                  </div>

                  <div>
                    <label className="nombreInputDC">Principal cliente o usuario</label>
                    <br></br>
                    <label className="textareaDC" disabled>{this.state.datos.cliente}</label>
                  </div>

                  <div>
                    <label className="nombreInputDC">Validaciones que ha realizado</label>
                    <br></br>
                    <label className="textareaDC" disabled>{this.state.datos.desValidaciones}</label>
                  </div>                
               
                  <div>
                    <label className="nombreInputDC">Instrumentos que ha utilizado para realizar las validaciones</label>
                    <br></br>
                    <label className="textareaDC" disabled>{this.state.datos.instrumentoValidacion}</label>
                  </div>

                  <div>
                    <label className="nombreInputDC">Tipo de emprendimiento</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.tipoEmprendimiento}</label> 
                  </div>

                  <div>
                    <label className="nombreInputDC">Tipo de económia</label>
                    <br></br>
                    <label className="inputDiagDC" type= "text" disabled>{this.state.datos.tipoEconomia}</label> 
                  </div>                  
              </div>                
          </div>
          <ContenedorAsignar emprendedor={this.state.idEmprendedor}/>
          </div>
        </div>
    )
  }
}

export default DiagnosticoConsulta
