import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "./TablaABuscar.css"

const cookies =  new Cookies();
export default class TablaMBuscar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: null, 
            loading: true,
        };        
    }

    componentDidMount(){        
        Axios.get("http://localhost:5000/Administrador/Emprendedores")
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data, loading:false});
            }
        })           
    }

    consultarEmprendedor = e =>{
        cookies.set("idEmprendedor" , e.idUsuario);
        window.location.href = "/Administrador/Emprendedor";             
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>              
                <Button className= "buttonTableO" class="btn btn-outline-primary" 
                onClick={() =>{
                    this.consultarEmprendedor({idUsuario: data.Cédula})}}>
                    Consultar
                </Button>
              </div>
            }
        }]

        return (
        this.state.loading ? 
        <div className="container">
            <Card.Body className="text-center">
                <h3>No hay emprendedores para mostrar</h3>
            </Card.Body>
        </div> 
        :           
        <div className="Contenedor">
            <div className="card" >
                <Card.Body className="card">
                    <h5>Lista de Emprendedores</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
