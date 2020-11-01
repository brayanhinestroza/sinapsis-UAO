const pool = require('../database')

const Emprendedor = {}

Emprendedor.GetAll = pool.query('SELECT * FROM usuarios')

Emprendedor.getRuta = pool.query('SELECT * FROM ETAPA')


module.exports = Emprendedor;




