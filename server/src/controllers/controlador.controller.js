const controlador = {};
const Controlador = require('../models/Controlador.model')

controlador.postLogin = async (req , res) => {
    const rows = await Controlador.Iniciar_Sesion(req, res);
    
    if(rows.length > 0){
        res.json({
            "message": "Correcto",
            "usuario": rows[0]
        });
        console.log("Usuario existe");
    }else{
        console.log("Usuario no existe");
        res.json({"message": "Usuario no existe"});
    }
};

controlador.postRegistro = async (req,res) => {
    Controlador.Registro(req, res)
    .then((resp) => {
        res.json({
            "message": "Correcto",
            "respuesta": resp
        }); 
    }).catch(error => {
        console.log('Fallo' , error)
        res.json({
            "message": "Error"
        });        
    });
}
/*
controlador.postRegistroMentor = async (req,res) => {
    Controlador.Registro(req, res)
    .then((resp) => {
        res.json({
            "message": "Correcto",
            "respuesta": resp
        }); 
    }).catch(error => {
        console.log('Fallo' , error)
        res.json({
            "message": "Error"
        });        
    });
}

controlador.postRegistroAdministrativo = async (req,res) => {
    Controlador.Registro(req, res)
    .then((resp) => {
        res.json({
            "message": "Correcto",
            "respuesta": resp
        }); 
    }).catch(error => {
        console.log('Fallo' , error)
        res.json({
            "message": "Error"
        });        
    });
}
*/

module.exports = controlador;