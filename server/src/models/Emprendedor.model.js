const pool = require('../database')

const Emprendedor = {}

Emprendedor.postDiagnostico = (req , res) => {
    const {cedula,fechaNacimiento, ciudad, direccion, celular, vinculoConU, programa, nombreEmprendimiento,descripcionEmprendimiento,tipoEmprendimiento,necedidadEmprendimiento,clienteEmprendimiento,validacionesEmprendimiento,instrumentosValidacion,tipoEconomia,genero} = req.body;
    const query = "UPDATE emprendedor SET fechaNacimiento = '" + fechaNacimiento + "', celular = '" + celular + "', direccion = '" + direccion+ "', genero = '" + genero + "', programa = '" + programa  + "', ciudad = '" + ciudad + "' WHERE cedula = '" + cedula + "';"

    pool.query(query, (err, data) =>{
        if(err){
            res.send(err);
        }else{            
            const resultado1 = data;
            const archivo = req.file.originalname;
            const query2 = "INSERT INTO diagnostico(nombreIniciativa,idea,necesidad,cliente,desValidaciones,instrumentoValidacion,tipoEmprendimiento,tipoEconomia,idEmpDiag, vinculoConU, archivo) VALUES "
                            + "('" + nombreEmprendimiento + "','" + descripcionEmprendimiento + "','" + necedidadEmprendimiento + "','" + clienteEmprendimiento +  "','" + 
                            validacionesEmprendimiento + "','" + instrumentosValidacion + "','" + tipoEmprendimiento + "','" + tipoEconomia + "','" + cedula + "','" + vinculoConU +"', '" + archivo + "')";
            pool.query(query2, (err,data) =>{
                if(err){
                    res.send(err);
                }else{
                    res.send({res1:resultado1, res2:data});         
                }
            })    
        }
    })
}

Emprendedor.getDiagnostico = async (req,res) =>{
    const {idEmprendedor} = req.query
    const consulta = "SELECT revisado FROM DIAGNOSTICO AS D JOIN EMPRENDEDOR AS E ON  E.cedula = D.idEmpDiag WHERE E.cedula = '" + idEmprendedor +"'";
    await pool.query(consulta,(err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }        
    })
    
}

Emprendedor.getEtapa = (req,res) => {
    const {idEmp} = req.query;
    const query = "SELECT idEtapaRuta FROM ruta WHERE idEmpRuta = " + idEmp;
    pool.query(query, (err , data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data)
        }
    })
}

Emprendedor.getTareas = (req,res) =>{
    const {idEmprendedor} = req.query;
    const query = "SELECT  T.idTarea as 'N',nombreTarea as 'Nombre de tarea', M.nombreCompleto as 'Mentor', DATE_FORMAT(fechaTarea, '%d/%m/%Y - %h:%i %p') as 'Fecha Entrega',E.etapa as 'Etapa de la Tarea', IF(T.entregada = 0,'No','Si') AS Entregada, IF(T.aprobada = 0,'No','Sí') AS Aprobada FROM tarea as T JOIN usuarios as M ON T.idMenTarea = M.cedula JOIN etapa as E ON T.idEtapaTarea = E.idetapa WHERE T.idEmpTarea = " + idEmprendedor;
    pool.query(query, (err,data) =>{
        res.send(data);
    });
}

Emprendedor.EnviarTarea = (req,res) =>{
    const {originalname} = req.file;
    const {idTarea} = req.body;
    console.log(originalname);
    const query = "UPDATE tarea SET entregada = 1 , archivoE = '" + originalname + "' WHERE idTarea = " + idTarea;
    pool.query(query,(err,data)=>{
        res.send(data)
    })
}

Emprendedor.getConsultorias = (req,res) =>{
    const {idEmp} = req.query
    const query = "SELECT nombreCompleto as 'Nombre Emprendedor', nombreConsultoria as 'Nombre consultoría', asuntoConsultoria as 'Asunto Consultoría', DATE_FORMAT(fechaConsultoria, '%d/%m/%Y') as 'Fecha Consultoría', TIME_FORMAT(horaInicio, '%l:%i %p') as 'Hora inicio', TIME_FORMAT(horaFin, '%l:%i %p') as 'Hora fin' FROM consultoria as C JOIN mentor as M ON C.idMentorConsultoria = M.cedula JOIN usuarios as U ON C.idMentorConsultoria = U.cedula JOIN emprendedor as E ON C.idEmpConsultoria = E.cedula WHERE E.cedula =" + idEmp;
    pool.query(query, (err,data)=>{
        res.send(data);
    })
}

module.exports = Emprendedor;




