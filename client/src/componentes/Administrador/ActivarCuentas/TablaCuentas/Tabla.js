import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import Table from 'react-flexy-table'
import "./Tabla.css"

export default class Tabla extends Component {

    state = {
        datos: null, 
        loading: true
    }        

    componentDidMount(){ 
        const URL = "http://localhost:5000/Administrador/Cuentas";
        Axios.get(URL)
        .then(res =>{
            if(res.data.length > 0){
                this.setState({datos:res.data, loading:false});
            }
        });        
    }
    
    ActivarCuenta = e =>{        
        Axios.put("http://localhost:5000/Administrador/Cuenta",{
            cedula: e.idUsuario
        })
        .then(res =>{
            alert("Activacion exitosa");
            window.location.href = "/Administrador/Activar";
        })        
    }

    eliminarCuenta = e =>{
        Axios.delete('http://localhost:5000/Administrador/Cuenta', {
            params:{
                id:e.idUsuario
            }
        })
        .then(res =>{
            // eslint-disable-next-line
            if(res.data.affectedRows == 1 ){
                alert("Eliminacion exitosa");
                window.location.href = "/Administrador/Activar"
            }else{
                console.log(res);
            }
        })       
    }

    render() { 
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>
                <Button className= "buttonTable" variant="primary" onClick={()=> this.ActivarCuenta({idUsuario: data.Cedula})}>Activar</Button>                
                <Button className= "buttonTableO" class="btn btn-outline-primary" onClick={() => this.eliminarCuenta({idUsuario: data.Cedula})}>Eliminar</Button>
              </div>
            }
        }]

        return (
        this.state.loading ? <div> NO CUENTAS PARA ACTIVAR</div> :         
        <div className="Contenedor">
            <div className="card" >
                <Card.Body className="card">
                    <h5>Lista de cuentas a activar</h5>
                    <Table className="table" data={data} filteredDataText= "Datos filtrados:" nextText= "Siguiente" previousText = "Anterior"  totalDataText ="Total datos:" rowsText="Número de filas" pageText="Página" ofText =" de" filterable additionalCols={ColumnaAcciones}/>
                </Card.Body>
            </div>
        </div>
        )
    }
}
