const emprendedor = {};
const Emprendedores  = require('../models/Emprendedor.model')

emprendedor.getEmprendedor =  (req,res) => {
    Emprendedores.findAll()
    .then((resp) => res.json(resp))
    .catch(error => console.log('Fallo' , error));  
};

emprendedor.postEmprendedor = (req,res) => {
    Emprendedores.create(
        {username: 'Prueba',
        tipo: 'Emprendedor'
    })
    .then((resp) => res.json(resp))
    .catch(error => console.log('Fallo' , error));
};

module.exports = emprendedor;