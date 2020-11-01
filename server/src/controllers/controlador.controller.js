const controlador = {};
const Controlador = require('../models/Controlador.model')

controlador.postLogin = async (req , res) => {
    const rows = await Controlador.Iniciar_Sesion(req, res);
    
    if(rows.length > 0){
        res.json(rows[0])
        console.log("Usuario existe");
        return
    }else{
        console.log("Usuario no existe");
        res.end()
        return
    }
};

controlador.postRegistro = async (req,res) => {
    const rows = await Controlador.Registro(req, res);
    res.json(rows);
}


module.exports = controlador;