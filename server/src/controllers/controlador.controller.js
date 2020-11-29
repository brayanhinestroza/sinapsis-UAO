const controlador = {};
const Controlador = require('../models/Controlador.model')

controlador.postLogin = async (req , res) => {
    await Controlador.Iniciar_Sesion(req, res);
};

controlador.postRegistro = async (req,res) => {
    await Controlador.Registro(req, res);
}

controlador.getEtapas = async (req, res) =>{
    await Controlador.getEtapas(req,res);
}

controlador.updateEtapa = async(req,res) =>{
    await Controlador.updateEtapa(req,res);
}

module.exports = controlador;