const pool = require('../database')
const Mentor = {}

Mentor.getMentores = async (req , res) => {
    await pool.query('SELECT * FROM mentor',(err, data) =>{
        console.log(data);
        res.send(data);
    });    
}

module.exports = Mentor;