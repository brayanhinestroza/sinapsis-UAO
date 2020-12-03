const administrador = {};
const Administrador = require('../models/Administrador.model')


administrador.getCuentasActivar = (req , res) => {
    Administrador.getCuentasActivar(req, res);      
}

administrador.deleteCuenta = (req,res) =>{
    Administrador.deleteCuenta(req,res);
}

administrador.getDiagnosticos = (req,res) => {
    Administrador.getDiagnosticos(req, res); 
}

administrador.getDiagnostico = (req,res) => {
    Administrador.getDiagnostico(req, res);
}

administrador.deleteDiagnostico = (req,res) =>{
    Administrador.deleteDiagnostico(req,res);    
}

administrador.activarCuenta = (req,res) => {
    Administrador.activarCuenta(req, res);
}

administrador.postRuta = (req,res) => {
    Administrador.postRuta(req, res); 
}

administrador.getEmprendedores = (req,res) =>{
    Administrador.getEmprendedores(req,res);
}

administrador.getEmprendedor = (req,res) =>{
    Administrador.getEmprendedor(req,res);
}

administrador.getMentores = (req,res) =>{
    Administrador.getMentores(req,res);
}

administrador.getMentor = (req,res) =>{
    Administrador.getMentor(req,res);
}

administrador.agregarMentor =(req,res) =>{
    Administrador.agregarMentor(req,res);
}

module.exports = administrador;