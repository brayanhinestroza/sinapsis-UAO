import React, { Component } from 'react'
import {Button, Card, Form} from 'react-bootstrap'

import Banner from './Banner'
import logo from '../../imagenes/logosinapsis.png'
import imagen from '../../imagenes/home-admin.jpg'

class Registro extends Component {

    Formulario(){
        return (
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    <span className="font-weight-bolder">Registrate</span>
                </Button>
            </Form>
        )

    }

    render() {
        return (
            <>
            <Banner/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={imagen} alt="Sinapsis" width="100%" height="100%" />
                    </div>
                    <Card className="col-6 text-center">
                        <Card.Body>
                            <img src={logo} alt="sinapsis Logo" width="232" height="112" />
                            <h3 className="text-center mt-1 font-weight-bolder">Registro</h3>
                            {this.Formulario()}                      
                        </Card.Body>
                    </Card>
                </div>
            </div>

            </>
        )
    }
}

export default Registro