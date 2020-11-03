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
                " ('" + cedula + "','" +  nombreCompleto + "','" + correo + "'," + estado + ",'" + contrasena + "','"
                + tipoUsuario + "')";    
    const query2 = "INSERT INTO "+ tipoUsuario +  " (cedula) values ('" + cedula + "')";
      
    pool.query(query).then((resultadoQ1) =>{
        console.log(resultadoQ1);
        const result2 =pool.query(query2);
    }
    )
}

module.exports = Controlador;