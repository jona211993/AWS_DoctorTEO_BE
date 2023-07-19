import { Schema, model } from "mongoose";
const m_pesoSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },
    
    valor: {
      type: Number,
    },
    unidad: {
      type: String,
      default: "Kg"
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
  { collection: "MedPeso" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_Peso = model("m_peso", m_pesoSchema);
module.exports = M_Peso;
