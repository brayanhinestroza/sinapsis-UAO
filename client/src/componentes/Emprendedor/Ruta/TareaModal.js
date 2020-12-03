import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter,ModalTitle, Button } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import swal from 'sweetalert2'
import './TareaModal.css';

const cookies = new Cookies();
class TareaModal extends Component {
    state={
        datos: null,
        loading: true
    }
    
    componentDidMount(){
        Axios.get("http://localhost:5000/Mentor/RevisarTarea",{
            params:{
                idTarea: cookies.get("idTarea")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data[0]});
            }            
        })
        .then(() =>{
            console.log(this.state.datos);
            const {archivoM}  = this.state.datos;
            const buffer = Buffer.from(archivoM);
            this.setState({URLarchivo : buffer.toString(), loading:false })
        })
    }

    onFileChange = e =>{
        e.preventDefault();
        console.log(e.target.files);
        this.setState({
            archivoE : e.target.files[0]
        });
    }

    handleClose = () =>{
        cookies.remove("idTarea",{path:"/Emprendedor"});
        window.location.href = "/Emprendedor/Ruta"
    }

    entregarTarea = e =>{
        e.preventDefault();
        const {archivoE} = this.state;
        const form =  new FormData();
        form.append('file', archivoE );
        form.append('idTarea', cookies.get("idTarea"));

        Axios.put("http://localhost:5000/emprendedor/Tareas", form)
        .then(res =>{
            // eslint-disable-next-line
            if(res.data.affectedRows == 1){
                swal.fire({
                    title:"Envío exitoso",
                    icon:"success",
                    iconColor:"#9a66a8",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                }) 
                .then(()=> cookies.remove("idTarea",{path: '/Emprendedor'}))
                .then(()=> this.handleClose())             
            }
        })
               
    }
    
render(){
    return (
        this.state.loading?<></>
        :
        <div>
            <Modal show={true}>
                <ModalHeader>
                    <ModalTitle>{this.state.datos.nombreTarea}</ModalTitle>
                </ModalHeader>
                <ModalBody className="VerTarBody">
                    
                    <div>
                    <label className="crearTa-label">Descripción</label><br/>  
                     <label name="desT" className="des-tarea"> {this.state.datos.descripcionTarea} </label>                                 
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
                    <input name="file" className= "fileT" type="file" onChange={this.onFileChange} disabled={this.state.datos.entregada}/>

                    </div>

                    <div>
                    <br></br>
                    <h6>Retroalimentación (cuando sea revisada)</h6>
                    <label className="crearTa-label">Comentarios </label><br/>  
                     <label name="desT" className="des-tarea" > {this.state.datos.comentario} </label>  
                    </div>

                </ModalBody>
                <ModalFooter>
                 <button className= "buttonTable" class="btn btn-primary" disabled={this.state.datos.entregada} 
                    onClick={(e) => {
                        swal.fire({
                            title:"¿Estás seguro que deseas enviar la tarea?",
                            icon:"question",
                            iconColor:"#9a66a8",
                            confirmButtonText:"Enviar",
                            confirmButtonColor:"#9a66a8",            
                            showConfirmButton: true,
                            showCancelButton:true,
                            cancelButtonText:"Cancelar",
                        })
                        .then(res =>{
                            if(res.isConfirmed){
                                this.entregarTarea(e);
                            }
                        })
                        }}>
                        Entregar
                    </button>
                    <Button className= "buttonTableO btn btn-outline-primary" onClick={this.handleClose}>Cancelar</Button> 
                </ModalFooter>
                </Modal>
        </div>
    )
    }
}
export default TareaModal
