const pool = require('../database')
const Controlador = {}

Controlador.Iniciar_Sesion = async (req , res) => {
    const {cedula, contrasena} = req.body ;
    const query = "SELECT cedula FROM usuarios WHERE cedula = '" + cedula + "'"
    const query2 = "SELECT * FROM usuarios WHERE contraseña = '" + contrasena + "' AND cedula = " + cedula;

    pool.query(query, (err,data) =>{
        if(!err){
            if(data.length>0){
                pool.query(query2, (err,data) =>{
                    if(data.length>0){
                        res.send(data)
                    }else{
                        res.send({message: "Contraseña invalida"});
                    }
                });
            }else{
                res.send({message: "Usuario no existe"})
            }   
        }     
    } )
}

Controlador.Registro = (req, res) => {
    const {cedula, nombreCompleto, correo, estado, contrasena, tipoUsuario } = req.body
    const query = "INSERT INTO usuarios (cedula, nombreCompleto,correo,estado,contraseña,tipoUsuario) VALUES" + 
                " ('" + cedula + "','" +  nombreCompleto + "','" + correo + "',0,'" + contrasena + "','"
                + tipoUsuario + "')";    
    const query2 = "INSERT INTO "+ tipoUsuario +  " (cedula) values ('" + cedula + "')";
    
    pool.query(query,(err,data) =>{
        if(data){
            const resultado1 = data
            pool.query(query2,(err,data) =>{
                if(data){
                    res.send({res1:resultado1, res2:data});
                }                
            });
        }        
    });


    /*
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
                    console.log(res1);
                    console.log(res2);
                    res.send({res1:resultado1, res2:data});         
                }
            })         
        }
    })*/
}

Controlador.getEtapas = (req,res) =>{
    pool.query("SELECT * FROM ETAPA", (err,data)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            res.send(data);
        }
    })
}

Controlador.updateEtapa = (req,res) => {
    const {idEmp, etapa} = req.body;
    const query = "UPDATE ruta SET idEtapaRuta = " + etapa + " WHERE idEmpRuta =" + idEmp +"";
    pool.query(query, (err,data)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            res.send(data);
        }
    })
}

module.exports = Controlador;