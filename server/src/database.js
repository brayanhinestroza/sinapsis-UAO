const mysql = require('mysql');

const {promisify} = require('util')
const config = {
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'sinapsisdb'
}

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if(err){
        console.log('Error');
    }

    if(connection) connection.release();
    console.log('DB conectada');
    return;
})

//Convierte cadena en Promesa
pool.query = promisify(pool.query);

module.exports = pool;
