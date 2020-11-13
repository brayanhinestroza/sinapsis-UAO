import React, {Component} from 'react'
import Navbar from '../../Navbar/Navbar'
import {Breadcrumb, Card, Row, ProgressBar, Col} from 'react-bootstrap'
import './Ruta.css'
import '../../Registro/Registro.css'
import Navegacion from '../Navegacion/Navegacion'

class Ruta extends Component {


    
    Progress(){
        return <div>
            <div className="d-flex justify-content-around mb-1">
                <div>
                    <div className="mr-auto ml-auto">Soñar</div>
                    <div className="circulo bg-green"><span>1</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Pensar</div>
                    <div className="circulo"><span>2</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Probar</div>
                    <div className="circulo"><span>3</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Arrancar</div>
                    <div className="circulo"><span>4</span></div>
                </div>                
            </div>

            <ProgressBar>
                <ProgressBar variant="success" now={5} max='25'key={1} />
                <ProgressBar variant="warning" now={0} max='25'key={2} />
                <ProgressBar variant="danger" now={0} max='25' key={3} />
                <ProgressBar variant="info" now={0} max='25' key={4} />
            </ProgressBar>

        </div>
        
    }

    render(){

    return (
        <div>
            <Navbar></Navbar>
            <Navegacion user="Juan Sebastian"></Navegacion>
            <Breadcrumb></Breadcrumb>

            <div className="container-fluid pt-2 pr-5 pl-5">
                <h5 className="mt-3">Mi Ruta</h5>
                <Row className="h-100">
                    <Col md = '8' className='mr-1'>
                        <Row>                        
                            <Card className="w-100">
                                <Card.Body>                                    
                                    {this.Progress()}
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="mt-3">
                            <Card className="w-100">
                                <Card.Body>                                    
                                    <h3>Tareas</h3>
                                    <div className="d=flex justify-content-center">
                                        <p>No tienes tareas</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Card className="w-100">
                            <Card.Body className="w-100">                                    
                                <h3>Consultorias</h3>
                                <div className="d=flex justify-content-center">
                                    <p>No tienes consultorias</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
    }
}

export default Ruta
