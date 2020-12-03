import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "./TablaMentores.css"

const cookies =  new Cookies();
export default class TablaMentores extends Component {


    state = {
        datos: null, 
        loading: true,
    };        

    componentDidMount(){        
        Axios.get("http://localhost:5000/Administrador/Mentores",{
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

    revisarTarea = e =>{

    }

    render() { 
        const data = this.state.datos

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
            <h5>Mentores del Emprendedor</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
