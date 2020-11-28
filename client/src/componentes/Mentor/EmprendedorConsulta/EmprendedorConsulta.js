
import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar'
import '../Navegacion/Navegacion';
import Navegacion from '../Navegacion/Navegacion';
import '../../Navbar/Navbar.css'
import './EmprendedorConsulta.css'
import TabEmp from './TabEmprendedor'
import ModalT from '../TareaModal'
import TareaModal from '../../Emprendedor/Ruta/TareaModal';

class EmprendedorConsulta extends Component {
	
    render(){
        return (
        <div>
            <Navbar></Navbar>
            <Navegacion></Navegacion> 

        <div> 
          <div className="titulopaginaMC">
            <h3>Emprendedores/ Nombre del emprendedor</h3>
          </div>
          <div className= "contenedorMC">
                <div className="Tab">
                    <TabEmp></TabEmp>

                    <ModalT></ModalT>
                </div>
          </div>
      </div> 
        </div>
    )
  }
}

export default EmprendedorConsulta
