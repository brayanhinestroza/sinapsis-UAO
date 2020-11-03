const {Router} = require('express');
const router = Router();
const Controlador = require('../controllers/controlador.controller')

router.route('/')
.post(Controlador.postRegistro) 
/*
router.route('/Mentor')
.post(Controlador.postRegistroMentor) 

router.route('/Administrativo')
.post(Controlador.postRegistroAdministrativo) 
*/
module.exports = router;