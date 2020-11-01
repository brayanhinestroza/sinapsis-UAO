import React from 'react'
import { Card, Col, Row, ProgressBar } from 'react-bootstrap'

function ProgresoRuta() {
    return (
        <div>
             <div className="d-flex justify-content-around mb-1">
                <div>
                    <div className="mr-auto ml-auto">Soñar</div>
                    <div className="circulo"><span>1</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Pensar</div>
                    <div className="circulo"><span>2</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Probar</div>
                    <div className="circulo"><span>3</span></div>
                </div>
                <div>
                    <div className="mr-auto ml-auto">Arrancar</div>
                    <div className="circulo"><span>4</span></div>
                </div>                
            </div>

            <ProgressBar>
                <ProgressBar variant="success" now={25} max='25'key={1} />
                <ProgressBar variant="warning" now={25} max='25'key={2} />
                <ProgressBar variant="danger" now={25} max='25' key={3} />
                <ProgressBar variant="info" now={25} max='25' key={4} />
            </ProgressBar>
        </div>
    )
}

export default ProgresoRuta
