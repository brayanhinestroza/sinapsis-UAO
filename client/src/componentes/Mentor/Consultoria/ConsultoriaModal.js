import React, { Component } from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ModalHeader from "react-bootstrap/ModalHeader";
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert2'
import './Consultoria.css'

const cookies = new Cookies();

const validaciones = valores =>{
    console.log(valores);
    const errors = {}
    const {titulo, fecha, horaI, horaF, asunto} = valores;
    if(!titulo){
        errors.titulo = "Campo Obligatorio"
    }
    if(!fecha){
        errors.fecha = "Campo Obligatorio"
    }
    if(!horaI){
        errors.horaI = "Campo Obligatorio"
    }
    if(!horaF){
        errors.horaF = "Campo Obligatorio"
    }
    if(!asunto){
        errors.asunto = "Campo Obligatorio"
    }
    return errors;
}

class ConsultoriaModal extends Component {
    constructor(){
        super()
        this.state = {
            idEmp: cookies.get("idEmprendedor"),
            idMentor:cookies.get("cedula"),
            errors:{}
        }
    }

    handleClose = () =>{
        window.location.href = "/Mentor/Emprendedor"
    }

    handleChange = e =>{
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {errors, ...SinError} = this.state
        const result = validaciones(SinError);
        
        if(Object.keys(result).length){
            this.setState({errors: result})
        }else{
            swal.fire({
                title:"¿Estás seguro que deseas crear una consultoría?",
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
            Axios.post("http://localhost:5000/Mentor/Consultoria",{
                SinError
            })
            .then(res =>{
                if(res.data.affectedRows >0) {
                    swal.fire({
                        title:"Correcto",
                        text:"La consultoría ha sido creada correctamente",
                        icon:"success",
                        iconColor:"#9a66a8",
                        confirmButtonText:"Aceptar",
                        confirmButtonColor:"#9a66a8",
                        showConfirmButton: true
                    })
                    .then(()=>window.location.href = "/Mentor/Emprendedor")
                }                
            })
        }
    })
        }
    }

    render(){
        const {errors} = this.state
        return (
            <div>
                <Modal show={true} onHide={this.handleClose} >
                    <ModalHeader>
                        <ModalTitle>Crear Consultoria</ModalTitle>
                    </ModalHeader>
                    <ModalBody className="consul-body">
                        <div>
                            <input name="titulo" className="inputR" placeholder="Titulo" type= "text" onChange={this.handleChange}></input> 
                            {errors.titulo && <small class="form-text font-weight-bold text-danger">{errors.titulo}</small>}
                        </div>
                        <br></br>
                        <div>
                            <label for="fechaC">Fecha de consultoria</label><br/>
                            <input id="fechaC" name="fecha" className="inputR" type= "date" onChange={this.handleChange}></input> 
                            {errors.fecha && <small class="form-text font-weight-bold text-danger">{errors.fecha}</small>}
                        </div>
                        <br></br>
                        <div>
                            <label for="horaIC">Hora de inicio</label><br/>
                            <input id="horaIC" name="horaI" className="inputR" type= "time" onChange={this.handleChange}></input> 
                            {errors.horaI && <small class="form-text font-weight-bold text-danger">{errors.horaI}</small>}
                        </div>
                        <br></br>
                        <div>
                            <label for="fechaFC">Hora de fin</label><br/>
                            <input id="fechaFC" name="horaF" className="inputR" type= "time" onChange={this.handleChange}></input> 
                            {errors.horaF && <small class="form-text font-weight-bold text-danger">{errors.horaF}</small>}
                        </div>
                        <br></br>
                        <div>
                            <textarea name="asunto" className="inputR" placeholder="Asunto" onChange={this.handleChange}></textarea> 
                            {errors.asunto && <small class="form-text font-weight-bold text-danger">{errors.asunto}</small>}
                        </div>
                        <br></br>    
                    </ModalBody>

                    <ModalFooter>
                        <Button className= "buttonTable" class="btn btn-outline-primary" 
                        onClick={ e =>{this.handleSubmit(e)}}>Crear</Button>

                        <Link className= "buttonTableO" class="btn btn-outline-primary"
                            to="/Mentor/Emprendedor" 
                        >Cancelar</Link> 
                    </ModalFooter>

                </Modal>

            </div>
        )
    }
}
export default ConsultoriaModal
