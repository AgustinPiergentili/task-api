import express from "express";
import taskController from "../controllers/tasks.js";

const router = express.Router();         

router.post('/', taskController.create);  
router.get('/:id', taskController.getOne);
router.get('/', taskController.getAll);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

export default router;