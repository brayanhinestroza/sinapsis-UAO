const pool = require('../database')
const Mentor = {}

Mentor.getMentores = (req , res) => {
    const query = "SELECT M.cedula, U.nombreCompleto from mentor as M JOIN usuarios as U ON M.cedula = U.cedula where U.tipoUsuario = 'Mentor' AND U.estado=1"
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
    const query = "SELECT idConsultoria as Número, idEmpConsultoria as 'Cédula', nombreCompleto as 'Nombre Emprendedor', nombreConsultoria as 'Nombre Consultoría', asuntoConsultoria as 'Asunto Consultoría', DATE_FORMAT(fechaConsultoria, '%d/%m/%Y') as 'Fecha Consultoría', TIME_FORMAT(horaInicio, '%l:%i %p') as 'Hora inicio', TIME_FORMAT(horaFin, '%l:%i %p') as 'Hora fin'  FROM consultoria as C JOIN usuarios as U ON C.idEmpConsultoria = U.cedula where idEmpConsultoria = " + req.query.idEmprendedor;
    pool.query(query, (err,data) =>{
        res.send(data);
    })
}

Mentor.crearConsultoria = (req,res) =>{
    const {idEmp, idMentor, titulo, fecha, horaI, horaF, asunto} = req.body.SinError;
    const query = "INSERT into consultoria (idEmpConsultoria, idMentorConsultoria, nombreConsultoria, asuntoConsultoria, fechaConsultoria, horaInicio, horaFin)" 
        + "VALUES ('" + idEmp + "' , '" + idMentor + "' , '" + titulo + "' , '" + asunto + "' , '" + fecha + "' , '" + horaI + "' , '" + horaF + "')";
    pool.query(query , (err, data) =>{        
        res.send(data);
    });
}

Mentor.revisarConsultoria = (req,res) =>{
    const {idConsultoria} = req.query
    const query = "SELECT nombreConsultoria, asuntoConsultoria, DATE_FORMAT(fechaConsultoria, '%d/%m/%Y') as fechaConsultoria, TIME_FORMAT(horaInicio, '%l:%i %p') as horaInicio, TIME_FORMAT(horaFin, '%l:%i %p') as horaFin from Consultoria where idConsultoria = " + idConsultoria;
    pool.query(query,(err,data)=>{
        res.send(data);
    })
}

Mentor.ComentarConsultoria = (req,res) =>{
    const {idConsultoria, comentario} = req.body
    const query = "UPDATE consultoria SET comentarioConsultoria ='"+ comentario+ "' WHERE idConsultoria = " + idConsultoria;
    pool.query(query,(err,data)=>{
        res.send(data);
    })
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
    const query = "SELECT archivoM, archivoE, nombreTarea, descripcionTarea, IF(comentario IS NULL, 'No hay comentarios', comentario ) AS comentario, IF(entregada = 1, true, false ) AS entregada FROM tarea WHERE idTarea = " + idTarea
    pool.query(query, (err,data) =>{
        res.send(data);
    })
}

Mentor.calificarTarea = (req,res) =>{
    const {comentario, calificatarea, idTarea} = req.body;
    const query = "UPDATE tarea SET comentario = '" + comentario + "' , aprobada = '" + calificatarea + "' , revisada=1 WHERE idTarea = " + idTarea; 
    pool.query(query,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
}


module.exports = Mentor;