const {Router} = require('express');
const router = Router();
const Controlador = require('../controllers/controlador.controller')

router.route('/')//
.get(Controlador.getEtapas)//
.put(Controlador.updateEtapa)//

module.exports = router;