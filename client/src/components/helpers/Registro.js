import React, { Component } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Banner from './Banner'
import logo from '../../imagenes/logosinapsis.png'
import imagen from '../../imagenes/home-admin.jpg'

class Registro extends Component {

    URL(){
        const cadena = window.location.pathname.split("/", 2)
        return "/" + cadena[1]
    }

    Formulario(){
        return (
            <Form className="text-left">
                <Form.Group controlId="Nombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                </Form.Group>

                <Form.Group controlId="Cedula">
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa tu cedula" />
                </Form.Group>

                <Form.Group controlId="TipoUsuario">
                    <Form.Control as="select" defaultValue="Emprendedor">
                        <option>Emprendedor</option>
                        <option>Mentor</option>
                        <option>Administrador</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="Correo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>
                
                <Form.Group controlId="contrasena">
                    <Form.Control type="password" placeholder="Ingresa tu contrasena" />
                </Form.Group>

                <Form.Group controlId="Ccontrasena">
                    <Form.Control type="password" placeholder="Confirma tu contrasena" />
                </Form.Group>

                <Button className="w-100" variant="warning" type="submit">
                    <span className="font-weight-bolder">Registrarse</span>
                </Button>
            </Form>
        )

    }

    render() {
        return (
            <>
            <Banner/>
            <Link className="nav-link" to={this.URL()}>Volver</Link>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-6">
                        <img src={imagen} alt="Sinapsis" width="100%" height="100%" />
                    </div>
                    <Card className="col-6 text-center">
                        <Card.Body>
                            <img src={logo} alt="sinapsis Logo" width="232" height="112" />
                            <h3 className="text-center mt-1 font-weight-bolder">Registro</h3>
                            {this.Formulario()}
                            <p className="mt-3">Ya tienes una cuenta? 
                                <Link className="ml-1" to={this.URL() + "/Login"}>
                                    Inicia sesion
                                </Link> 
                            </p>                      
                        </Card.Body>
                    </Card>
                </div>
            </div>

            </>
        )
    }
}

export default Registro