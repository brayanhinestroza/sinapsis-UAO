const mentor = {};
const Mentor = require('../models/Mentor.model')

mentor.getMentores = async (req , res) => {
    await Mentor.getMentores(req,res);
};

module.exports = mentor;