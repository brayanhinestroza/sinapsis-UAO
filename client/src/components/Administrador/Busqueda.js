import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import Axios from 'axios'
import Objectify from 'objectify-array'
import Tabla from 'react-flexy-table'
import "react-flexy-table/dist/index.css"
import "../../styles/Administrativo.css"

import IconEliminar from '../../imagenes/deleteIcon.png'
import IconAccept from '../../imagenes/Accept-icon.png'

export default class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: {}, 
            loading: true
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
        const data = this.state.datos
        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>
                <img className="mr-3" src={IconEliminar} alt="Eliminar" width="30" height="30" onClick={() => alert("this is delete for id " + data.id)} />
                <img src={IconAccept} alt="Aceptar" width="30" height="30" onClick={() => alert("this is edit for id " + data.id)} /> 
              </div>
            }
        }]

        return (
            this.state.loading ? <div>Cargando</div> : 
        
            <>
            <div>
                <h3>{this.props.Title}</h3>
            </div>

            <Container>
                <Card>
                    <Card.Body>
                        <h5>Lista de {this.props.Title}</h5>
                        <Tabla className="color" data={data} filterable additionalCols={ColumnaAcciones}/>
                    </Card.Body>
                </Card>
            </Container>

            </>
        )
    }
}
