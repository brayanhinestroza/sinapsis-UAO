const pool = require('../database')
const Mentor = {}

<<<<<<< Updated upstream
Mentor.getMentores = async (req , res) => {
    await pool.query('SELECT * FROM mentor',(err, data) =>{
=======
Mentor.getMentores = (req , res) => {
    const query = "SELECT M.cedula, U.nombreCompleto from mentor as M JOIN usuarios as U where U.tipoUsuario = 'Mentor'"
    pool.query(query,(err, data) =>{
>>>>>>> Stashed changes
        console.log(data);
        res.send(data);
    });    
}

<<<<<<< Updated upstream
=======
Mentor.getEmprendedor = (req,res) =>{
    const {idEmprendedor} = req.query
    pool.query("SELECT nombreCompleto from usuarios where cedula = " + idEmprendedor, (err,data) =>{
        res.send(data)
    })
}

Mentor.getEmprendedores = (req,res) =>{
    const {idMentor} = req.query;
    const query = "SELECT U.cedula as Cedula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electronico', E.celular as Celular FROM usuarios as U JOIN emprendedor as E ON U.cedula = E.cedula JOIN mentor_emprendedor as ME ON ME.idEmprenME = E.cedula WHERE ME.idMentorME = " + idMentor;
    //const query = "SELECT U.cedula as Cedula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electronico', E.celular as Celular FROM usuarios as U JOIN emprendedor as E ON U.cedula = E.cedula JOIN mentor_emprendedor as ME ON ME.idEmprenME = E.cedula WHERE ME.idMentorME = 9999 ";
    pool.query(query, (err, data) =>{        
        res.send(data)    
    });
}

Mentor.getConsultorias = (req,res) =>{
    const query = "SELECT idEmpConsultoria as 'Cedula', nombreCompleto as 'Nombre Emprendedor', nombreConsultoria, asuntoConsultoria, DATE_FORMAT(fechaConsultoria, '%d/%m/%Y') as 'Fecha Consultoria', TIME_FORMAT(horaInicio, '%l:%i %p') as 'Hora inicio', TIME_FORMAT(horaFin, '%l:%i %p') as 'Hora fin'  FROM consultoria as C JOIN usuarios as U ON C.idEmpConsultoria = U.cedula where idMentorConsultoria = 88888"
    pool.query(query, (err,data) =>{
        console.log(data);
        res.send(data);
    })
}

Mentor.crearConsultoria = (req,res) =>{
    const {idEmp, idMentor, titulo, fecha, horaI, horaF, asunto, comentario} = req.body.SinError;
    var query;
    if(!comentario){
        query = "INSERT into consultoria (idEmpConsultoria, idMentorConsultoria, nombreConsultoria, asuntoConsultoria, fechaConsultoria, horaInicio, horaFin)" 
        + "VALUES ('" + idEmp + "' , '" + idMentor + "' , '" + titulo + "' , '" + asunto + "' , '" + fecha + "' , '" + horaI + "' , '" + horaF + "')"
    }else{
        query = "INSERT into consultoria (idEmpConsultoria, idMentorConsultoria, nombreConsultoria, asuntoConsultoria, fechaConsultoria, comentarioConsultoria, horaInicio, horaFin )" 
        + "VALUES ('" + idEmp + "' , '" + idMentor + "' , '" + titulo + "' , '" + asunto + "' , '" + fecha + "' , '" + comentario + "' , '" + horaI + "' , '" + horaF + "')"
    }

    pool.query(query , (err, data) =>{        
        res.send(data);
    });
}

Mentor.CrearTarea = (req,res) =>{
    console.log(req.body);
    const {nombreT, etapa, desT, fechaTarea, idEmp, idMentor} = req.body;
    const {filename} = req.file;
    var query;
    if(filename){
        query = "INSERT INTO tarea (idEmpTarea, idMenTarea, nombreTarea, fechaTarea,idEtapaTarea,archivoM, descripcionTarea) VALUES ('" + idEmp + "','" + idMentor + 
        "','" + nombreT + "','" + fechaTarea + "'," + etapa + ",'" + filename + "','" + desT + "')";
    }else{
        query = "INSERT INTO tarea (idEmpTarea, idMenTarea, nombreTarea, fechaTarea,idEtapaTarea, descripcionTarea) VALUES ('" + idEmp + "','" + idMentor + 
        "','" + nombreT + "','" + fechaTarea + "'," + etapa + ",'" +  desT + "')";
    }
    console.log(query);
}

Mentor.getTareas = (req,res) =>{
    const {idEmprendedor} = req.query;
    const query  = "SELECT idEmpTarea as 'Cedula Emprendedor', nombreTarea as 'Nombre Tarea', CASE WHEN T.fechaEntrega  = 0 THEN 'No' ELSE 'Si' END as 'Fecha Limite', CASE WHEN T.entregada = 0 THEN 'No' ELSE 'Si' END AS Entregada, CASE WHEN T.revisada = 0 THEN 'No' ELSE 'Si' END AS Revisada FROM tarea as T JOIN usuarios as U ON T.idEmpTarea = U.cedula WHERE idEmpTarea = "+idEmprendedor
    pool.query(query,(err,data) =>{
        res.send(data);
    })
}



>>>>>>> Stashed changes
module.exports = Mentor;