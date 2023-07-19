import { Schema, model } from "mongoose";
const m_oximetriaSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },
    
    saturacion: {
      type: Number,
      min: 0, max:100      
    },
    unidad: {
      type: String,
      default: "%SpO2"
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
  { collection: "MedOximetria" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_Oximetria = model("m_oximetria", m_oximetriaSchema);
module.exports = M_Oximetria;
