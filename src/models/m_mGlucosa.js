import { Schema, model } from "mongoose";


const m_GlucosaSchema = new Schema(
  {
    id_paciente: {
      type: Schema.Types.ObjectId, ref: 'Paciente',      
    },

    nivel_glucosa: {
      type: Number,
    },
    unidad: {
      type: String,
      default: "mg/dl"
    },
    comentario: {
      type: String,
    },   
    creadoEn:{
      type: Date,
      default: Date.now
    }
  },
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
  { collection: "MedGlucosa" },
  { versionKey: false }



  );
// para encriptar
// El esquema ayuda a decirle a mongo db como van a lucir los datos
// CREANDO MODELOS:

let M_Glucosa = model("m_glucosa", m_GlucosaSchema);
module.exports = M_Glucosa;
