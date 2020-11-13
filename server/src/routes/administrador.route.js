const {Router} = require('express');
const router = Router();
const Administador = require('../controllers/administrador.controller')

router.route('/Cuentas')
    .get(Administador.getCuentas)
    .post(Administador.updateEstado)
    
router.route('/Cuenta')
    .post(Administador.deleteCuenta)
    
router.route('/Diagnosticos')
    .get(Administador.getDiagnosticos)

router.route('/Diagnostico')
    .get(Administador.getDiagnostico)

router.route("/Diagnostico")
    .post(Administador.deleteDiagnostico)

router.route('/Ruta')
    .post(Administador.postRuta)

module.exports = router;