const {Router} = require('express');
const router = Router();
const Emprendedor = require('../controllers/emprendedor.controller')

router.route('/')
    .get(Emprendedor.getEmprendedor)

router.route('/Diagnostico')
    .post(Emprendedor.postDiagnostico)
    .get(Emprendedor.getDiagnostico)

router.route('/Etapa')
.get(Emprendedor.getEtapa);

module.exports = router;
