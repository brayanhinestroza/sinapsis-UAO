import React, { Component } from 'react';
import axios from 'axios';

export default class Emprendedor extends Component {

    componentDidMount(){
        axios.get('http://localhost:5000/Emprendedor')
        .then(function (response) {
            // handle success                   
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }

    render() {
        return (
            <div>
                Data Mostrada por consola
            </div>
        )
    }
}
