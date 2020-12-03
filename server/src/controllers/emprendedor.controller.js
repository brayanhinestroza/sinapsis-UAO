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

emprendedor.getEtapa = (req, res) => {
    Emprendedores.getEtapa(req,res);
}

emprendedor.getTareas = (req,res) =>{
    Emprendedores.getTareas(req,res);
}

emprendedor.EnviarTarea = (req,res) =>{
    Emprendedores.EnviarTarea(req,res)
}

emprendedor.getConsultorias = (req,res) =>{
    Emprendedores.getConsultorias(req,res);
}


module.exports = emprendedor;