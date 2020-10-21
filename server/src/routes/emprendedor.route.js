const {Router} = require('express');
const router = Router();
const Emprendedor = require('../controllers/emprendedor.controller')

router.route('/')
    .get(Emprendedor.getEmprendedor)
    .post(Emprendedor.postEmprendedor)

module.exports = router;
