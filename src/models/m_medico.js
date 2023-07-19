import { Schema, model } from "mongoose";
const User = require('../models/m_usuario');
const medicoSchema = new Schema(
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
    especialidad:{
      type: String,           
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
  { collection: "Medicos" },
  { timestamps: true, versionKey: false }
);

const Medico = User.discriminator('Medico', medicoSchema);

export default Medico; // Exportar como objeto predeterminado