const {Router} = require('express');
const router = Router();
const Administador = require('../controllers/administrador.controller')

router.route('/Cuentas')//
    .get(Administador.getCuentasActivar) //
    
router.route('/Cuenta')//
    .put(Administador.activarCuenta)//
    .delete(Administador.deleteCuenta)//
    
router.route('/Diagnosticos')//
    .get(Administador.getDiagnosticos)//     

router.route('/Diagnostico') //
    .get(Administador.getDiagnostico)//
    .post(Administador.postRuta)//
    .delete(Administador.deleteDiagnostico)//  

router.route('/Emprendedores')
    .get(Administador.getEmprendedores)

router.route('/Emprendedor')
    .get(Administador.getEmprendedor)

router.route('/Mentor')
    .get(Administador.getMentor)
    .post(Administador.agregarMentor)
router.route('/Mentores')
    .get(Administador.getMentores)    

module.exports = router;