const pool = require('../database')
const Administrador = {}

Administrador.getCuentasActivar = (req , res) => {
    const QUERY = "SELECT cedula as 'Cédula', nombreCompleto as 'Nombre Completo', correo as 'Correo', tipoUsuario as 'Rol' from USUARIOS WHERE estado = 0;"
    pool.query(QUERY,(err,data)=>{
        res.send(data)
    })
}

Administrador.deleteCuenta = (req,res) =>{
    const {id} = req.query

    const query = "DELETE FROM usuarios WHERE cedula = '" + id +"'";            
    pool.query(query, (err,data) =>{
        if(err){
            res.send(err);
        }else{
            console.log(data);
            res.send(data);         
        }
    });    
}

Administrador.getDiagnosticos = (req , res) => {
    const QUERY = "SELECT U.cedula as 'Cédula', U.nombreCompleto as 'Nombre Completo', D.nombreIniciativa as 'Nombre Iniciativa', D.idea as 'Idea de proyecto', D.tipoEmprendimiento as 'Tipo Emprendimiento' FROM diagnostico AS D JOIN emprendedor AS E ON E.cedula = D.idEmpDiag JOIN usuarios AS U ON U.cedula = E.cedula WHERE D.revisado = 0"
    pool.query(QUERY,(err,data) => {
        res.send(data)
    });
}

Administrador.getDiagnostico = (req , res) => {
    const QUERY = "SELECT U.nombreCompleto, U.cedula, U.correo, DATE_FORMAT(E.fechaNacimiento,'%d/%m/%Y') as fechaNacimiento , E.direccion, E.celular, E.genero, E.programa, E.ciudad, D.nombreIniciativa, D.idea, D.necesidad, D.cliente, D.desValidaciones, D.instrumentoValidacion, D.tipoEmprendimiento, D.tipoEconomia, D.vinculoConU, D.archivo FROM diagnostico AS D JOIN emprendedor AS E ON E.cedula = D.idEmpDiag JOIN usuarios AS U ON U.cedula = E.cedula WHERE U.cedula = '" + req.query.idEmprendedor + "'";
    pool.query(QUERY,(err,data)=>{
        res.send(data);
    });
}

Administrador.deleteDiagnostico = (req,res) =>{
    const {id} = req.query;
    const query = "Delete FROM diagnostico where idEmpDiag =" + id;
    pool.query(query, (err, data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
}

Administrador.activarCuenta = (req , res) => {
    const QUERY = "UPDATE usuarios SET estado = 1 WHERE cedula = '"+ req.body.cedula + "'";
    pool.query(QUERY,(err,data) =>{
        res.send(data)
    });
}

Administrador.postRuta = (req , res) => {
    const {etapa, mentor, emprendedor} = req.body
    const QUERY = "INSERT INTO ruta (idEmpRuta, idEtapaRuta) VALUES ('"+ emprendedor +"'," + etapa +")";
    const QUERY2 = "INSERT INTO mentor_principal(idMentorMP, idEmprenMP) VALUES ('"+ mentor +"','" + emprendedor +"')";
    const QUERY3 = "UPDATE diagnostico SET revisado = 1 WHERE idEmpDiag = '"+ emprendedor + "'";
    const QUERY4 = "INSERT INTO mentor_emprendedor (idMentorME, idEmprenME) VALUES ('" + mentor + "' , '" + emprendedor + "')";

    pool.query(QUERY,(err, data) =>{
        if(err){
            res.send(err);
        }else{
            const resultado1 = data;
            pool.query(QUERY2,(err,data) =>{
                if(err){
                    res.send(err);
                }else{
                    const resultado2 = data;
                    pool.query(QUERY3,(err,data) =>{
                        if(err){
                            res.send(err);
                        }else{
                            const resultado3 = data
                            pool.query(QUERY4, (err,data) =>{
                                if(err){
                                    res.send(err);
                                }else{
                                    res.send({res1:resultado1, res2:resultado2, res3:resultado3, res4: data});                                             
                                }
                            });
                        }
                    });         
                }
            });         
        }
    });
}

Administrador.getEmprendedores = (req,res) =>{
    const query = "SELECT U.cedula as Cédula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electrónico',IF(E.celular IS NULL, '----', E.celular ) AS Celular FROM usuarios as U JOIN emprendedor as E ON U.cedula = E.cedula WHERE estado = 1"
    pool.query(query,(err,data) =>{
        res.send(data);
    })
}

Administrador.getEmprendedor = (req,res) =>{
    const {idEmprendedor} = req.query
    pool.query("SELECT nombreCompleto from usuarios where cedula = " + idEmprendedor, (err,data) =>{
        res.send(data)
    })
}

Administrador.getMentor = (req,res) =>{
    const query = "SELECT U.cedula as Cédula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electrónico' from mentor as M JOIN usuarios as U ON U.cedula = M.cedula AND U.estado=1"
    pool.query(query,(err,data) =>{
        res.send(data);
    })
}

Administrador.getMentores = (req,res) =>{
    const {idEmp} = req.query;
    const query = "SELECT U.cedula as Cédula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electrónico' FROM usuarios as U JOIN mentor as M ON U.cedula = M.cedula JOIN mentor_emprendedor as ME ON ME.idMentorME = M.cedula WHERE ME.idEmprenME = " + idEmp;
    pool.query(query,(err,data) =>{
        res.send(data);
    })
}

Administrador.agregarMentor = (req,res) =>{
    const {idEmp, idMentor} = req.body;
    const query = "INSERT INTO mentor_emprendedor (idMentorME, idEmprenME) VALUES (" + idMentor + " , " + idEmp + ")";
    pool.query(query,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            res.send("El mentor ya ha sido asignado")
        }
    })
}

module.exports = Administrador;