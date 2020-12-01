import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Card, Button } from 'react-bootstrap'
import './VerConsultoria.css'

function VerConsultoria() {
    return (
        <div>
            <Modal  show={true}>
                <ModalHeader>
                    <ModalTitle>Nombre consultoria</ModalTitle>
                </ModalHeader>
                <ModalBody className= "VerConBody">

                <div>
                    <label className="con-label">Asunto</label>
                    <br></br>
                    <input name="direccion" className="inputVerCon" placeholder="Asunto" type= "text" ></input>                   
                </div>

                <br></br> 

                <div>      
                    <label className="con-label">Fecha</label>
                    <br></br>
                    <input name="direccion" className="inputVerCon" placeholder="Fecha" type= "text" ></input>                   
                </div>

                <br></br> 
                
                <div className="con-hora">      
                    <label className="con-label">Hora de inicio</label>
                    
                    <input name="direccion" className="input-hora" placeholder="Hora" type= "text" ></input>    
                    
                    <label className="con-label">Hora de fin</label>
                    
                    <input name="direccion" className="input-hora" placeholder="Hora" type= "text" ></input>  
                                   
                </div>

                <br></br> 

                <div>      
                    <label className="con-label">Comentarios</label>
                    <br></br>
                    <textarea name="direccion" className="con-comentario" placeholder="Comentarios" type= "text" ></textarea>                   
                </div>

     
                </ModalBody>

                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" 
                    >Guardar</Button>

                    <Button className= "buttonTableO" class="btn btn-outline-primary" 
                    >Cancelar</Button> 
                </ModalFooter>

                </Modal>

        </div>
    )
}
export default VerConsultoria
