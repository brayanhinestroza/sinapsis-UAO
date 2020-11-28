import React, {Component} from 'react'
import Navbar from '../../Navbar/Navbar'
import TModal from './TareaModal'

import './MiRuta.css'
import Navegacion from '../Navegacion/Navegacion'
import MiRutaTab from './EmprendedorConsulta/MiRutaTabEmprendedor'

class MiRuta extends Component {

   
    render(){

        return (
            <div>
                <Navbar></Navbar>
                <Navegacion></Navegacion> 
    
            <div> 
              <div className="titulopaginaMR">
                <h3>Mi ruta</h3>
              </div>
                {//}<TModal></TModal>
    }
              
              <div className= "contenedorDMR">
              
                <div className="Tab">
                        <MiRutaTab></MiRutaTab>
                    </div>
              </div>
          </div>
    
            </div>
        )
    }
}

export default MiRuta
