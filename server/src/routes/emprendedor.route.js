const {Router} = require('express');
const router = Router();
const Emprendedor = require('../controllers/emprendedor.controller')

router.route('/')
    .get(Emprendedor.getEmprendedor)
    .post(Emprendedor.postEmprendedor)


router.route('/MiRuta')
.get(Emprendedor.getRuta);


module.exports = router;
