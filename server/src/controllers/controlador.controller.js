const controlador = {};
const Controlador = require('../models/Controlador.model')

controlador.postLogin = async (req , res) => {
    await Controlador.Iniciar_Sesion(req, res);
};

controlador.postRegistro = async (req,res) => {
    await Controlador.Registro(req, res);
}

controlador.getEtapas = (req, res) =>{
    Controlador.getEtapas(req,res);
}

controlador.updateEtapa = (req,res) =>{
    Controlador.updateEtapa(req,res);
}

module.exports = controlador;