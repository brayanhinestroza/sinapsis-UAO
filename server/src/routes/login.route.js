const {Router} = require('express');
const router = Router();
const Controlador = require('../controllers/controlador.controller')

router.route('/')
.post(Controlador.postLogin) 

module.exports = router;