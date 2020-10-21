const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port' , process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/emprendedor', require('./routes/emprendedor.route'));

module.exports = app;