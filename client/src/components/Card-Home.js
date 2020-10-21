import React, { Component } from 'react';
import {Card, CardBody, CardFooter, CardTitle, Button} from 'bootstrap-react';
import '../styles/app.css';


class Card_Home extends Component{

    render(){
        return <React.Fragment>
            <Card style={{width: '300px', display: 'inline-block', margin:'10px 25px'}}>                
                <CardBody>                    
                    <img src={this.props.img} alt={this.props.title} width="200" height="100"/>  
                    <CardTitle>{this.props.title}</CardTitle>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus ornare tristique. Morbi porta diam turpis, eget bibendum sem ornare nec. Aenean fermentum nec leo eu laoreet. Morbi porta diam turpis, eget bibendum sem ornare nec. Aenean fermentum nec leo eu laoreet.
                    </p>
                </CardBody>
                <CardFooter>
                    <Button href={'/' + this.props.title} color='primary' size='lg'> Ingresar</Button>
                </CardFooter>
            </Card>
        </React.Fragment>
    }
}
export default Card_Home;