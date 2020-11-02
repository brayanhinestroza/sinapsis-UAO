const {Router} = require('express');
const router = Router();
const Administador = require('../controllers/administrador.controller')

router.route('/Cuentas')
    .get(Administador.getCuentas);  
    
router.route('/Diagnosticos')
    .get(Administador.getDiagnosticos);

module.exports = router;