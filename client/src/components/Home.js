import React, { Component } from 'react'
import Card from './Card-Home';
import '../styles/app.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import imagen from '../imagenes/emprendedor.jpg'


class Home extends Component{    

    render(){
        return (
        <React.Fragment>
            <header>
                <h1>Sinapsis Logo</h1>
            </header>
            <div className='text-center'>
                <Card title='Emprendedor' img={imagen}/>
                <Card title='Administrativo' img={imagen}/>
                <Card title='Mentor' img={imagen}/>
            </div>

            <footer>
                <div className="row">		
                    <div className="col-sm-4 d-flex flex-column align-items-start">
                        <h6>Redes sociales</h6>
                        <a href="http://www.facebook.com" target='_blank' rel='noopener noreferrer'>Facebook</a>
                        <a href="http://www.Twitter.com"  target='_blank' rel='noopener noreferrer'>Twitter</a>
                        <a href="http://www.Instagram.com" target='_blank' rel='noopener noreferrer'>Instagram</a>
                        <a href="http://www.Google.com" target='_blank' rel='noopener noreferrer'>Google+</a>
                    </div>

                    <div className="col-sm-4 d-flex flex-column align-items-center">
                        <h6>Contactos</h6>
                        <address>
                            <p>Calle 80 WFJA 25#6</p>				
                            <p>+57 65895447885454</p>
                            <p>sinapsis@ejemplo.com</p>
                        </address>						
                    </div>
                    
                    <div className="col-sm-4 d-flex flex-column align-items-end">
                        <h6>Acerca de...</h6>
                        <a href="www.facebook.com">Nosotros</a>
                        <a href="www.facebook.com">Terminos y condiciones</a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
        );
    }
}

export default Home;