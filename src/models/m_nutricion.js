const mongoose = require('mongoose');

const dietaSchema = new mongoose.Schema({
  id_paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente', // Referencia al modelo 'Paciente'
    required: true
  },
  dia: {
    type: String,
  },
  desayuno: {
    type: String,
  },
  almuerzo: {
    type: String,
  },
  cena: {
    type: String,
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

const Dieta = mongoose.model('Dieta', dietaSchema);

module.exports = Dieta;
