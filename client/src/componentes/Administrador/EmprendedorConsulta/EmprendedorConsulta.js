import React, { Component } from 'react';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import Navbar from '../../Navbar/Navbar';
import Navegacion from '../Navegacion/Navegacion';
import TabEmp from './Tab/TabEmprendedor';
import '../Navegacion/Navegacion';


const cookies = new Cookies()
class EmprendedorConsulta extends Component {
  state = {
    loading: true
  }

  componentDidMount(){
    Axios.get("http://localhost:5000/Administrador/Emprendedor",{
      params: {
        idEmprendedor: cookies.get("idEmprendedor")
      }
    })
    .then(res =>{
      console.log(res.data);    
      this.setState({emprendedor: res.data[0].nombreCompleto, loading: false})
    })
  }	
    render(){
      return (
      this.state.loading ? <></>
      :
      <div>           
        <Navbar></Navbar>
        <Navegacion></Navegacion>            
        <div> 
          <div className="titulopaginaMC">
            <h3>Emprendedores/ {this.state.emprendedor}</h3>
          </div>
          <div className= "contenedorMC">
            <div className="Tab">
                <TabEmp></TabEmp>                    
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default EmprendedorConsulta
