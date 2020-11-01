import React, { Component } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "react-flexy-table/dist/index.css"
import "./Tabla.css"


export default class Tabla extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: {}, 
            loading: false
        };        
    }

    componentDidMount(){  
        Promise.all([
            Axios.get('http://localhost:5000/Emprendedor'),
        ]).then(([rp1]) => {
            this.setState({datos: rp1.data, loading:false})           
        }).catch(err => {
            console.log('error', err);
        });
    }    

    render() { 
        const data = [{ Cédula: 123434234, Nombre:"Benito Antonio Martinez", Correo:"Benito@gmail.com", Tipo:"Emprendedor"} ]
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>

                <Button className= "buttonTable" variant="primary" onClick={() => alert("this is delete for id " + data.id)}>Aceptar</Button>                
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
