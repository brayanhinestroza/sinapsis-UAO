import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "./TablaTareas.css"
import { Link } from 'react-router-dom'

const cookies =  new Cookies();
export default class Tabla extends Component {
    state = {
        datos: null, 
        loading: true,
    };        

    componentDidMount(){        
        Axios.get("http://localhost:5000/Mentor/Tarea",{
            params:{
                idEmprendedor: cookies.get("idEmprendedor")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data, loading:false});
            }
        })           
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>  
                <Link onClick={() => cookies.set("idTareaM",data.Numero)} to="/Mentor/Emprendedor/RevisarTarea" className="buttonMC btn btn-primary">Revisar</Link>            
              </div>
            }
        }]

        return (
        this.state.loading ? 
        <div>
            <Card.Body className="cardT">
                <h3 className="text-center">No hay datos para mostrar</h3>
            </Card.Body>
        </div> 
        :         
        <div className="ContenedorT">
            <div className="cardT" >
                <Card.Body className="cardT">
                    <h5>Lista de Tareas</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
