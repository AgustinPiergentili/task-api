const express = require('express');
const router = express.Router();
const Task = require('./models/Task'); // Importa el modelo de la tarea

// 1. GET /tasks - Listar todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // Encuentra todas las tareas en la base de datos
    res.json(tasks); // Envía la respuesta en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Manejo de errores
  }
});

// 2. POST /tasks - Crear una nueva tarea
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title, // Obtiene el título del cuerpo de la petición
    description: req.body.description,
    completed: req.body.completed
  });

  try {
    const newTask = await task.save(); // Guarda la nueva tarea en la base de datos
    res.status(201).json(newTask); // Envía una respuesta 201 (creado)
  } catch (err) {
    res.status(400).json({ message: err.message }); // Error de validación
  }
});

// Middleware para encontrar una tarea por ID (se usa en GET, PUT, DELETE)
async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.task = task;
  next(); // Pasa al siguiente middleware o a la ruta
}

// 3. GET /tasks/:id - Obtener una tarea por ID
router.get('/:id', getTask, (req, res) => {
  res.json(res.task);
});

// 4. PUT /tasks/:id - Editar una tarea
router.put('/:id', getTask, async (req, res) => {
  // Actualiza los campos solo si se proporcionan en la petición
  if (req.body.title != null) {
    res.task.title = req.body.title;
  }
  if (req.body.description != null) {
    res.task.description = req.body.description;
  }
  if (req.body.completed != null) {
    res.task.completed = req.body.completed;
  }

  try {
    const updatedTask = await res.task.save(); // Guarda los cambios
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. DELETE /tasks/:id - Eliminar una tarea
router.delete('/:id', getTask, async (req, res) => {
  try {
    await res.task.deleteOne(); // Elimina la tarea de la base de datos
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;