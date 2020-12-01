import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Card, Button } from 'react-bootstrap'
import './VerTarea.css'

function VerTarea() {
    return (
        <div>
            <Modal  show={true}>
                <ModalHeader>
                    <ModalTitle>Nombre tarea</ModalTitle>
                </ModalHeader>
                <ModalBody className= "VerTarBody">

                <div className="tarea-emp">

                    <h5>Tarea del emprendedor</h5>
                    <br></br> 

                    <div>
                       Aqui va el archivo 
                    </div>

                </div>

                <div>
                
                <br></br> 
                <h5>Calificar</h5>
                                    
                <label className="nombreInput">Califica la tarea</label>
                <br></br>
                <select name="calificatarea" className="inputVerTarea"  type= "text" >
                        <option disabled selected>Califica la tarea</option>
                        <option value="aprobada">Aprobada</option>
                        <option value="reprobada">Reprobada</option> 
                </select> 
                </div>

                <div>      
                    <label className="con-label">Comentarios</label>
                    <br></br>
                    <textarea name="direccion" className="con-comentario" placeholder="Comentarios" type= "text" ></textarea>                   
                </div>

     
                </ModalBody>

                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" 
                    >Revisar</Button>

                    <Button className= "buttonTableO" class="btn btn-outline-primary" 
                    >Cancelar</Button> 
                </ModalFooter>

                </Modal>

        </div>
    )
}
export default VerTarea
