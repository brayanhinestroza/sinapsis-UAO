import React, { Component } from 'react'
import {Button, ModalTitle, ModalFooter, ModalBody, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ModalHeader from "react-bootstrap/ModalHeader";
import Cookies from 'universal-cookie'
import Axios from 'axios'
import swal from 'sweetalert2'
import './VerTarea.css'

const cookies = new Cookies();
class VerTarea extends Component {
    state = {
        loading: true,
        show:true
    }

    revisarTarea = e =>{
        const {comentario, calificatarea} = this.state;
        Axios.put("http://localhost:5000/Mentor/RevisarTarea",{
            comentario,
            calificatarea,
            idTarea: cookies.get("idTareaM")
        })
        .then(res =>{
            if(res.data.affectedRows>0){
                swal.fire({
                    title:"Correcto",
                    text:"La tarea fue calificada correctamente",
                    icon:"success",
                    iconColor:"#9a66a8",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                })
                .then(()=> window.location.href = "/Mentor/Emprendedor")
            }else{
                alert("Hubo algún error");
            }
        })
    }

    componentDidMount(){
        Axios.get("http://localhost:5000/Mentor/RevisarTarea",{
            params:{
                idTarea: cookies.get("idTareaM")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                this.setState({archivo:res.data[0].archivoE,loading:false});
            }            
        })
        .then(() =>{
            const {archivo}  = this.state;
            const buffer = Buffer.from(archivo);
            this.setState({URLarchivo : buffer.toString() })
        })
    }

    HandleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

    return (
        this.state.loading ? <></>
        :
        <div>
            <Modal  show={this.state.show}>
                <ModalHeader>
                    <ModalTitle>Nombre tarea</ModalTitle>
                </ModalHeader>
                <ModalBody className= "VerTarBody">

                <div className="tarea-emp">
                    <br></br>
                    <h4>Tarea del emprendedor</h4>
                    <br/>                    
                    
                    <div>
                        <a className="text-center" href={"http://localhost:5000/"+this.state.URLarchivo} target="_blank">
                            <img src="http://localhost:5000/download.png" height="150"/>
                        </a>
                        <br/><br/>
                        <h6 className="">Clic en la imagen para descargar la entrega del Emprendedor</h6>
                    </div>

                </div>

                <div>
                
                <br></br> 
                <h5>Calificar</h5>
                                    
                <label className="nombreInput">Califica la tarea</label>
                <br></br>
                <select name="calificatarea" className="inputVerTarea"  type= "text" onChange={(e)=> this.HandleChange(e)}>
                        <option disabled selected>Califica la tarea</option>
                        <option value="1">Aprobada</option>
                        <option value="0">Reprobada</option> 
                </select> 
                </div>

                <div>      
                    <label className="con-label">Comentarios</label>
                    <br></br>
                    <textarea name="comentario" className="con-comentario" placeholder="Comentarios" type= "text" onChange={(e)=> this.HandleChange(e)}></textarea>                   
                </div>

     
                </ModalBody>

                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" onClick={()=> {
                     swal.fire({
                        title:"¿Estás seguro?",
                        icon:"warning",
                        iconColor:"#9a66a8",
                        confirmButtonText:"Aceptar",
                        confirmButtonColor:"#9a66a8",            
                        showConfirmButton: true,
                        showCancelButton:true,
                        cancelButtonText:"Cancelar",
                    })
                    .then(res =>{
                        if(res.isConfirmed){
                            this.revisarTarea()
                        }
                    })
                }} 
                >Revisar</Button>
                
                <Link className= "buttonTableO" class="btn btn-outline-primary"
                    to="/Mentor/Emprendedor" 
                >Cancelar</Link> 
            </ModalFooter>

        </Modal>

        </div>
    )
    }
}
export default VerTarea
