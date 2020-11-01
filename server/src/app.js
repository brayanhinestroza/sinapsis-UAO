const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port' , process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/emprendedor', require('./routes/emprendedor.route'));
app.use('/Login', require('./routes/login.route'));
app.use('/Registro', require('./routes/registro.route'));

module.exports = app;