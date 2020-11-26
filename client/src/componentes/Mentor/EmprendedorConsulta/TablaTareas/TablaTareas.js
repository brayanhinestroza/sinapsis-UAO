import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "react-flexy-table/dist/index.css"
import "./TablaTareas.css"
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies =  new Cookies();
export default class Tabla extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: null, 
            loading: true,
        };        
    }

    async componentDidMount(){        
        await Axios.get("http://localhost:5000/Administrador/Diagnosticos")
        .then(res =>{
            if(res.data.length>0){
                this.setState({datos:res.data, loading:false});
            }
        })           
    }

    eliminarDiagnostico =async e =>{
        const dato = e.idUsuario;
        await Axios.post('http://localhost:5000/Administrador/Diagnostico', {id:dato})
        .then(res =>{
            if(res.data.affectedRows > 0){
                alert("Eliminacion exitosa");
                window.location.href = "/Administrador/Diagnosticos"
            }
        })       
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>              
                <Link className= "buttonTable btn btn-primary" onClick={() => cookies.set("idEmprendedor", data.Cedula)} to={{pathname: "/Administrador/Diagnostico", id: data.Emprendedor }}>{this.props.textoBoton}</Link>                
                <Button className= "buttonTableO" class="btn btn-outline-primary" 
                onClick={() =>{ 
                  if(window.confirm("Esta seguro que desea eliminar el diagnostico?")){
                    this.eliminarDiagnostico({idUsuario: data.Cedula})
                  }
                  }
                }>
                    Eliminar</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? <div>Cargando datos</div> :         
        <div className="ContenedorT">
            <div className="cardT" >
                <Card.Body className="cardT">
                    <h5>Lista de {this.props.title}</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
