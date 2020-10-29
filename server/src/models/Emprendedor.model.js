const pool = require('../database')

const Emprendedor = {}

Emprendedor.GetAll = pool.query('SELECT * FROM usuarios')


module.exports = Emprendedor;




