import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import swal from 'sweetalert2'

const cookies = new Cookies();
class ContenedorAsignar extends Component {
constructor(props){
    super(props);
    this.state = {
        mentores: null,
        etapas: null,
        loading: true,
        emprendedor: cookies.get("idEmprendedor")
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
            swal.fire({
                title:"Asignado",
                icon:"success",
                iconColor:"#9a66a8",
                text:"Se ha asignado correctamente la etapa de la ruta y el mentor principal",
                confirmButtonText:"Aceptar",
                confirmButtonColor:"#9a66a8",
                showConfirmButton: true
            })
            .then(()=> window.location.href = "/Administrador/Diagnosticos")
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
                <Button className= "buttonDiagDC" variant="primary" onClick={()=> {
                    swal.fire({
                        title:"¿Estás seguro?",
                        text:"Se asignara una etapa inicial y mentor principal al emprendedor",
                        icon:"warning",
                        iconColor:"#9a66a8",
                        confirmButtonText:"Confirmar",
                        confirmButtonColor:"#9a66a8",            
                        showConfirmButton: true,
                        showCancelButton:true,
                        cancelButtonText:"Cancelar",
                    })
                    .then(res =>{
                        if(res.isConfirmed){
                            this.asignarRuta()
                        }
                    })
                }}>Asignar</Button>
            </div>
        </div>

        : <></>
        )
    }
}
export default ContenedorAsignar