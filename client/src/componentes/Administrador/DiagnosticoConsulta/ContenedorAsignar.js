import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios'

class ContenedorAsignar extends Component {
constructor(props){
    super(props);
    this.state = {
        mentores: null,
        etapas: null,
        loading: true,
        emprendedor: this.props.emprendedor
    }
}
//Ciclo de vida del componente
componentDidMount(){
    this.consultarEtapas();
    this.consultarMentores();
    this.setState({loading:false})
}

//Eventos del componente
HandleChange(e){
    if(this.state.loading === false){
       this.setState({[e.target.name]: e.target.value});
    }
}

//Metodos del componente - Consulta mentores, etapas , asignacion de ruta -
consultarMentores(){
    Axios.get("http://localhost:5000/Mentor")
    .then(res =>{
        return this.setState({mentores: res.data});    
    })
}

consultarEtapas(){
    Axios.get("http://localhost:5000/Etapas")
    .then(res => {
        return this.setState({etapas: res.data});
    });
}

asignarRuta(){    
    Axios.post("http://localhost:5000/Administrador/Diagnostico",{
        etapa: this.state.etapa,
        emprendedor: this.state.emprendedor,
        mentor: this.state.mentorPrincipal
    }).then(res =>{
        if(res.data.res1.affectedRows === 1 && res.data.res2.affectedRows === 1 && res.data.res3.affectedRows === 1 ){
            alert("Se ha asignado correctamente la etapa de la ruta y el mentor");
            window.location.href = "/Administrador/Diagnosticos"
        }
        else{
            alert("Ocurrio algun un error")
        }
    })
}

render() {    
    return (
        this.state.etapas && this.state.mentores ? 
        this.state.loading ? <>Cargando</>
        :
        <div className="contenedorAsignarDC">
            <div className="Subtitulo-asignarDC">
                <h5>Asignar etapa inicial y mentor principal</h5>
            </div>
            <div>
                <label className="nombreInputDC">Etapa inicial</label>
                <br></br>
                <select name="etapa" className="inputDiag" type= "text" onChange={(e)=> this.HandleChange(e)}>
                    <option className="inputDiag" value="-1" disabled selected>Seleccione una...</option>
                    {                       
                        this.state.etapas.map(v => (
                        <option className="inputDiagDC" value={v.idetapa}>{v.etapa}</option>))
                    }
                </select> 
            </div>
            
            <div>
                <label className="nombreInputDC">Mentor principal</label>
                <br></br>                
                <select name="mentorPrincipal" className="inputDiag" type= "text" onChange={(e)=> this.HandleChange(e)}>
                    <option className="inputDiagDC" value="-1" disabled selected>Seleccione uno...</option>
                    {                        
                        this.state.mentores.map(v => (
                        <option className="inputDiagDC" value={v.cedula}>{v.nombreCompleto}</option>))
                    }
                </select> 
            </div>
            <div>
                <Button className= "buttonDiagDC" variant="primary" onClick={()=> this.asignarRuta()}>Asignar</Button>
            </div>
        </div>

        : <></>
        )
    }
}
export default ContenedorAsignar