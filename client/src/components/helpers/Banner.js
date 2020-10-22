import React, { Component } from 'react'
import {Navbar, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logoSinapsis from '../../imagenes/logosinapsis.png'

class Banner extends Component {

    state = {
        user: 'Invitado',
        navUser: {
            
        }
    }

    metodo(){
        if (window.location.pathname === "/") {
            return 
        }
        return (
            <Navbar.Collapse className="justify-content-end d-inline">
                <p> { this.state.user } </p>
                <p>_icon </p>
                <p>_Exit</p>
            </Navbar.Collapse>
        )
    }

    componentDidMount(){

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

                { this.metodo}
                
            </Navbar> 

            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <Link to="/">Home</Link>    
                </Breadcrumb.Item>                
                <Breadcrumb.Item active>{window.location.pathname.substr(1)}</Breadcrumb.Item>
            </Breadcrumb>
        </>
        )
    }
}

export default Banner
