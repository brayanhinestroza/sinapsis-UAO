import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Diagnostico.css'

function Diagnostico() {
    return (
        <div>
          <Navbar></Navbar>
          <div className="t">
          <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          </div>

          <div>
              
          </div>
          
        </div>
    )
}

export default Diagnostico
