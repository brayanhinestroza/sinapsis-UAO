const mentor = {};
const Mentor = require('../models/Mentor.model')

mentor.getMentores = (req , res) => {
    Mentor.getMentores(req,res);
};

mentor.getEmprendedor = (req,res) =>{
    Mentor.getEmprendedor(req,res);
}

mentor.getEmprendedores =  (req, res) =>{
    Mentor.getEmprendedores(req,res);
}

mentor.getConsultorias = (req,res) =>{
    Mentor.getConsultorias(req,res);
}

mentor.crearConsultoria = (req,res) =>{
    Mentor.crearConsultoria(req,res);
}

mentor.crearTarea = (req,res) =>{
    Mentor.CrearTarea(req,res);
}

mentor.getTareas = (req,res) =>{
    Mentor.getTareas(req,res);
}

mentor.revisarTarea = (req,res) =>{
    Mentor.revisarTarea (req,res);
}

mentor.calificarTarea = (req,res) =>{
    Mentor.calificarTarea(req,res) ;
}

module.exports = mentor;