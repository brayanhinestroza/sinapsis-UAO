const emprendedor = {};
const Emprendedores  = require('../models/Emprendedor.model')

emprendedor.getEmprendedor = async (req,res) => {
    const user = await Emprendedores.GetAll;
    console.log(user.RowDataPacket.toString);
    res.json(user);
    console.log(user);
};

emprendedor.getDiagnostico = (req,res) =>{
    Emprendedores.getDiagnostico(req,res)
}

emprendedor.postDiagnostico = (req,res) => {
    Emprendedores.postDiagnostico(req, res)
};

emprendedor.getRuta = (req, res) => {
    Emprendedores.getRuta
}


module.exports = emprendedor;