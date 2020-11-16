const pool = require('../database')

const Emprendedor = {}

Emprendedor.postDiagnostico = async (req , res) => {
    const {fechaNacimiento,direccion,genero,programa,nombreEmprendimiento,descripcionEmprendimiento,cedula,ciudad,celular,vinculoConU,Estudiante,necedidadEmprendimiento,clienteEmprendimiento,validacionesEmprendimeinto,instrumentosValidacion,tipoEmprendimiento,tipoEconomia, idEmprendedor} = req.body;
    const query = "UPDATE emprendedor SET fechaNacimiento = '" + fechaNacimiento + "', celular = '" + celular + "', direccion = '" + direccion+ "', genero = '" + genero + "', programa = '" + programa  + "' WHERE cedula = '" + cedula + "';"
    const query2 = "INSERT INTO diagnostico(nombreIniciativa,idea,necesidad,cliente,desValidaciones,instrumentoValidacion,tipoEmprendimiento,tipoEconomia,idEmpDiag) VALUES "
    + "('" + nombreEmprendimiento + "','" + descripcionEmprendimiento + "','" + necedidadEmprendimiento + "','" + clienteEmprendimiento + "','" + 
    validacionesEmprendimeinto + "','" + instrumentosValidacion + "','" + tipoEmprendimiento + "','" + tipoEconomia + "','" + cedula + "')";
    
    await pool.query(query, async (err, data) =>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            const resultado1 = data;
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

Emprendedor.getDiagnostico = async (req,res) =>{
    const {idEmprendedor} = req.query
    const consulta = "SELECT revisado FROM DIAGNOSTICO AS D JOIN EMPRENDEDOR AS E ON  E.cedula = D.idEmpDiag WHERE E.cedula = '" + idEmprendedor +"'"
    await pool.query(consulta,(err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }        
    })
    
}

module.exports = Emprendedor;




