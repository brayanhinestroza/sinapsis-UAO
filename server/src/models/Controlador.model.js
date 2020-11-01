const pool = require('../database')
const Controlador = {}

Controlador.Iniciar_Sesion = async (req , res) => {
    const {cedula, contrasena} = req.body ;
    const result = await pool.query("SELECT * FROM usuarios WHERE cedula = '" + cedula + "' AND contraseña = '" + contrasena + "'");
    pool.end();
    return result;
}

Controlador.Registro = async (req, res) => {

    const {cedula, contrasena} = req.body
    const result = await pool.query("INSERT INTO usuarios (cedula, contraseña) VALUES ('"+ cedula+"', '"+ contrasena+ "');");
    console.log(result);
    return result
}

module.exports = Controlador;