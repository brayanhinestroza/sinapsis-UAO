import React, { Component } from 'react'
import {Card, Form, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Banner from '../helpers/Banner'

class Diagnostico extends Component {


    EnviarDatos(){
        return console.log("Entro aqui");
    }

    render() {
        return (
        <>
        <Banner/>
        <Link className="nav-link" to="/Emprendedor">Volver</Link>
        <div className="d-flex justify-content-center">
            <Card className="w-75 ">
                <Card.Body>
                    <div className="text-center mb-5">
                        <h3>Bienvenido al formulario de diagnostico del emprendedor</h3>
                        <p>Por favor diligencie los siguentes campos de la manera mas sincera posible.</p>
                    </div>
                    {this.Formulario()}
                </Card.Body>
            </Card>
        </div>
        </>
        )
    }

    Formulario(){
        return <>
            <Form>                
                <div className="mb-5">
                    <div className="circulo mr-auto ml-auto">
                        <span className="d-flex justify-content-center">1</span>
                    </div>

                    <div className="d-flex justify-content-center mr-auto ml-auto mt-1 mb-4 font-weight-bold">Información del solicitante</div>
                </div>

                <Row>
                    <Form.Group as={Col} controlId="Nombre">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Cedula">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control type="number" placeholder="Ingresa tu cedula" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="FechaNacimiento">
                        <Form.Label>Fecha Nacimiento</Form.Label>
                        <Form.Control type="date" max="26/10/2020" placeholder="Ingresa tu fecha de nacimiento" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Direccion">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu direccion" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="Celular">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" placeholder="Ingresa tu numero de celular" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Ciudad">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu ciudad" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="Genero">
                        <Form.Label>Genero</Form.Label>
                        <Form.Control as="select" defaultValue="Masculino">
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Sin especificar</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Vinculo">
                        <Form.Label>Vinculo con la universidad</Form.Label>
                        <Form.Control as="select" defaultValue="Escoge tu vinculo">
                            <option>Estudiante</option>
                            <option>Egresado</option>
                            <option>Colaborador</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="Programa">
                        <Form.Label>Programa</Form.Label>
                        <Form.Control as="select" defaultValue="Escoge tu programa">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>                
                </Row>

                <div className="mb-3 mt-5">
                    <div className="circulo mr-auto ml-auto">
                        <span className="d-flex justify-content-center">2</span>
                    </div>

                    <div className="d-flex justify-content-center mr-auto ml-auto mt-1 mb-4 font-weight-bold">Información del Proyecto</div>
                </div>

                <Row>
                    <Form.Group as={Col} controlId="NombreProyecto">
                        <Form.Label>Nombre de la iniciativa</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el nombre de la iniciativa" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="DescripcionProyecto">
                        <Form.Label>Descripcion del proyecto</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="NecesidadProyecto">
                        <Form.Label>Necesidad o problema que soluciona</Form.Label>
                        <Form.Control as="textarea" rows={4}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="ClienteProyecto">
                        <Form.Label>Principal cliente o usuario</Form.Label>
                        <Form.Control as="textarea" rows={4}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="ValidacionesProyecto">
                        <Form.Label>Validaciones que ha realizado</Form.Label>
                        <Form.Control as="textarea" rows={4}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="InstrumentosValidarProyecto">
                        <Form.Label>Selecciones los instrumentos que ha utilizado para realizar las validaciones:</Form.Label>
                        <div>
                            <Form.Check inline type="checkbox" label="Entrevista" />
                            <Form.Check inline type="checkbox" label="Encuesta" />
                            <Form.Check inline type="checkbox" label="Grupo Focal" />
                            <Form.Check inline type="checkbox" label="Otros" />
                        </div>
                    </Form.Group>
                </Row>

                <div className="mb-3 mt-5">
                    <div className="circulo mr-auto ml-auto">
                        <span className="d-flex justify-content-center">3</span>
                    </div>

                    <div className="d-flex justify-content-center mr-auto ml-auto mt-1 mb-4 font-weight-bold">Información del consultor</div>
                </div>

                <Row>
                    <Form.Group as={Col} controlId="TipoProyecto">
                        <Form.Label>Tipo de emprendimiento:</Form.Label>
                        <div>
                            <Form.Check inline type="radio" label="Dinamico" name="TipoProyecto"/>
                            <Form.Check inline type="radio" label="Alto impacto" name="TipoProyecto"/>
                        </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="TipoEconomia">
                        <Form.Label>Seleccione el tipo de economia:</Form.Label>
                        <div>
                            <Form.Check inline type="radio" label="Digital" name="TipoEconomia"/>
                            <Form.Check inline type="radio" label="Creativo y cultural" name="TipoEconomia"/>
                        </div>
                    </Form.Group>
                </Row>

                <Row className="d-flex justify-content-end mt-5 mb-5">
                    <Link to="/Emprendedor" className="mr-3">Cancelar</Link>     
                    <Button type="submit" onClick={this.EnviarDatos()} className="w-50 mr-5">Enviar Diagnostico</Button>
                </Row>
            </Form>
        </>
    }

}


export default Diagnostico