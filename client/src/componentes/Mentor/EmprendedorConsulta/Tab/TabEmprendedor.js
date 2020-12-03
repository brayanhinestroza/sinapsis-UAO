import React, { Component } from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TablaTarea from './TablaTareas/TablaTareas'
import TablaConsultoria from './TablaConsultorias/TablaConsultorias'
import Info from './DiagnosticoConsultaTab/DiagnosticoConsultaTab';
import Ruta from './Ruta/Ruta';
import './TabEmprendedor.css';


class TabEmprendedor extends Component {
    state = {}

	render() {
		return (
			<Tabs
				id="controlled-tab-example"
				activeKey={this.state.key}
				onSelect={key => this.setState({ key })}
			>
				<Tab eventKey="ruta" title="Ruta" >
                    <Ruta/>            
				</Tab>

				<Tab eventKey="tareas" title="Tareas">
                    <div className="buttonTab">
                        <Link className="buttonMC btn btn-primary" 
                            to="/Mentor/Emprendedor/CrearTarea"
                        >Crear tarea</Link>
                    </div> 
                    <div >
                        <br></br>
                    </div>  
                    <div className="">
                        <TablaTarea/>
                    </div>
				</Tab>

				<Tab eventKey="consultorias" title="Consultorías" >
                    <div className="buttonTab">
                        <Link className="buttonMC btn btn-primary"
                        to="Emprendedor/CrearConsultoria"
                        >Crear consultoría</Link>
                    </div> 
                    <div>
                        <TablaConsultoria/>
                    </div>  
				</Tab>
                
                <Tab eventKey="informacion" title="Información" >					
                    <Info/>                   
				</Tab>
			</Tabs>
		);
	}
}

export default TabEmprendedor