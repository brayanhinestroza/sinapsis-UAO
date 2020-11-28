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

                    <Button className= "buttonTableO" class="btn btn-outline-primary" 
                    >Cancelar</Button> 
                </ModalFooter>

                </Modal>

        </div>
    )
}
export default TareaModal
