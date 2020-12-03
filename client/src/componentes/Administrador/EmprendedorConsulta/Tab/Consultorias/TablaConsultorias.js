import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import Cookies from 'universal-cookie'
import "./TablaConsultorias.css"

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
        Axios.get("http://localhost:5000/Emprendedor/Consultorias",{
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

    render() { 
        const data = this.state.datos;
        return (
        this.state.loading ? 
        <div>
            <Card.Body className="cardT">
                <h3 className="text-center">No hay datos para mostrar</h3>
            </Card.Body>
        </div> 
        :         
        <div className="ContenedorC">
            <div className="cardC" >
                <Card.Body className="cardC">
                    <h5>Lista de {this.props.title}</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
