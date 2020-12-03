import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ModalHeader from "react-bootstrap/ModalHeader";
import { Modal, ModalBody, ModalFooter,ModalTitle, Button } from 'react-bootstrap'
import './TareaModal.css'
import Cookies from 'universal-cookie'
import Axios from 'axios'


const cookies = new Cookies();
class TareaModal extends Component {
    state={URLarchivo:"#"}

    /*componentDidMount(){
        Axios.get("http://localhost:5000/Mentor//RevisarTarea",{
            params:{
                idTarea: cookies.get("idTareaM")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                this.setState({archivo:res.data[0].archivoM,loading:false});
            }            
        })
        .then(() =>{
            const {archivo}  = this.state;
            const buffer = Buffer.from(archivo);
            this.setState({URLarchivo : buffer.toString() })
        })
    }*/
    
render(){
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
                      <br/>  
                      <div>
                        <a className="text-center" href={"http://localhost:5000/" +this.state.URLarchivo} target="_blank">
                            <img src="http://localhost:5000/download.png" height="150"/>
                        </a>
                        <br/>                       
                    </div>
                    </div>
                    

                    
                    <div>
                    <br></br>
                    <h6 className= "fileT-label">Sube tu tarea</h6>
                    <input name="file" className= "fileT" type="file" />

                    </div>

                    <div>
                    <br></br>
                    <h6>Retroalimentación (cuando sea revisada)</h6>
                    <label className="crearTa-label">Comentarios </label><br/>  
                     <textarea name="desT" className="des-tarea" placeholder="No hay comentarios" type= "text" disabled></textarea>  
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
}
export default TareaModal
