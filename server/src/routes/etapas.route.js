const {Router} = require('express');
const router = Router();
const Controlador = require('../controllers/controlador.controller')

router.route('/')
.get(Controlador.getEtapas) 

module.exports = router;