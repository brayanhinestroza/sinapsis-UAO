import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import './DiagnosticoConsulta.css'
import '../../Registro/Registro.css'
import Navegacion from '../Navegacion/Navegacion'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import ContenedorAsignar from './ContenedorAsignar';


class DiagnosticoConsulta extends Component {
  constructor(props){
    super(props);

    this.state = {
      idEmprendedor : props.location.id,
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
        <div className="body-diagnostico">
          <div>
          <Navbar></Navbar>
          </div>
          
          <div>
            <Navegacion></Navegacion>
          </div>

          <div className="titulopagina">
              <h3>Diagnósticos</h3>
          </div>

          <div className= "contenedorD">

          <div className="contenedorDiag">

              <div className="contenedorIzqD">
                  <div className="Subtitulo">
                  <h5>Información del emprendedor</h5>
                  </div>
                
                  <div>
                    <label className="nombreInput">Nombre completo</label>
                    <br></br>
                    <label className="inputDiag" disabled> {this.state.datos.nombreCompleto} </label> 
                  </div>

                  <div>
                    <label className="nombreInput">Cédula</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled> {this.state.datos.cedula} </label> 
                  </div>
                  
                  <div>
                    <label className="nombreInput">Fecha de nacimiento</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled> {this.state.datos.fechaNacimiento} </label> 
                  </div>

                  <div>
                    <label className="nombreInput">Ciudad</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInput">Dirección</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.direccion}</label>  
                  </div>

                  <div>
                    <label className="nombreInput">Celular</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.celular}</label> 
                  </div>

                  <div>
                    <label className="nombreInput">Género</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.genero}</label> 
                  </div>

                  <div>
                    <label className="nombreInput">Vinculo con la universidad</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInput">Programa</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.programa}</label> 
                  </div>
                  

                  <div className="Subtitulo">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInput">Nombre del emprendimiento</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.nombreIniciativa}</label>  
                  </div>

                  <div>
                    <label className="nombreInput">Descripción del emprendimiento</label>
                    <br></br>
                    <label className="textarea" disabled>{this.state.datos.idea}</label>
                  </div>
                  

              </div>

               <div className="contenedorDerD">

                  <div>
                    <label className="nombreInput">Necesidad o problema que soluciona</label>
                    <br></br>
                    <label className="textarea" disabled>{this.state.datos.necesidad}</label>
                  </div>

                  <div>
                    <label className="nombreInput">Principal cliente o usuario</label>
                    <br></br>
                    <label className="textarea" disabled>{this.state.datos.cliente}</label>
                  </div>

                  <div>
                    <label className="nombreInput">Validaciones que ha realizado</label>
                    <br></br>
                    <label className="textarea" disabled>{this.state.datos.desValidaciones}</label>
                  </div>                
               
                  <div>
                    <label className="nombreInput">Instrumentos que ha utilizado para realizar las validaciones</label>
                    <br></br>
                    <label className="textarea" disabled>{this.state.datos.instrumentoValidacion}</label>
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de emprendimiento</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.tipoEmprendimiento}</label> 
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de económia</label>
                    <br></br>
                    <label className="inputDiag" type= "text" disabled>{this.state.datos.tipoEconomia}</label> 
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
