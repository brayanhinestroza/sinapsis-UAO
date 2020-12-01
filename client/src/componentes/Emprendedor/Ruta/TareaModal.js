import React from 'react'
import { Link } from 'react-router-dom';
import ModalHeader from "react-bootstrap/ModalHeader";
import { Modal, ModalBody, ModalFooter,ModalTitle, Button } from 'react-bootstrap'
import './TareaModal.css'


function TareaModal() {
    return (
        <div>
            <Modal show={true}>
                <ModalHeader>
                    <ModalTitle>Tarea Nombre</ModalTitle>
                </ModalHeader>
                <ModalBody className="VerTarBody">
                    
                    <div>
                    <label className="crearTa-label">Descripción</label><br/>  
                     <textarea name="desT" className="des-tarea" placeholder="Descripción" type= "text" ></textarea>                                 
                    </div>
                    
                    <div>
                                     
                      <h6>Archivo de la tarea</h6>  
                      <div>aqui va el archivo</div>
                    </div>
                    

                    
                    <div>
                    <br></br>
                    <h6 className= "fileT-label">Sube tu tarea</h6>
                    <input className= "fileT" type="file" />

                    </div>

                    <div>
                    <br></br>
                    <h6>Retroalimentación (cuando sea revisada)</h6>
                    <label className="crearTa-label">Comentarios </label><br/>  
                     <textarea name="desT" className="des-tarea" placeholder="No hay comentarios" type= "text" ></textarea>  
                    </div>

                </ModalBody>
                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" 
                    >Entregar</Button>

                    <Link className= "buttonTableO btn btn-outline-primary" 
                    to="/Emprendedor/Ruta">Cancelar</Link> 
                </ModalFooter>
                </Modal>
        </div>
    )
}
export default TareaModal
