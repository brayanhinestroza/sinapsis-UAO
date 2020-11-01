import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Diagnostico.css'
import '../../Registro/Registro.css'
import {Button} from 'react-bootstrap';
import Navegacion from '../Navegacion/Navegacion'


function Ruta() {
    return (
        <div>
           <Navbar></Navbar>
          <Navegacion></Navegacion> 
        </div>
    )
}

export default Ruta
