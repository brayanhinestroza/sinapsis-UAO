import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button } from 'react-bootstrap'
import './TareaModal.css'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Axios from 'axios';


const cookies = new Cookies();
// eslint-disable-next-line
const validaciones = valores =>{
    console.log(valores);
    const errors = {}
    // eslint-disable-next-line
    const {titulo, fechaTarea, horaI, horaF, asunto} = valores;
    if(!titulo){
        errors.titulo = "Campo Obligatorio"
    }
    return errors;
}
class TareaModal extends Component {
    state = {
        idEmp: cookies.get("idEmprendedor"),
        idMentor: cookies.get("cedula"),
        loading: true,
        errors:{}
    }    

    componentDidMount(){
        this.consultarEtapas();
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
        this.setState({
            [e.target.name] : e.target.files[0]
        });
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
            // eslint-disable-next-line
            if(res.data.affectedRows == 1){
                alert("Tarea creada correctamente");
                this.handleClose()
            }
        })
    }

    consultarEtapas(){
        Axios.get("http://localhost:5000/Etapas")
        .then(res => {
            return this.setState({etapas: res.data, loading:false});
        });
    }

    render(){
        const {errors} = this.state
        return (
        this.state.loading ? <></>
        :
        <div>
            <Modal  show={true} onHide={this.handleClose} >
                <ModalHeader>
                    <ModalTitle>Crear tarea</ModalTitle>
                </ModalHeader>
                <ModalBody className="crear-tarea">
                    <form enctype="multipart/form-data">
                    <div>
                        <input name="nombreT" className="input-tarea" placeholder="Nombre tarea" type= "text" onChange={this.handleChange}></input> 
                            {errors.nombreT && <small class="form-text font-weight-bold text-danger">{errors.nombreT}</small>}
                        </div>
                        <br></br>
                        <div>
                            <textarea name="desT" className="des-tarea" placeholder="Descripción" type= "text" onChange={this.handleChange}></textarea> 
                            {errors.desT && <small class="form-text font-weight-bold text-danger">{errors.desT}</small>}
                        </div>             
                        <div>
                        <br></br>
                        <label className="crearTa-label">Etapa de la tarea</label><br/>
                        <select name="etapa" className="input-tarea" type= "text" onChange={this.handleChange}>
                            <option className="input-tarea" value="-1" disabled selected>Seleccione una etapa</option>
                            {                       
                                this.state.etapas.map(v => (
                                <option className="inputDiagDC" value={v.idetapa}>{v.etapa}</option>))
                            } 
                        </select>
                        {errors.etapa && <small class="form-text font-weight-bold text-danger">{errors.etapa}</small>}
                        </div>                     
                        <div>
                        <br></br>
                            <label className="crearTa-label">Fecha de entrega</label><br/>
                            <input name="fechaTarea" className="input-tarea" placeholder="Fecha de entrega" type="datetime-local" onChange={this.handleChange}></input> 
                            {errors.fechaTarea && <small class="form-text font-weight-bold text-danger">{errors.fechaTarea}</small>}
                        </div>
                        <div>
                        <br></br>
                            <h6>Adjunta un archivo</h6>
                            <input name="file" className= "modalT" type="file" onChange={this.onFileChange}/>                            
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button className= "buttonTable" class="btn btn-outline-primary" 
                    onClick={ e =>{ 
                            if(window.confirm("Esta seguro que desea asignar la tarea?")){
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
