import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "./TablaConsultorias.css"
import Cookies from 'universal-cookie'

const cookies =  new Cookies();
export default class Tabla extends Component {

    state = {
        datos: null, 
        loading: true,
    };       

    componentDidMount(){        
        Axios.get("http://localhost:5000/Mentor/Consultoria",{
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

    evaluarConsultoria = e =>{

    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>              
                <Button variant="primary" className="buttonMC" onClick={(e) =>
                { 
                    if(window.confirm("Esta seguro que desea Evaluar la consultoria del emprendedor?")){
                        this.evaluarConsultoria(e)
                    }
                }
                }>Evaluar</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? <div>
        <Card.Body className="cardT">
                <h3 className="text-center">No hay datos para mostrar</h3>
            </Card.Body>
        </div> :         
        <div className="ContenedorC">
            <div className="cardC" >
                <Card.Body className="cardC">
                    <h5>Lista de Consultorías</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
