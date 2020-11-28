import React, { Component } from 'react'
import {Tab, Tabs, ProgressBar, Button,} from 'react-bootstrap';
import './MiRutaTabEmprendedor.css';
import TablaTarea from './TablaTareas/MiTablaTareas'
import TablaConsultoria from './TablaConsultorias/TablaConsultorias'
import Info from './DiagnosticoConsultaTab/DiagnosticoConsultaTab';


class MiRutaTabEmprendedor extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'ruta',
		};
    }
    
    Progress(){
        return <div>
            <div className="d-flex justify-content-around mb-1">
                <div>
                    <div className="mr-auto ml-auto">Soñar</div>
                    <div className="circulo bg-green"><span>1</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Pensar</div>
                    <div className="circulo"><span>2</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Probar</div>
                    <div className="circulo"><span>3</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Arrancar</div>
                    <div className="circulo"><span>4</span></div>
                </div>                
            </div>

            <ProgressBar>
                <ProgressBar variant="success" now={5} max='25'key={1} />
                <ProgressBar variant="warning" now={0} max='25'key={2} />
                <ProgressBar variant="danger" now={0} max='25' key={3} />
                <ProgressBar variant="info" now={0} max='25' key={4} />
            </ProgressBar>

        </div>
        
    }

	render() {
		return (
			<Tabs
				id="controlled-tab-example"
				activeKey={this.state.key}
				onSelect={key => this.setState({ key })}
			>
				<Tab eventKey="ruta" title="Ruta" >

                <div className="rutaC"> 
                <div className= 'ruta'>
                    {this.Progress()}                   
                </div>
                
                </div>               

				</Tab>
				<Tab eventKey="tareas" title="Tareas">

                            <div className="">
                              <TablaTarea></TablaTarea>
                            </div> 

				</Tab>
				<Tab eventKey="consultorias" title="Consultorias" >

                            <div className="">
                              <TablaConsultoria></TablaConsultoria>
                            </div>  
				</Tab>
                <Tab eventKey="informacion" title="Información" >
					
                    <Info></Info>
                   
				</Tab>
			</Tabs>
		);
	}
}

export default MiRutaTabEmprendedor