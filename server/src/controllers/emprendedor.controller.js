const emprendedor = {};
const Emprendedores  = require('../models/Emprendedor.model')

emprendedor.getEmprendedor = async (req,res) => {
    const user = await Emprendedores.GetAll;
    console.log(user.RowDataPacket.toString);
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


emprendedor.getRuta = (req, res) => {
    Emprendedores.getRuta
}


module.exports = emprendedor;