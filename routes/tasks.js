import express from "express";
import taskController from "../controllers/tasks.js";

const router = express.Router();

// Rutas de la API para la gestión de tareas.

// POST / - Crea una nueva tarea.
router.post('/', taskController.create);

// GET /:id - Obtiene una tarea por su ID.
router.get('/:id', taskController.getOne);

// GET / - Obtiene todas las tareas.
router.get('/', taskController.getAll);

// PUT /:id - Actualiza una tarea por su ID.
router.put('/:id', taskController.update);

// DELETE /:id - Elimina una tarea por su ID.
router.delete('/:id', taskController.delete);

export default router;
