import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter,ModalTitle, Button } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Axios from 'axios';
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
            console.log("object");
            console.log(this.state.datos);
            //const {archivoM}  = this.state.datos;
            //const buffer = Buffer.from(archivoM);
            this.setState({/*URLarchivo : buffer.toString(),*/ loading:false })
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
        window.location.href = "/Emprendedor/Ruta"
    }

    entregarTarea = e =>{
        e.preventDefault();
        console.log(this.state);
        const {archivoE} = this.state;
        const form =  new FormData();
        form.append('file', archivoE );
        form.append('idTarea', cookies.get("idTarea"));

        Axios.put("http://localhost:5000/emprendedor/Tareas", form)
        .then(res =>{
            // eslint-disable-next-line
            if(res.data.affectedRows == 1){
                alert("Su tarea fue enviada correctamente");                
            }
        })
        .then(()=> cookies.remove("idTarea",{path: '/Emprendedor'}))
        .then(()=> this.handleClose())        
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
                    onClick={(e) => {this.entregarTarea(e)}}>
                        Entregar
                    </button>
                    <Link className= "buttonTableO btn btn-outline-primary" 
                    to="/Emprendedor/Ruta">Cancelar</Link> 
                </ModalFooter>
                </Modal>
        </div>
    )
    }
}
export default TareaModal
