const pool = require('../database')
const Controlador = {}

Controlador.Iniciar_Sesion = async (req , res) => {
    const {cedula, contrasena} = req.body ;
    const result = await pool.query("SELECT * FROM usuarios WHERE cedula = '" + cedula + "' AND contraseña = '" + contrasena + "'");
    return result;
}

Controlador.Registro = async (req, res) => {
    const {cedula, nombreCompleto, correo, estado, contrasena, tipoUsuario } = req.body
    const query = "INSERT INTO usuarios (cedula, nombreCompleto,correo,estado,contraseña,tipoUsuario) VALUES" + 
                " ('" + cedula + "','" +  nombreCompleto + "','" + correo + "'," + estado + ",'" + contrasena + "',"
                + tipoUsuario + ")";
    const result =  pool.query(query);
    return result    
}

module.exports = Controlador;