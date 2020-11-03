import React, { Component } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "react-flexy-table/dist/index.css"
import "./Tabla.css"
import { Link } from 'react-router-dom'


export default class Tabla extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: null, 
            loading: true
        };        
    }

    async componentDidMount(){  
        const URL = "http://localhost:5000/Administrador/Diagnosticos";
        console.log(URL);
        const res = await Axios.get(URL);
        this.setState({datos:res.data, loading:false});
        console.log(res.data);
               
    }
    

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>
                <Link className= "buttonTable btn btn-primary" to={{pathname: "/Administrador/Diagnostico", id: data.Emprendedor }}>{this.props.textoBoton}</Link>                
                <Button className= "buttonTableO" class="btn btn-outline-primary" onClick={() => alert("this is delete for id " + data.id)}>Eliminar</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? <div>Cargando</div> :         
        <div className="Contenedor">
            <div className="card" >
                <Card.Body className="card">
                    <h5>Lista de {this.props.title}</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
