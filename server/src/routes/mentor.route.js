const {Router} = require('express');
const router = Router();
const Mentor = require('../controllers/mentor.controller')

router.route("/")
    .get(Mentor.getMentores)

module.exports = router;
