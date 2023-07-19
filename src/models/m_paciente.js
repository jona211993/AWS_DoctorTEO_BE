import { Schema, model } from "mongoose";
const User = require('../models/m_usuario');
const pacienteSchema = new Schema(
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
    edad:{
      type: Number,
           
    },  
    
    celular: {
      type: String,
    },
    tipoSangre: {
      type: String,
    },
    imagenURL: {
      type: String,
    },
    
  },
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
  { collection: "Pacientes" },
  { timestamps: true, versionKey: false }
);

const Paciente = User.discriminator('Paciente', pacienteSchema);

export default Paciente; // Exportar como objeto predeterminado