import React from 'react'
import {Navbar, Card, CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home_Admin from '../imagenes/home-admin.jpg'
import Home_Emprendedor from '../imagenes/home-emprendedor.jpg'
import Home_Mentor from '../imagenes/home-mentor.jpg'

import '../styles/app.css'
import Banner from './helpers/Banner'



function Home() {
    return (
        <>        
        <Banner/>

        <h3 className="text-center mt-2">Elige tu perfil de usuario</h3>

        <CardDeck className="m-3 text-center">
            <Card>
                <Card.Img variant="top" src={Home_Emprendedor} height="250" />
                <Card.Body>
                <Card.Title>Emprendedor</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras et dolor lorem. Donec ut erat id diam facilisis facilisis at vel diam. 
                Etiam suscipit est eu suscipit tristique. 
                </Card.Text>
                <Link to="/Emprendedor" className="mt-2 btn btn-info w-100">
                    <span className="font-weight-bolder">Seleccionar</span>
                </Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Home_Mentor} height="250"  />
                <Card.Body>
                <Card.Title>Mentor</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras et dolor lorem. Donec ut erat id diam facilisis facilisis at vel diam. 
                    Etiam suscipit est eu suscipit tristique. 
                </Card.Text>
                <Link to="/Mentor" className="mt-2 btn btn-info w-100"> 
                    <span className="font-weight-bolder">Seleccionar</span>
                </Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Home_Admin} height="250"  />
                <Card.Body>
                <Card.Title>Administrativo</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras et dolor lorem. Donec ut erat id diam facilisis facilisis at vel diam. 
                    Etiam suscipit est eu suscipit tristique. 
                </Card.Text>
                <Link to="/Administrador" className="mt-2 btn btn-info w-100">
                    <span className="font-weight-bolder">Seleccionar</span>
                </Link>
                </Card.Body>
            </Card>
        </CardDeck>

        <Navbar className="Contactos" bg="warning" variant="dark">
            <p className="Contacto">
                <span className="Titulo-Contacto">Contacto</span>
                Teléfono:
                (+57) (2) 318 8000 
                Línea gratuita: 01 8000 91 34 35
                Ext: 11046
            </p>
        </Navbar>
        </>
    );
}

export default Home
