const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

//Inicializacion
const app = express();
const storage = require('./multer')

//settings
app.set('port' , process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(multer({
    storage    
}).single('file'))


//Archivos estaticos
app.use(express.static(path.join(__dirname, '/files')));

//routes
app.use('/Emprendedor', require('./routes/emprendedor.route'));
app.use('/Login', require('./routes/login.route'));
app.use('/Registro', require('./routes/registro.route'));
app.use('/Administrador', require('./routes/administrador.route'));
app.use('/Mentor', require('./routes/mentor.route'));
app.use('/Etapas', require('./routes/etapas.route'));

module.exports = app;