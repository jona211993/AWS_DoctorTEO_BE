import { Schema, model } from "mongoose";
const m_temperaturaSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },

    nivel_temperatura: {
      type: Number,
      set: (value) => parseFloat(value.toFixed(1)),
    },
    unidad: {
      type: String,
      default: "°C"
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
  { collection: "MedTemperatura" },
  { versionKey: false }
);
// para encriptar

// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_Temperatura = model("m_temp", m_temperaturaSchema);
module.exports = M_Temperatura;