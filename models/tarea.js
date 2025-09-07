const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  completada: {
    type: Boolean,
    default: false
  },
  prioridad: {
    type: String,
    enum: ['baja', 'media', 'alta'],
    default: 'baja'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tarea', tareaSchema);