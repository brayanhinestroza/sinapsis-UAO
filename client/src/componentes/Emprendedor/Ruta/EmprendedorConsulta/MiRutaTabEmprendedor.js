import React, { Component } from 'react'
import {Tab, Tabs, ProgressBar} from 'react-bootstrap';
import './MiRutaTabEmprendedor.css';
import TablaTarea from './TablaTareas/MiTablaTareas'
import TablaConsultoria from './TablaConsultorias/TablaConsultorias'
import Info from './DiagnosticoConsultaTab/DiagnosticoConsultaTab';
import Cookies from 'universal-cookie';
import Axios from 'axios';
const cookies = new Cookies();

class MiRutaTabEmprendedor extends Component {
	state = {
        loading:true,
        key:'ruta',
        ruta: {
            sonar: {
                progress:0,
                color: ""
            },
            pensar: {
                progress:0,
                color: ""
            },
            testear: {
                progress:0,
                color: ""
            },
            arrancar: {
                progress:0,
                color: ""
            }
        }
    };

    componentDidMount(){
    Axios.get("http://localhost:5000/Emprendedor/Etapa",{
            params:{
                idEmp: cookies.get("cedula")
            }
        })
        .then(res =>{
            if(res.data.length>0){
                const resultado = res.data[0].idEtapaRuta
                switch (resultado) {
                    case 1:
                        this.setState({ruta:{
                            sonar: {
                                progress:25,
                                color: "bg-green"
                            },
                            pensar: {
                                progress:0,
                                color: ""
                            },
                            testear: {
                                progress:0,
                                color: ""
                            },
                            arrancar: {
                                progress:0,
                                color: ""
                            }
                        }});
                        break;

                        case 2:
                        this.setState({ruta:{
                            sonar: {
                                progress:25,
                                color: "bg-green"
                            },
                            pensar: {
                                progress:25,
                                color: "bg-green"
                            },
                            testear: {
                                progress:0,
                                color: ""
                            },
                            arrancar: {
                                progress:0,
                                color: ""
                            }
                        }});
                        break;

                        case 3:
                        this.setState({ruta:{
                            sonar: {
                                progress:25,
                                color: "bg-green"
                            },
                            pensar: {
                                progress:25,
                                color: "bg-green"
                            },
                            testear: {
                                progress:25,
                                color: "bg-green"
                            },
                            arrancar: {
                                progress:0,
                                color: ""
                            }
                        }});
                        break;

                        case 4:
                        this.setState({ruta:{
                            sonar: {
                                progress:25,
                                color: "bg-green"
                            },
                            pensar: {
                                progress:25,
                                color: "bg-green"
                            },
                            testear: {
                                progress:25,
                                color: "bg-green"
                            },
                            arrancar: {
                                progress:25,
                                color: "bg-green"
                            }
                        }});
                        break;
                
                    default:
                        this.setState({ruta:{
                            sonar: {
                                progress:0,
                                color: ""
                            },
                            pensar: {
                                progress:0,
                                color: ""
                            },
                            testear: {
                                progress:0,
                                color: ""
                            },
                            arrancar: {
                                progress:0,
                                color: ""
                            }
                        }}
                        );
                    break;
                }
            }
        });
    }
    
    Progress(){
        return (
            <div>
            <div className="d-flex justify-content-around mb-1">
                <div>
                    <div className="mr-auto ml-auto">Soñar</div>
                    <div className={"circulo " + this.state.ruta.sonar.color}><span>1</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Pensar</div>
                    <div className={"circulo " + this.state.ruta.pensar.color}><span>2</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Testear</div>
                    <div className={"circulo " + this.state.ruta.testear.color}><span>3</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Arrancar</div>
                    <div className={"circulo " + this.state.ruta.arrancar.color}><span>4</span></div>
                </div>                
            </div>

            <ProgressBar>
                <ProgressBar variant="success" now={this.state.ruta.sonar.progress} key={1} />
                <ProgressBar variant="success" now={this.state.ruta.pensar.progress} key={2} />
                <ProgressBar variant="success" now={this.state.ruta.testear.progress} key={3} />
                <ProgressBar variant="success" now={this.state.ruta.arrancar.progress} key={4} />
            </ProgressBar>

        </div>
        );
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
				<Tab eventKey="consultorias" title="Consultorias">
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