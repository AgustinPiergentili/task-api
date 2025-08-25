import taskModelo from "../models/task.js";

class taskController {
    constructor() {
    }
    async create(req, res) {
        try{
            const data = taskModelo.create(req.body);
            res.status(201).json(data);
        } catch(e) {
            res.status(500).send(e);
        }
    }

        async update(req, res) {
          try{
            res.status(201).json({message: "update"});
        } catch(e) {
            res.status(500).send(e);
        }
    }

        async delete(req, res) {
        try{
            res.status(201).json({message: "delete"});
        } catch(e) {
            res.status(500).send(e);
        }
    }

        async getAll(req, res) {
        try{
            res.status(201).json({message: "get all"});
        } catch(e) {
            res.status(500).send(e);
        }

    }
        async getOne(req, res) {
            try{
            res.status(201).json({message: "get one"});
        } catch(e) {
            res.status(500).send(e);
        }
    }
}


export default new taskController();
