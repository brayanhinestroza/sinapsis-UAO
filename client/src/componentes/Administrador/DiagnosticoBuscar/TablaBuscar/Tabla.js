import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
import swal from 'sweetalert2'
import "./Tabla.css"

const cookies =  new Cookies();
export default class Tabla extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: null, 
            loading: true,
        };        
    }

    componentDidMount(){        
        Axios.get("http://localhost:5000/Administrador/Diagnosticos")
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data, loading:false});
            }
        });           
    }

    eliminarDiagnostico = e =>{
        Axios.delete('http://localhost:5000/Administrador/Diagnostico', {
            params:{
                id: e.idUsuario
            }
        })
        .then(res =>{
            if(res.data.affectedRows > 0){
                swal.fire({
                    title:"Eliminación exitosa",
                    icon:"success",
                    iconColor:"#9a66a8",
                    confirmButtonText:"Aceptar",
                    confirmButtonColor:"#9a66a8",
                    showConfirmButton: true
                })
                .then(()=>window.location.href = "/Administrador/Diagnosticos")
            }
        })       
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>              
                <Link className= "buttonTable btn btn-primary" onClick={() => cookies.set("idEmprendedor", data.Cédula)} to={{pathname: "/Administrador/Diagnostico", id: data.Emprendedor }}>Revisar</Link>                
                <Button className= "buttonTableO" class="btn btn-outline-primary" 
                onClick={() =>{ 
                    swal.fire({
                        title:"¿Estás seguro que deseas eliminar el diagnóstico del emprendedor?",
                        icon:"warning",
                        iconColor:"#9a66a8",
                        confirmButtonText:"Eliminar",
                        confirmButtonColor:"#9a66a8",            
                        showConfirmButton: true,
                        showCancelButton:true,
                        cancelButtonText:"Cancelar",
                    })
                    .then(res =>{
                        if(res.isConfirmed){
                            this.eliminarDiagnostico({idUsuario: data.Cédula})
                        }
                    })
                    }
                }>
                    Eliminar</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? 
        <div className="container">
            <Card.Body className="text-center">
                <h3>No hay diagnósticos pendientes</h3>
            </Card.Body>
        </div> 
        :         
        <div className="Contenedor">
            <div className="card" >
                <Card.Body className="card">
                    <h5>Lista de diagnósticos</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
