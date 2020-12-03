import React, {Component} from 'react'
import { Button, ModalBody, ModalFooter, ModalTitle, Modal } from 'react-bootstrap'
import ModalHeader from "react-bootstrap/ModalHeader";
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert2'
import './VerConsultoria.css'

const cookies = new Cookies();
class VerConsultoria extends Component {

    state={
        datos:null,
        loading:true
    }
    componentDidMount(){
        Axios.get("http://localhost:5000/Mentor/RevisarConsultoria",{params:{idConsultoria: cookies.get("idConsultoria")}})
        .then(res =>{
            this.setState({datos:res.data[0], loading:false});
        })
    }

    revisarConsultoria = e =>{
        const {comentario} = this.state;
        Axios.put("http://localhost:5000/Mentor/RevisarConsultoria",{
            comentario,
            idConsultoria: cookies.get("idConsultoria")
        })
        .then(res =>{
            if(res.data.affectedRows>0){
                swal.fire({
                    title:"Correcto",
                    text:"El comentario de la consultoría ha sido guardado correctamente",
                    icon:"success",
                    iconColor:"#9a66a8",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                })
                .then(()=> window.location.href = "/Mentor/Emprendedor")
            }
        })
    }

    HandleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
    return (
        this.state.loading?<></>
        :
        <div>
            <Modal show={true}>
                <ModalHeader>
                    <ModalTitle>{this.state.datos.nombreConsultoria}</ModalTitle>
                </ModalHeader>
                <ModalBody className= "VerConBody">

                <div>
                    <label className="con-label">Asunto de la Consultoría</label>
                    <br></br>
                    <label name="direccion" className="inputVerCon">{this.state.datos.asuntoConsultoria}</label>                   
                </div>

                <br></br> 

                <div>      
                    <label className="con-label">Fecha de la Consultoría</label>
                    <br></br>
                    <label name="direccion" className="inputVerCon">{this.state.datos.fechaConsultoria}</label>                   
                </div>

                <br></br> 
                
                <div className="con-hora">      
                    <label className="con-label">Hora de inicio</label>
                    
                    <input name="direccion" className="input-hora" disabled placeholder={this.state.datos.horaInicio}></input>    
                    
                    <label className="con-label">Hora de fin</label>
                    
                    <input name="direccion" className="input-hora" disabled placeholder={this.state.datos.horaFin}></input>  
                                   
                </div>

                <br></br> 
                {// solo entran comentarios
                }
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
                            icon:"question",
                            iconColor:"#9a66a8",
                            confirmButtonText:"Aceptar",
                            confirmButtonColor:"#9a66a8",            
                            showConfirmButton: true,
                            showCancelButton:true,
                            cancelButtonText:"Cancelar",
                        })
                        .then(res =>{
                            if(res.isConfirmed){
                                this.revisarConsultoria()
                            }
                        })                        
                    } 
                }
                    >Guardar</Button>

                    <Link className= "buttonTableO" class="btn btn-outline-primary"
                        to="/Mentor/Emprendedor" 
                    >Cancelar</Link>
                </ModalFooter>

                </Modal>

        </div>
    )
    }
}
export default VerConsultoria
