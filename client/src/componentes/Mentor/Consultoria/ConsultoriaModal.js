import React, { Component } from 'react'
import ModalHeader from "react-bootstrap/ModalHeader";
import {Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import './Consultoria.css'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Cookies from 'universal-cookie'

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
            Axios.post("http://localhost:5000/Mentor/Consultoria",{
                SinError
            })
            .then(res =>{
                if(res.data.affectedRows >0) alert("La consultoría ha sido creada correctamente");
                window.location.href = "/Mentor/Emprendedor"
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
                        onClick={ e =>{ 
                            if(window.confirm("¿Está seguro que desea crear la consultoría?")){
                            this.handleSubmit(e)
                            }
                            }
                        }
                        >Crear</Button>

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
