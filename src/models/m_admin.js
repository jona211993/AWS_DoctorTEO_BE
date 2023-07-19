import { Schema, model } from "mongoose";
const User = require('../models/m_usuario');
const adminSchema = new Schema(
  {  
    nombre: {
      type: String,
    },
    apellidoPaterno: {
      type: String,
    },
    apellidoMaterno: {
      type: String,
    },
    dni:{
      type:String,
      unique: true,      
    },         
    celular: {
      type: String,
    }, 
    direccion: {
      type: String,
    },   
    imagenURL: {
      type: String,
    },
    
  },
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
  { collection: "Admin" },
  { timestamps: true, versionKey: false }
);

const Admin = User.discriminator('Admin', adminSchema);

export default Admin; // Exportar como objeto predeterminado