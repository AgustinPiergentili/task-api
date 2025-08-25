import dbClient from "../config/dbClient.js";

class taskModelo {

    async create(tasks){
        const colTasks = dbClient.db.collection("tasks");
        return await colTasks.insertOne(tasks);
    }
}

export default new taskModelo();