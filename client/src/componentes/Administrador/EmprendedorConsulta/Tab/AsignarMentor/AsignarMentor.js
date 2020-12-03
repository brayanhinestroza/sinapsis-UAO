import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
import swal from 'sweetalert2'
import "./AsignarMentor.css"

const cookies =  new Cookies();
export default class TablaMentores extends Component {


    state = {
        datos: null, 
        loading: true,
    };        

    componentDidMount(){        
        Axios.get("http://localhost:5000/Administrador/Mentor",{
            params:{
                idEmp: cookies.get("idEmprendedor")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data, loading:false});
            }
        })           
    }

    asignarMentor = e =>{
        const idEmp = cookies.get("idEmprendedor");
        const idMentor = e.idMentor;
        Axios.post("http://localhost:5000/Administrador/Mentor",{
            idEmp,
            idMentor
        })
        .then(res =>{
            if(res.data.affectedRows>0){
                swal.fire({
                    title:"Se ha asignado correctamente el mentor",
                    icon:"success",
                    iconColor:"#9a66a8",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                })
                .then(()=> window.location.href = "/Administrador/Emprendedor")
            }else{
                swal.fire({
                    title:"Error",
                    text:"El mentor ya ha sido asignado al emprendedor",
                    icon:"error",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                })
            }
        })
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>              
                <Button variant="primary" className="buttonMC" onClick={(e) =>
                {
                    swal.fire({
                        title:"¿Estás seguro que deseas añadir el mentor?",
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
                            this.asignarMentor({idMentor:data.Cédula})
                        }
                    })
                }
                }>Añadir</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? 
        <div>
            <Card.Body className="cardT">
                <h3 className="text-center">No hay datos para mostrar</h3>
            </Card.Body>
        </div> :         
        <div className="ContenedorT">
            <div className="cardT" >
                <Card.Body className="cardT">
                    <h5>Lista de Mentores</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
