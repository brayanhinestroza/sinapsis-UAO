const pool = require('../database')

const Emprendedor = {}

Emprendedor.GetAll = pool.query('SELECT * FROM usuarios')

Emprendedor.getRuta = pool.query('SELECT * FROM ETAPA')

Emprendedor.postDiagnostico = async (req , res) => {
    const {fechaNacimiento,direccion,genero,programa,nombreEmprendimiento,descripcionEmprendimiento,cedula,ciudad,celular,vinculoConU,Estudiante,necedidadEmprendimiento,clienteEmprendimiento,validacionesEmprendimeinto,instrumentosValidacion,tipoEmprendimiento,tipoEconomia, idEmprendedor} = req.body;
    const query = "UPDATE emprendedor SET fechaNacimiento = '" + fechaNacimiento + "', celular = '" + celular + "', dirección = '" + direccion+ "', genero = '" + genero + "', programa = '" + programa  + "' WHERE cedula = '" + cedula + "';"
    const query2 = "INSERT INTO diagnostico(nombreIniciativa,idea,necesidad,cliente,desValidaciones,instrumentoValidacion,tipoEmprendimiento,tipoEconomia,idEmpDiag) VALUES "
    + "('" + nombreEmprendimiento + "','" + descripcionEmprendimiento + "','" + necedidadEmprendimiento + "','" + clienteEmprendimiento + "','" + 
    validacionesEmprendimeinto + "','" + instrumentosValidacion + "','" + tipoEmprendimiento + "','" + tipoEconomia + "','" + cedula + "')";
    console.log(query2);
    pool.query(query).then((resultadoQ1) =>{
        console.log(resultadoQ1);
        const result2 =pool.query(query2);
    }
    )
}


module.exports = Emprendedor;




