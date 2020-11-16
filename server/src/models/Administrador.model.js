const pool = require('../database')
const Controlador = {}

Controlador.getCuentasPorActivar = async (req , res) => {
    const QUERY = "SELECT cedula as 'Cedula', nombreCompleto as 'Nombre Completo', correo as 'Correo', tipoUsuario as 'Rol' from USUARIOS WHERE estado = 0;"
    const result = await pool.query(QUERY);
    return result;
}

Controlador.deleteCuenta = async (req,res) =>{
    const {id} = req.body
    const result = await pool.query("Select tipoUsuario from usuarios where cedula = '" + id +"'");
    const tipoUsuario = result[0].tipoUsuario;

    const query = "DELETE FROM " + tipoUsuario + " WHERE cedula = '" + id +"'";
    const query2 = "DELETE FROM usuarios WHERE cedula = '" + id +"'";

    await pool.query(query, async (err, data) =>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            const resultado1 = data;
            console.log(data);
            await pool.query(query2,async (err,data) =>{
                if(err){
                    res.send(err);
                }else{
                    console.log(data);
                    res.send({res1:resultado1, res2:data});         
                }
            })         
        }
    })
}

Controlador.getDiagnosticos = async (req , res) => {
    const QUERY = "SELECT U.cedula as 'Cedula', U.nombreCompleto as 'Nombre Completo', D.nombreIniciativa as 'Nombre Iniciativa', D.idea as 'Idea de proyecto', D.tipoEmprendimiento as 'Tipo Emprendimiento' FROM diagnostico AS D JOIN emprendedor AS E ON E.cedula = D.idEmpDiag JOIN usuarios AS U ON U.cedula = E.cedula WHERE D.revisado = 0"
    const result = await pool.query(QUERY);
    return result;
}

Controlador.getDiagnostico = async (req , res) => {
    const QUERY = "SELECT U.nombreCompleto, U.cedula, E.fechaNacimiento, E.direccion, E.celular, E.genero, E.Programa, D.nombreIniciativa, D.idea, D.necesidad, D.cliente, D.desValidaciones, D.instrumentoValidacion, D.tipoEmprendimiento, D.tipoEconomia FROM diagnostico AS D JOIN emprendedor AS E ON E.cedula = D.idEmpDiag JOIN usuarios AS U ON U.cedula = E.cedula WHERE U.cedula = '" + req.query.idEmprendedor + "'";
    console.log(QUERY);
    const result = await pool.query(QUERY);
    return result;
}

Controlador.deleteDiagnostico = async (req,res) =>{
    const {id} = req.body;
    const query = "Delete FROM diagnostico where idEmpDiag =" + id;
    await pool.query(query, (err, data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
}

Controlador.updateEstado = async (req , res) => {
    const QUERY = "UPDATE usuarios SET estado = 1 WHERE cedula = '"+ req.body.cedula + "'";
    const result = await pool.query(QUERY);
    return result;
}

Controlador.postRuta = async (req , res) => {
    const {etapa, mentor, emprendedor} = req.body
    const QUERY = "INSERT INTO ruta (idEmpRuta, idEtapaRuta) VALUES ('"+ emprendedor +"'," + etapa +")";
    const QUERY2 = "INSERT INTO mentor_principal(idMentorMP, idEmprenMP) VALUES ('"+ mentor +"','" + emprendedor +"')";
    const QUERY3 = "UPDATE diagnostico SET revisado = 1 WHERE idEmpDiag = '"+ emprendedor + "'";

    await pool.query(QUERY, async (err, data) =>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            const resultado1 = data;
            console.log(data);
            await pool.query(QUERY2, async (err,data) =>{
                if(err){
                    console.log(err);
                    res.send(err);
                }else{
                    const resultado2 = data;
                    console.log(data);
                    await pool.query(QUERY3,async (err,data) =>{
                        if(err){
                            res.send(err);
                        }else{
                            console.log(data);
                            res.send({res1:resultado1, res2:resultado2, res3:data });         
                        }
                    })         
                }
            })         
        }
    })
}

module.exports = Controlador;