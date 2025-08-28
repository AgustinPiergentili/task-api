import dbClient from "../config/dbClient.js";

// Define la clase 'taskModelo' para interactuar con la colección de tareas en la base de datos.
class taskModelo {
    async create(tasks) {
        const colTasks = dbClient.db.collection("tasks");
        return await colTasks.insertOne(tasks);
    }
}

export default new taskModelo();
