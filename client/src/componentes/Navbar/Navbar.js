import React, {Component} from 'react'
import {Button, Image, Modal} from 'react-bootstrap';
import logo from '../../Imagenes/sinapsis.png';
import exit from '../../Imagenes/exit.svg'; 
import user from '../../Imagenes/user.svg'; 
import './Navbar.css'
import Cookies from 'universal-cookie'

const cookie = new Cookies();

class Navbar extends Component {

    state = {
        loading:true,
        showModal:false
    }

    componentDidMount(){                
       if(cookie.get("cedula")){
            // eslint-disable-next-line 
            if(cookie.get("estado") == 0){
                this.setState({showModal:true})
            }else{
                this.setState({
                    cedula : cookie.get("cedula"),
                    tipoUsuario : cookie.get("tipoUsuario"),
                    nombreCompleto : cookie.get("nombreCompleto"),
                    estado : cookie.get("estado")
                }); 
            }                       
        }else{
            alert("Debes iniciar sesión primero");
            window.location.href = "/";
        }
        this.setState({loading:false});
    }

    handleClick = e =>{
        cookie.remove("cedula", {path:"/"});
        cookie.remove("tipoUsuario", {path:"/"});
        cookie.remove("nombreCompleto", {path:"/"});
        cookie.remove("estado",  {path:"/"});
        cookie.remove("idEmprendedor",  {path:"/"});
        cookie.remove("correo",  {path:"/"});
        cookie.remove("idConsultoria",  {path:"/"});
        cookie.remove("idTarea",  {path:"/"});

        window.location.href = "/";
    }

    handleClose = () => {
        cookie.remove("cedula", {path:"/"});
        cookie.remove("tipoUsuario", {path:"/"});
        cookie.remove("nombreCompleto", {path:"/"});
        cookie.remove("estado",  {path:"/"});
        cookie.remove("idEmprendedor",  {path:"/"});
        cookie.remove("correo",  {path:"/"});
        cookie.remove("idConsultoria",  {path:"/"});
        cookie.remove("idTarea",  {path:"/"});

        window.location.href = "/";
    }

    render(){
    return (
        this.state.showModal ? 
        <Modal centered show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Aviso</Modal.Title>
        </Modal.Header>
        <Modal.Body> Tu cuenta aún no ha sido activada, puedes contactarte con un administrador para agilizar el proceso</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
            Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
        :

        this.state.loading ? <></>
        :
        <div className="Navbar">  
            <div className= "contenedorIzq">               
                <Image className= "logo" src={logo}/>
            </div>

            <div  className= "contenedorDer">                
                <p className="nombre" >{this.state.nombreCompleto}</p>
                <Button className="btn-Controles"><Image className= "icono" src={user}/></Button>
                <Button type="button" className="btn-Controles"><Image className= "icono" src={exit} onClick={this.handleClick}/></Button>
            </div>           
        </div>
    )
    }
}

export default Navbar
