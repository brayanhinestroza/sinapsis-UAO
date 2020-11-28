import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Card, Button } from 'react-bootstrap'
import './TareaModal.css'

function TareaModal() {
    return (
        <div>
            <Modal show={true}>
                <ModalHeader>
                    <ModalTitle>Crear tarea</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div>
                    <input name="nombreT" className="inputR" placeholder="Nombre tarea" type= "text" ></input> 
                    </div>
                    <br></br>
                    <div>
                    <input name="desT" className="inputR" placeholder="Descripción" type= "text" ></input> 
                    </div>
                    <br></br>
                    <select name="etapa" className="inputDiag" type= "text" >
                    <option className="inputDiag" value="-1" disabled selected>Seleccione una...</option>
                    <option className="inputDiag" value="1">Soñar</option> 
                    <option className="inputDiag" value="2">Pensar</option> 
                    <option className="inputDiag" value="3">Testear</option> 
                    <option className="inputDiag" value="4">Arrancar</option>   
                </select>
                <br></br>
                    <input name="fechaNacimiento" className="inputDiag" placeholder="Fecha de entrega" type= "date" ></input> 
                    <div>

                    <h6>Adjunta un archivo</h6>
                    <input className= "modalT" type="file" />
                    </div>             

        
                </ModalBody>

                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" 
                    >Crear</Button>

                    <Button className= "buttonTableO" class="btn btn-outline-primary" 
                    >Cancelar</Button> 
                </ModalFooter>

                </Modal>

        </div>
    )
}
export default TareaModal
