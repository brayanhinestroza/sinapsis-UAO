import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import Tabla from 'react-flexy-table'
import "react-flexy-table/dist/index.css"
import "../../styles/Administrativo.css"

import IconEliminar from '../../imagenes/deleteIcon.png'
import IconAccept from '../../imagenes/Accept-icon.png'

export default class Busqueda extends Component {

    render() {
        const data = [{id: 1, nombre:'Pedro'},{id:2, nombre:"Julian"}]

        const ColumnaAcciones = [{
            header: "Acciones",
            td: (data) => {
              return <div>
                <img className="mr-3" src={IconEliminar} alt="Eliminar" width="30" height="30" onClick={() => alert("this is delete for id " + data.id)} />
                <img src={IconAccept} alt="Aceptar" width="30" height="30" onClick={() => alert("this is edit for id " + data.id)} /> 
              </div>
            }
          }]

        return (<>
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
