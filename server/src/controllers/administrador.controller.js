const administrador = {};
const Administrador = require('../models/Administrador.model')

administrador.getCuentas = async (req , res) => {
    const resultado = await Administrador.getCuentasPorActivar(req, res);
    console.log(resultado);
    res.json(resultado)        
}

administrador.getDiagnosticos = async(req,res) => {
    console.log("Entro aqui");
}

module.exports = administrador;