const administrador = {};
const Administrador = require('../models/Administrador.model')


administrador.getCuentas = async (req , res) => {
    const resultado = await Administrador.getCuentasPorActivar(req, res);
    console.log(resultado);
    res.json(resultado)        
}

administrador.deleteCuenta = async (req,res) =>{
    await Administrador.deleteCuenta(req,res);
}

administrador.getDiagnosticos = async(req,res) => {
    const resultado = await Administrador.getDiagnosticos(req, res);
    console.log(resultado);
    res.json(resultado) 
}

administrador.getDiagnostico = async(req,res) => {
    const resultado = await Administrador.getDiagnostico(req, res);
    console.log(resultado);
    res.json(resultado) 
}

administrador.deleteDiagnostico = async(req,res) =>{
    await Administrador.deleteDiagnostico(req,res);    
}

administrador.updateEstado = async(req,res) => {
    const resultado = await Administrador.updateEstado(req, res);
    console.log(resultado);
    res.json(resultado)   
}

administrador.postRuta = async(req,res) => {
    await Administrador.postRuta(req, res); 
}

module.exports = administrador;