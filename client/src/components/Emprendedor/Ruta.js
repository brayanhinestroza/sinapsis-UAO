import React, { Component } from 'react'
import { Card, Col, Row, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Banner from '../helpers/Banner'
import '../../styles/app.css'
import '../../styles/Ruta.css'

class Ruta extends Component {
    Circulo(){
        return <div className="Circulo"></div>
    }

    Navegacion(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar10">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Emprendedor">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Emprendedor/Diagnostico">Diagnostico</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Emprendedor/Ruta">Mi Ruta</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }

    Progress(){
        return <>        
        <div>
            <div className="d-flex justify-content-around mb-1">
                <div>
                    <div className="mr-auto ml-auto">Soñar</div>
                    <div className="circulo"><span>1</span></div>
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
                <ProgressBar variant="success" now={25} max='25'key={1} />
                <ProgressBar variant="warning" now={25} max='25'key={2} />
                <ProgressBar variant="danger" now={25} max='25' key={3} />
                <ProgressBar variant="info" now={25} max='25' key={4} />
            </ProgressBar>

        </div>
        
        </>
    }

    render() {
        return (
        <>
            <Banner/>
            {this.Navegacion()}
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
        </>
        )
    }
}

export default Ruta