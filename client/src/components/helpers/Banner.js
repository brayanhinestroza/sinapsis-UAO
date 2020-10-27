import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import logoSinapsis from '../../imagenes/logosinapsis.png'

class Banner extends Component {

    state = {
        user: 'Invitado',
        navUser: {
            
        }
    }

    RenderizarOpcionUser(){
        if (window.location.pathname === "/") {
            return 
        }

        if(this.state.user === "Invitado"){
            return (
            <>
                <p> { this.state.user } </p>
                <p>_icon </p>
            </>
            );
        }
        return (
            <>
                <p> { this.state.user } </p>
                <p>_icon </p>
                <p>_Exit</p>
            </>
        );
    }

    render() {
        return (
            <>
            <Navbar bg="warning" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logoSinapsis}
                        width="124"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Sinapsis logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end d-inline">
                    {this.RenderizarOpcionUser()}
                </Navbar.Collapse>
                { this.RenderizarOpcionUser}                
            </Navbar>    
        </>
        )
    }
}

export default Banner
