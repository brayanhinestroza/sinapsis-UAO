import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import Table from 'react-flexy-table'
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
                window.location.href = "/Administrador/Emprendedor"
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
                    if(window.confirm("Esta seguro que desea asignar el mentor al emprendedor?")){
                        this.asignarMentor({idMentor:data.Cédula})
                    }
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
