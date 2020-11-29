import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Card, Button } from 'react-bootstrap'
import './TareaModal.css'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Axios from 'axios';


const cookies = new Cookies();
const validaciones = valores =>{
    console.log(valores);
    const errors = {}
    const {titulo, fechaTarea, horaI, horaF, asunto} = valores;
    if(!titulo){
        errors.titulo = "Campo Obligatorio"
    }
    return errors;
}
class TareaModal extends Component {
    constructor(){
        super()
        this.state = {
            idEmp: cookies.get("idEmprendedor"),
            idMentor: cookies.get("cedula"),
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

    onFileChange = e =>{
        e.preventDefault();
        if(e.target.files && e.target.files.length >0){
            const file = e.target.files[0]
            this.setState({
                [e.target.name] : file
            })
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {etapa, desT, fechaTarea, file, idEmp, idMentor, nombreT} = this.state
        const form =  new FormData()
        form.append('nombreT', nombreT )
        form.append('etapa', etapa)
        form.append('desT', desT)
        form.append('fechaTarea', fechaTarea)
        form.append('file', file)
        form.append('idEmp', idEmp)
        form.append('idMentor', idMentor)

        Axios.post("http://localhost:5000/mentor/Tarea", form)
        .then(res =>{
            console.log(res);
        })
    }

    render(){
        const {errors} = this.state
        return (
            <div>
                <Modal show={true} onHide={this.handleClose} >
                    <ModalHeader>
                        <ModalTitle>Crear tarea</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form enctype="multipart/form-data">
                        <div>
                            <input name="nombreT" className="inputR" placeholder="Nombre tarea" type= "text" onChange={this.handleChange}></input> 
                                {errors.nombreT && <small class="form-text font-weight-bold text-danger">{errors.nombreT}</small>}
                            </div>
                            <br></br>
                            <div>
                                <input name="desT" className="inputR" placeholder="Descripción" type= "text" onChange={this.handleChange}></input> 
                                {errors.desT && <small class="form-text font-weight-bold text-danger">{errors.desT}</small>}
                            </div>
                            <br></br>
                            <label>Etapa de la tarea</label><br/>
                            <select name="etapa" className="inputDiag" type= "text" onChange={this.handleChange}>
                                <option className="inputDiag" value="-1" disabled selected>Seleccione una...</option>
                                <option className="inputDiag" value="1">Soñar</option> 
                                <option className="inputDiag" value="2">Pensar</option> 
                                <option className="inputDiag" value="3">Testear</option> 
                                <option className="inputDiag" value="4">Arrancar</option>   
                            </select>
                            {errors.etapa && <small class="form-text font-weight-bold text-danger">{errors.etapa}</small>}
                        <br></br>
                            <div>
                                <label>Fecha de Tarea</label><br/>
                                <input name="fechaTarea" className="inputDiag" placeholder="Fecha de entrega" type="datetime-local" onChange={this.handleChange}></input> 
                                {errors.fechaTarea && <small class="form-text font-weight-bold text-danger">{errors.fechaTarea}</small>}
                            </div>
                            <div>
                                <h6>Adjunta un archivo</h6>
                                <input name="file" className= "modalT" type="file" onChange={this.onFileChange}/>                            
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                    <Button className= "buttonTable" class="btn btn-outline-primary" 
                        onClick={ e =>{ 
                                if(window.confirm("Esta seguro que desea crear la consultoria?")){
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
export default TareaModal
