import React, { Component } from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import Info from './Informacion/DiagnosticoConsultaTab';
import Mentores from './Mentores/TablaMentores';
import AsignarMentor from './AsignarMentor/AsignarMentor'
import Consultorias from './Consultorias/TablaConsultorias'
import Ruta from './Ruta/Ruta'
import './TabEmprendedor.css';

class TabEmprendedor extends Component {
    
    state ={}

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

                <Tab eventKey="mentores" title="Mentores" >					
                    <Mentores/>                 
				</Tab>

                <Tab eventKey="asignarMentor" title="Asignar Mentor" >					
                    <AsignarMentor/>                   
				</Tab>

                <Tab eventKey="informacion" title="Información" >					
                    <Info/>                   
				</Tab>

                <Tab eventKey="consultorias" title="Consultorías" >					
                    <Consultorias/>                   
				</Tab>
			</Tabs>
		);
	}
}

export default TabEmprendedor