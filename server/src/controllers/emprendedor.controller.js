const emprendedor = {};
const Emprendedores  = require('../models/Emprendedor.model')

emprendedor.getEmprendedor = async (req,res) => {
    const user = await Emprendedores.GetAll;
    console.log(user.RowDataPacket.toString);
    res.json(user);
    console.log(user);
};

emprendedor.postDiagnostico = (req,res) => {
    Emprendedores.postDiagnostico(req, res)
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
};

emprendedor.getRuta = (req, res) => {
    Emprendedores.getRuta
}


module.exports = emprendedor;