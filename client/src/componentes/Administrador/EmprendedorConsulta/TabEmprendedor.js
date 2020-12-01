import React, { Component } from 'react'
import {Tab, Tabs, ProgressBar, Button,} from 'react-bootstrap';
import './TabEmprendedor.css';

import Info from './DiagnosticoConsultaTab/DiagnosticoConsultaTab';
import Mentores from './TablaMentores/TablaMentores';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const cookies = new Cookies();
class TabEmprendedor extends Component {
    state = {
        loading:true,
        key: 'ruta',
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
                idEmp: cookies.get("idEmprendedor")
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

        this.consultarEtapas();
    }

    HandleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    Progress(){

        return <div>
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
                    <div className="mr-auto ml-auto">Probar</div>
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
        
    }

    asignarRuta = e =>{
        e.preventDefault();
        Axios.put("http://localhost:5000/Etapas",{
            etapa: this.state.etapa,
            idEmp: cookies.get("idEmprendedor")
        })
        .then(res =>{
            window.location.href = "/Mentor/Emprendedor"
        })
    }

    consultarEtapas(){
        Axios.get("http://localhost:5000/Etapas")
        .then(res => {
            return this.setState({etapas: res.data, loading:false});
        });
    }

	render() {
		return (
            this.state.loading ? <></>
            :
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

                <Tab eventKey="mentores" title="Mentores" >
					
                    <Mentores></Mentores>
                   
				</Tab>				
				
                <Tab eventKey="informacion" title="Información" >
					
                    <Info></Info>
                   
				</Tab>
			</Tabs>
		);
	}
}

export default TabEmprendedor