import React, { Component } from 'react'
import imagen from '../../imagenes/home-admin.jpg'
import Banner from './Banner'

class Login extends Component {
    render() {
        return (
            <>
            <Banner/>

            <div className="container">
                <div className="col-6">
                    <img src={imagen} alt="Sinapsis" />
                </div>
                <div className="col-6">

                </div>
            </div>

            </>
        )
    }
}

export default Login