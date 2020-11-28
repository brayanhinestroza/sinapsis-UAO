import React, { Component } from 'react'

import './DiagnosticoConsultaTab.css'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'

const cookies =  new Cookies();


class DiagnosticoConsultaTab extends Component {

  render(){
    return (
  
          <div className= "contenedorDDCT">

          <div className="contenedorDiagDCT">

              <div className="contenedorIzqDDCT">
                  <div className="SubtituloDCT">
                  <h5>Información del emprendedor</h5>
                  </div>
                
                  <div>
                    <label className="nombreInputDCT">Nombre completo</label>
                    <br></br>
                    <label className="inputDiagDCT" disabled>  </label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Cédula</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled>  </label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Correo</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>
                  
                  <div>
                    <label className="nombreInputDCT">Fecha de nacimiento</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled> </label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Ciudad</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Dirección</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label>  
                  </div>

                  <div>
                    <label className="nombreInputDCT">Celular</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Género</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Vinculo con la universidad</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Programa</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>
                  

                  <div className="SubtituloDCT">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInputDCT">Nombre del emprendimiento</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label>  
                  </div>

                  <div>
                    <label className="nombreInputDCT">Descripción del emprendimiento</label>
                    <br></br>
                    <label className="textareaDCT" disabled></label>
                  </div>
                  

              </div>

               <div className="contenedorDerDDCT">

                  <div>
                    <label className="nombreInputDCT">Necesidad o problema que soluciona</label>
                    <br></br>
                    <label className="textareaDCT" disabled></label>
                  </div>

                  <div>
                    <label className="nombreInputDCT">Principal cliente o usuario</label>
                    <br></br>
                    <label className="textareaDCT" disabled></label>
                  </div>

                  <div>
                    <label className="nombreInputDCT">Validaciones que ha realizado</label>
                    <br></br>
                    <label className="textareaDCT" disabled></label>
                  </div>                
               
                  <div>
                    <label className="nombreInputDCT">Instrumentos que ha utilizado para realizar las validaciones</label>
                    <br></br>
                    <label className="textareaDCT" disabled></label>
                  </div>

                  <div>
                    <label className="nombreInputDCT">Tipo de emprendimiento</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>

                  <div>
                    <label className="nombreInputDCT">Tipo de económia</label>
                    <br></br>
                    <label className="inputDiagDCT" type= "text" disabled></label> 
                  </div>                  
              </div>                
          </div>
         
          </div>
       
    )
  }
}

export default DiagnosticoConsultaTab
