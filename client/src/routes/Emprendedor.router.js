import React from 'react'
import {Route} from 'react-router-dom'

import Emprendedor from '../components/Emprendedor/Emprendedor'
import Login from '../components/helpers/Login'
import Registro from '../components/helpers/Registro'

export default function EmprendedorRoutes() {
    return (
        <>
            <Route exact path='/Emprendedor' component={Emprendedor}/>
            <Route  path='/Emprendedor/Login' component={Login}/> 
            <Route  path='/Emprendedor/Registro' component={Registro}/>
        </>

    )
}
