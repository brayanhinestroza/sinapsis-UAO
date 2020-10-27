import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Breadcrumb} from 'react-bootstrap'

export default class Breadcrumb extends Component {

    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <Link to="/">Home</Link>    
                </Breadcrumb.Item>                
                <Breadcrumb.Item active>{window.location.pathname.substr(1)}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
