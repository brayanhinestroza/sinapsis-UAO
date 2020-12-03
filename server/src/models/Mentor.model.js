const pool = require('../database')
const Mentor = {}

Mentor.getMentores = (req , res) => {
    const query = "SELECT M.cedula, U.nombreCompleto from mentor as M JOIN usuarios as U where U.tipoUsuario = 'Mentor'"
    pool.query(query,(err, data) =>{
        res.send(data);
    });    
}

Mentor.getEmprendedor = (req,res) =>{
    const {idEmprendedor} = req.query
    pool.query("SELECT nombreCompleto from usuarios where cedula = " + idEmprendedor, (err,data) =>{
        res.send(data)
    })
}

Mentor.getEmprendedores = (req,res) =>{
    const {idMentor} = req.query;
    const query = "SELECT U.cedula as Cédula, U.nombreCompleto as 'Nombre Completo',U.correo as 'Correo Electrónico', E.celular as Celular FROM usuarios as U JOIN emprendedor as E ON U.cedula = E.cedula JOIN mentor_emprendedor as ME ON ME.idEmprenME = E.cedula WHERE ME.idMentorME = " + idMentor;
    pool.query(query, (err, data) =>{        
        res.send(data)    
    });
}

Mentor.getConsultorias = (req,res) =>{
    const query = "SELECT idEmpConsultoria as 'Cédula', nombreCompleto as 'Nombre Emprendedor', nombreConsultoria as 'Nombre Consultoría', asuntoConsultoria as 'Asunto Consultoría', DATE_FORMAT(fechaConsultoria, '%d/%m/%Y') as 'Fecha Consultoría', TIME_FORMAT(horaInicio, '%l:%i %p') as 'Hora inicio', TIME_FORMAT(horaFin, '%l:%i %p') as 'Hora fin'  FROM consultoria as C JOIN usuarios as U ON C.idEmpConsultoria = U.cedula where idEmpConsultoria = " + req.query.idEmprendedor;
    pool.query(query, (err,data) =>{
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
    const {nombreT, etapa, desT, fechaTarea, idEmp, idMentor} = req.body;
    var query;
    if(req.file){
        const {filename} = req.file;    
        query = "INSERT INTO tarea (idEmpTarea, idMenTarea, nombreTarea, fechaTarea,idEtapaTarea,archivoM, descripcionTarea) VALUES ('" + idEmp + "','" + idMentor + 
        "','" + nombreT + "','" + fechaTarea + "'," + etapa + ",'" + filename + "','" + desT + "')";
    }else{
        query = "INSERT INTO tarea (idEmpTarea, idMenTarea, nombreTarea, fechaTarea,idEtapaTarea, descripcionTarea) VALUES ('" + idEmp + "','" + idMentor + 
        "','" + nombreT + "','" + fechaTarea + "'," + etapa + ",'" +  desT + "')";
    }
    pool.query(query,(err,data) =>{
        res.send(data);
    });
}

Mentor.getTareas = (req,res) =>{
    const {idEmprendedor} = req.query;
    const query  = "SELECT idTarea as 'Numero', idEmpTarea as 'Cédula Emprendedor', nombreTarea as 'Nombre Tarea', DATE_FORMAT(T.fechaTarea, '%d/%m/%Y - %h:%i %p') as 'Fecha Límite', CASE WHEN T.entregada = 0 THEN 'No' ELSE 'Si' END AS Entregada, CASE WHEN T.revisada = 0 THEN 'No' ELSE 'Si' END AS Revisada FROM tarea as T JOIN usuarios as U ON T.idEmpTarea = U.cedula WHERE idEmpTarea = "+idEmprendedor
    pool.query(query,(err,data) =>{
        res.send(data);
    })
}

Mentor.revisarTarea = (req,res) =>{
    const {idTarea} = req.query
    const query = "SELECT archivoM FROM tarea WHERE idTarea = " + idTarea
    pool.query(query, (err,data) =>{
        res.send(data);
    })
}

Mentor.calificarTarea = (req,res) =>{
    const {comentario, calificatarea, idTarea} = req.body;
    const query = "UPDATE tarea SET comentario = '" + comentario + "' , Calificacion = '" + calificatarea + "' , revisada=1 WHERE idTarea = " + idTarea; 
    pool.query(query,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
}


module.exports = Mentor;