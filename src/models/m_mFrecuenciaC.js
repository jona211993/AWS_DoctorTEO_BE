import { Schema, model } from "mongoose";
const m_frecuenciaCSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },
    
    valor: {
      type: Number,
      min: 0, max:100      
    },
    unidad: {
      type: String,
      default: "PR-Bpm"
    },
    comentario: {
      type: String,
    },   
    creadoEn: {
      type: Date,
      default: Date.now,
    },         
  },
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
  { collection: "MedFrecuenciaC" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_FrecuenciaC = model("m_frecuenciaC", m_frecuenciaCSchema);
module.exports = M_FrecuenciaC;
