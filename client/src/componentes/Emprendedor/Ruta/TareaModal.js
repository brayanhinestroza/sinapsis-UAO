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
                <ModalBody>
                    <div>
                    Descripcion lorem ipsidsdsfdfdfds
                    fdfdsfdsfdsfsdfdsfdsfdffdfdsfsdfdsfdsfdsf
                    fdfsdfsdfdsfsdfdsfdsfdsfsfsdfdsfdsfdfdfs
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <h6>Adjunta tu tarea</h6>
                    <input className= "modalT" type="file" />

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
