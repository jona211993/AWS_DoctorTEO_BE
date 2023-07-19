import { Schema, model } from "mongoose";
const m_presion_arterialSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },

    sistolica: {
      type: Number,
    },
    diastolica: {
      type: Number,
    },
    unidad: {
      type: String,
      default: "mm Hg"
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
  { collection: "MedPresionA" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_PresionArterial = model("m_pa", m_presion_arterialSchema);
module.exports = M_PresionArterial;
