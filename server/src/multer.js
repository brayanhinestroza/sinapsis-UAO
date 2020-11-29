const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, '/files'))
    },
    filename: function(req,file,cb){
        const nombre = file.originalname.split('.')[0];
        const ext = file.originalname.split('.')[1];
        const fecha = new Date();
        cb(null, `${nombre}-${fecha.getDay()}-${fecha.getMonth()}-${fecha.getFullYear()}.${ext}`)
    }
})

module.exports = storage