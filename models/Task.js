const mongoose = require('mongoose');

// Definir el esquema (Schema) para el modelo 'Task'
const taskSchema = new mongoose.Schema({
  // 'title': tipo de dato String, es obligatorio y se elimina el espacio en blanco al inicio/final
  title: {
    type: String,
    required: true,
    trim: true,
  },
  // 'description': tipo de dato String, no es obligatorio
  description: {
    type: String,
    required: false,
  },
  // 'completed': tipo de dato Booleano, con un valor predeterminado de 'false'
  completed: {
    type: Boolean,
    default: false,
  },
  // Opcional: añade una marca de tiempo para saber cuándo se creó la tarea
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportar el modelo de Mongoose
// 'Task' es el nombre que se usará para la colección en MongoDB
module.exports = mongoose.model('Task', taskSchema);