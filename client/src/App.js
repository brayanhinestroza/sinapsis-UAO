import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Emprendedor from './components/Emprendedor/Emprendedor';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/Emprendedor' component={Emprendedor}/>      
    </Router>
  );
}

export default App;
