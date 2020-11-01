import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Diagnostico.css'
import '../../Registro/Registro.css'
import {Button} from 'react-bootstrap';
import Navegacion from '../Navegacion/Navegacion'


function Diagnostico() {
    return (
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
                    <input className="inputDiag" placeholder="Cédula" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Cédula</label>
                    <br></br>
                    <input className="inputDiag" placeholder="Cédula" type= "text"></input> 
                  </div>
                  
                  <div>
                    <label className="nombreInput">Fecha de nacimiento</label>
                    <br></br>
                    <input className="inputDiag" placeholder="Fecha de nacimiento" type= "date"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Ciudad</label>
                    <br></br>
                    <input className="inputDiag" placeholder="Ciudad" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Dirección</label>
                    <br></br>
                    <input className="inputDiag" placeholder="Dirección" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Celular</label>
                    <br></br>
                    <input className="inputDiag" placeholder="Celular" type= "text"></input> 
                  </div>

                  <div>
                    <label className="nombreInput">Género</label>
                    <br></br>
                    <select className="inputDiag" placeholder="Género" type= "text">
                            <option disabled selected>Selecciona un género</option>
                            <option value="volvo">Masculino</option>
                            <option value="saab">Femenimo</option>   
                            <option value="saab">Otro</option>  
                    </select> 
                  </div>

                  <div>
                    <label className="nombreInput">Vinculo con la universidad</label>
                    <br></br>
                    <select className="inputDiag" placeholder="Vinculo con la universidad" type= "text">
                            <option disabled selected>Selecciona un vinculo</option>
                            <option value="volvo">Estudiante</option>
                            <option value="saab">Egresado</option>                               
                    </select> 
                  </div>

                  <div>
                    <label className="nombreInput">Programa</label>
                    <br></br>
                    <select className="inputDiag" placeholder="Programa" type= "text">
                            <option disabled selected>Selecciona tu programa</option>
                            <option value="volvo">Ingenieria Ambiental</option>
                            <option value="saab">Ingenieria Multimedia</option>
                            <option value="fiat">Ingenieria Informatica</option>
                            <option value="audi">Ingenieria Electronica</option>   
                    </select> 
                  </div>
                  

                  <div className="Subtitulo">
                  <h5>Información del emprendimiento</h5>
                  </div>

                  <div>
                    <label className="nombreInput">Nombre del emprendimiento</label>
                    <br></br>
                    <input className="inputlargo" placeholder="Nombre del emprendimeinto" type= "text"></input> 
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
                    <select className="inputDiag" type= "text">
                            <option disabled selected>Selecciona el tipo de emprendimiento</option>
                            <option value="fiat">Dinámico</option>
                            <option value="audi">Alto impacto</option>
                    </select> 
                  </div>

                  <div>
                    <label className="nombreInput">Tipo de económia</label>
                    <br></br>
                    <select className="inputDiag" placeholder="Tipo de económia" type= "text">
                            <option disabled selected>Selecciona el tipo de económia</option>
                            <option value="fiat">Digital</option>
                            <option value="audi">Creativo y cultural</option>
                            <option value="audi">Verde</option>
                            <option value="audi">Social y solidario</option>
                            
                    </select> 
                  </div>

                  <div>
                    <Button className= "buttonDiag" variant="primary"> Enviar diagnóstico </Button>
                  </div>
               
              </div>

          </div>
          
        </div>
    )
}

export default Diagnostico
