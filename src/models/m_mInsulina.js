import { Schema, model } from "mongoose";
const m_insulinaSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },
    
    cantidad: {
      type: Number,          
    },
    unidad: {
      type: String,
      default: "Unidades"
    },
    tipo: {
      type: String,
    },   
    creadoEn: {
      type: Date,
      default: Date.now,
    },         
  },
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
  { collection: "MedInsulina" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_Insulina = model("m_insulina", m_insulinaSchema);
module.exports = M_Insulina;
