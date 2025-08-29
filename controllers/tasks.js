import taskModelo from "../models/task.js";

class taskController {
    // Constructor de la clase, sin lógica inicial.
    constructor() {
    }

    // Crea una nueva tarea en la base de datos.
    async create(req, res) {
        try {
            const data = await taskModelo.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Actualiza una tarea existente.
    async update(req, res) {
        try {
            res.status(201).json({ message: "update" });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Elimina una tarea de la base de datos.
    async delete(req, res) {
        try {
            const data = await taskModelo.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Obtiene todas las tareas de la base de datos.
    async getAll(req, res) {
        try {
            res.status(201).json({ message: "get all" });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Obtiene una sola tarea de la base de datos.
    async getOne(req, res) {
        try {
            res.status(201).json({ message: "get one" });
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new taskController();