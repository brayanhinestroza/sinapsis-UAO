const pool = require('../database')
const Controlador = {}

Controlador.getCuentasPorActivar = async (req , res) => {
    const QUERY = "SELECT cedula as 'Cedula', nombreCompleto as 'Nombre Completo', correo as 'Correo', tipoUsuario as 'Rol' from USUARIOS WHERE estado = 0;"
    const result = await pool.query(QUERY);
    return result;
}

Controlador.getDiagnosticos = async (req , res) => {
    const QUERY = "SELECT idEmpDiag as Emprendedor, nombreIniciativa as 'Nombre Iniciativa', idea as 'Idea de proyecto', tipoEmprendimiento as 'Tipo Emprendimiento' FROM DIAGNOSTICO WHERE REVISADO = 0"
    const result = await pool.query(QUERY);
    return result;
}

Controlador.getDiagnostico = async (req , res) => {
    const QUERY = "SELECT U.nombreCompleto, U.cedula, E.fechaNacimiento, E.direccion, E.celular, E.genero, E.Programa, D.nombreIniciativa, D.idea, D.necesidad, D.cliente, D.desValidaciones, D.instrumentoValidacion, D.tipoEmprendimiento, D.tipoEconomia FROM diagnostico AS D JOIN emprendedor AS E ON E.cedula = D.idEmpDiag JOIN usuarios AS U ON U.cedula = E.cedula WHERE U.cedula = '" + req.query.idEmprendedor + "'";
    const result = await pool.query(QUERY);
    return result;
}



Controlador.updateEstado = async (req , res) => {
    const QUERY = "UPDATE usuarios SET estado = 1 WHERE cedula = '"+ req.body.cedula + "'";
    const result = await pool.query(QUERY);
    return result;
}

Controlador.postRuta = (req , res) => {
    const {etapa, mentor, emprendedor} = req.body
    const QUERY = "INSERT INTO ruta (idEmpRuta, idEtapaRuta) VALUES ('"+ emprendedor +"'," + etapa +")"
    const QUERY2 = "INSERT INTO mentor_principal(idMentorMP, idEmprenMP) VALUES ('"+ mentor +"','" + emprendedor +"')"
    const QUERY3 = "UPDATE diagnostico SET revisado = 1 WHERE idEmpDiag = '"+ emprendedor + "'"
    console.log(QUERY);
    console.log(QUERY2);
    console.log(QUERY3);
    pool.query(QUERY).then(async (resultadoQ1) =>{
        console.log(resultadoQ1);        
        }
    );

    pool.query(QUERY2).then(async (resultadoQ2) =>{
        console.log(resultadoQ2);
    }
    )

    pool.query(QUERY3).then(async (resultadoQ3) =>{
        console.log(resultadoQ3);
    }
    )
}

module.exports = Controlador;