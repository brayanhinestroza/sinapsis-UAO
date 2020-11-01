import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './DiagnosticoConsulta.css'
import '../../Registro/Registro.css'
import {Button} from 'react-bootstrap';
import Navegacion from '../Navegacion/Navegacion'


function Diagnostico() {
    return (
        <div className="body-diagnostico">
          <div>
          <Navbar></Navbar>
          </div>
          
          <div>
            <Navegacion></Navegacion>
          </div>
          

          <div className="crumb" >
          <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
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
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Cédula</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>
                  
                  <div>
                    <label className="nombreInput">Fecha de nacimiento</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Ciudad</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Dirección</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input>  
                  </div>

                  <div>
                    <label className="nombreInput">Celular</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Género</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Vinculo con la universidad</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Programa</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>
                  

                  <div className="Subtitulo">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInput">Nombre del emprendimiento</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input>  
                  </div>

                  <div>
                    <label className="nombreInput">Descripción del emprendimiento</label>
                    <br></br>
                    <textarea className="textarea"></textarea>
                  </div>
                  

              </div>

               <div className="contenedorDerD">

                  <div>
                    <label className="nombreInput">Necesidad o problema que soluciona</label>
                    <br></br>
                    <textarea className="textarea"></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Principal cliente o usuario</label>
                    <br></br>
                    <textarea className="textarea"></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Validaciones que ha realizado</label>
                    <br></br>
                    <textarea className="textarea"></textarea>
                  </div>                
               
                  <div>
                    <label className="nombreInput">Instrumentos que ha utilizado para realizar las validaciones</label>
                    <br></br>
                    <textarea className="textarea"></textarea>
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de emprendimiento</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de económia</label>
                    <br></br>
                    <input className="inputDiag" type= "text"></input> 
                  </div>
                
              </div>

          </div>

          <div className="contenedorAsignar">

            <div className="Subtitulo-asignar">
                  <h5>Asignar etapa inicial y mentor principal</h5>
            </div>

            <div>
                    <label className="nombreInput">Etapa inicial</label>
                    <br></br>
                    <select className="inputDiag" type= "text"></select> 
            </div>

            <div>
                    <label className="nombreInput">Mentor principal</label>
                    <br></br>
                    <select className="inputDiag" type= "text"></select> 
            </div>

            
            <div>
                    <Button className= "buttonDiag" variant="primary">Asignar</Button>
            </div>

          </div>


          </div>

          
          
        </div>
    )
}

export default Diagnostico
