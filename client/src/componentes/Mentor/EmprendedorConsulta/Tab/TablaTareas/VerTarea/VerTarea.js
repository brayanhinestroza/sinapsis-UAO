import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Card, Button } from 'react-bootstrap'
import './VerTarea.css'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import { Link } from 'react-router-dom';

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
                alert("Tarea calificada correctamente");
                window.location.href = "/Mentor/Emprendedor"
            }else{
                alert("Hubo algun error");
            }
        })
    }

    componentDidMount(){
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
                        <option value="aprobada">Aprobada</option>
                        <option value="reprobada">Reprobada</option> 
                </select> 
                </div>

                <div>      
                    <label className="con-label">Comentarios</label>
                    <br></br>
                    <textarea name="comentario" className="con-comentario" placeholder="Comentarios" type= "text" onChange={(e)=> this.HandleChange(e)}></textarea>                   
                </div>

     
                </ModalBody>

                <ModalFooter>
                 <Button className= "buttonTable" class="btn btn-outline-primary" onClick={()=> this.revisarTarea()} 
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
