//const mysql = require('mysql2');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
   process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,
   {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql'   
 });

const conexion = sequelize.sync({force: false}).then(() => {
   console.log('Conectado correctamente');
}).catch(error => {
   console.log('Se ha producido un error' , error);
});


module.exports = sequelize;

/*const connection = mysql.createConnection({
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});*/

