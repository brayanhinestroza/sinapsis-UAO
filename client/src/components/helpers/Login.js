<<<<<<< Updated upstream
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Form, Button} from 'react-bootstrap'
import imagen from '../../imagenes/home-mentor.jpg'
import logo from '../../imagenes/logosinapsis.png'
import Banner from './Banner'
import { Link } from 'react-router-dom'
=======
import React from 'react'
import img from '../../imagenes/img.png';
import logo from '../../imagenes/sinapsis.png';
import '../../styles/login.css';
import {Button, Image} from 'react-bootstrap';
>>>>>>> Stashed changes


class Login extends Component {

    URL(){
        const cadena = window.location.pathname.split("/", 2)
        return "/" + cadena[1]
    }

    Formulario(){
        return (
            <Form className="text-left">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Cedula</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu cedula" />
                    <Form.Text className="text-muted">
                    Digita tu cedula sin puntos ni comas
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="font-weight-bold">Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Aceptar los terminos y condiciones" />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    <span className="font-weight-bolder">Ingresar</span>
                </Button>
            </Form>
        )
    }
    render() {
        return (
            <>
            <Banner/>
            <Link className="nav-link" to="/">Volver</Link>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img src={imagen} alt="Sinapsis" width="100%" height="100%" />
                    </div>
                    <Card className="col-6 text-center">
                        <Card.Body>
                            <img src={logo} alt="sinapsis Logo" width="232" height="112" />
                            <h3 className="text-center mt-1 font-weight-bolder">Inicia sesion</h3>
                            {this.Formulario()}
                            <p className="mt-2">No tienes una cuenta? 
                                <Link to={this.URL() + "/Registro"}> Registrate</Link>
                                <Link to={this.URL()}> Inicio</Link>
                            </p>                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </>
        )
    }
}

export default Login