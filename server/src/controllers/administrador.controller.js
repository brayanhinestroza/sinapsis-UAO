const administrador = {};
const Administrador = require('../models/Administrador.model')


administrador.getCuentas = async (req , res) => {
    const resultado = await Administrador.getCuentasPorActivar(req, res);
    console.log(resultado);
    res.json(resultado)        
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

administrador.updateEstado = async(req,res) => {
    const resultado = await Administrador.updateEstado(req, res);
    console.log(resultado);
    res.json(resultado)   
}

administrador.postRuta = async(req,res) => {
    const resultado = await Administrador.postRuta(req, res);
    console.log(resultado);
    res.json(resultado)   
}

module.exports = administrador;