const pool = require('../database')
const Controlador = {}

Controlador.getCuentasPorActivar = async (req , res) => {
    const QUERY = "SELECT cedula as 'Cedula', nombreCompleto as 'Nombre Completo', correo as 'Correo', tipoUsuario as 'Rol' from USUARIOS WHERE estado = 0;"
    const result = await pool.query(QUERY);
    return result;
}

module.exports = Controlador;