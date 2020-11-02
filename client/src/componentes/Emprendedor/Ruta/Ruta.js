import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Ruta.css'
import '../../Registro/Registro.css'
import Navegacion from '../Navegacion/Navegacion'

function Ruta() {
    return (
        <div>
            <Navbar></Navbar>
            <Navegacion></Navegacion>
            <Breadcrumb></Breadcrumb>
            
        </div>
    )
}

export default Ruta
