const emprendedor = {};
const Emprendedores  = require('../models/Emprendedor.model')
const pool = require('../database')

emprendedor.getEmprendedor = async (req,res) => {
    const user = await Emprendedores.GetAll;
    res.json(user);
    console.log(user);
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