const {Router} = require('express');
const router = Router();
const Mentor = require('../controllers/mentor.controller')

router.route("/")//
    .get(Mentor.getMentores)//

router.route('/Emprendedor')//
    .get(Mentor.getEmprendedor)//

router.route('/Emprendedores')//
    .get(Mentor.getEmprendedores)//

router.route('/Consultoria')//
    .get(Mentor.getConsultorias)//
    .post(Mentor.crearConsultoria)//

router.route('/RevisarConsultoria')
    .get(Mentor.revisarConsultoria)
    .put(Mentor.ComentarConsultoria)

router.route('/Tarea')//
    .get(Mentor.getTareas)//
    .post(Mentor.crearTarea)//

router.route('/RevisarTarea')
    .get(Mentor.revisarTarea)
    .put(Mentor.calificarTarea)

module.exports = router;
