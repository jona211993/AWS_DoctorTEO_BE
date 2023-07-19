//authorizacion
import jwt from "jsonwebtoken";
import config from "../config";
import User from '../models/m_user'
import Role from '../models/m_role'

// Esta funcion es para verificacion del token de sesion
export const verifyToken= async (req, res,next) => {
    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({message:"No mando el token "})
    
        const decoded = jwt.verify(token,config.SECRET)
        req.userId=decoded.id;
    
        const user = await User.findById(req.userId,{password:0})
        if(!user) return res.status(404).json({message: "usuario no encontrado"})
    
        next()
    } catch (error) {
        return res.status(500).json({message: 'No autorizado'})
    }
   
};
// Esta funcion es para verificacion de que el usuario logueado es un Administrador
export const EsAdmin= async (req, res,next) => {
  const user=await User.findById(req.userId);
  const roles= await Role.find({_id: { $in: user.roles} });
    if(roles[0].name === "admin"){
        next();
        return;
    }
  
 return res.status(403).json({message:"Requiere Rol Administrador"});
};
// Esta funcion es para verificacion de que el usuario logueado es un Medico
export const EsMedico= async (req, res,next) => {
    const user=await User.findById(req.userId);
    console.log(user.roles)
    const roles= await Role.find({_id: { $in: user.roles} });
    
    if(roles[0].name === "medico"){
          next();
          return;
      }
    
   return res.status(403).json({message:"Requiere Rol Medico"});
  };

// Esta funcion es para verificacion de que el usuario logueado es un Paciente
 export const EsPaciente= async (req, res,next) => {
    const user=await User.findById(req.userId);
    const roles= await Role.find({_id: { $in: user.roles} });
  
      if(roles[0].name === "paciente"){
          next();
          return;
      }
    return res.status(403).json({message:"Requiere Rol Paciente"});
   };

  //  export const isJefeOrAlmacenero= async (req, res,next) => {
  //   const user=await User.findById(req.userId);
  //   const roles= await Role.find({_id: { $in: user.roles} });
  
  //     if(roles[0].name === "almacenero" || roles[0].name === "jefe_almacen"){
  //         next();
  //         return;
  //     }
  //   return res.status(403).json({message:"Requiere Rol de Jefe o Almacenero "});
   //};