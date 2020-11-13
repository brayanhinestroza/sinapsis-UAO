const pool = require('../database')
const Controlador = {}

Controlador.Iniciar_Sesion = async (req , res) => {
    const {cedula, contrasena} = req.body ;
    const query = "SELECT * FROM usuarios WHERE cedula = '" + cedula + "' AND contraseña = '" + contrasena + "'";
    await pool.query(query, (err, data) =>{
        if(err){
            res.send(err);
        }else{
            res.send(data);         
        }
    } )
}

Controlador.Registro = async (req, res) => {
    const {cedula, nombreCompleto, correo, estado, contrasena, tipoUsuario } = req.body
    const query = "INSERT INTO usuarios (cedula, nombreCompleto,correo,estado,contraseña,tipoUsuario) VALUES" + 
                " ('" + cedula + "','" +  nombreCompleto + "','" + correo + "',0,'" + contrasena + "','"
                + tipoUsuario + "')";    
    const query2 = "INSERT INTO "+ tipoUsuario +  " (cedula) values ('" + cedula + "')";
    
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

Controlador.getEtapas = async (req,res) =>{
    await pool.query("SELECT * FROM ETAPA", (err,data)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log(data);
            res.send(data);
        }
    })
}

module.exports = Controlador;