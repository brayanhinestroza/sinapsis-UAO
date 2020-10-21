const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Emprendedor extends Model {}
Emprendedor.init({
  username: DataTypes.STRING,
  tipo: DataTypes.STRING
}, { sequelize, modelName: 'Emprendedor' });


module.exports = Emprendedor;




