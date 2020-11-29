const mentor = {};
const Mentor = require('../models/Mentor.model')

mentor.getMentores = async (req , res) => {
    await Mentor.getMentores(req,res);
};

mentor.getEmprendedor = async (req,res) =>{
    await Mentor.getEmprendedor(req,res);
}

mentor.getEmprendedores = async (req, res) =>{
    await Mentor.getEmprendedores(req,res);
}

mentor.getConsultorias = async (req,res) =>{
    await Mentor.getConsultorias(req,res);
}

mentor.crearConsultoria = async (req,res) =>{
    await Mentor.crearConsultoria(req,res);
}

mentor.crearTarea = async (req,res) =>{
    await Mentor.CrearTarea(req,res);
}

mentor.getTareas = async (req,res) =>{
    await Mentor.getTareas(req,res);
}

module.exports = mentor;