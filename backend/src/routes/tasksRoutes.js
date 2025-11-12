import express from "express"
import { createTask, deteteTask, getAllTasks, updateTask } from "../controllers/tasksControllers.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deteteTask);

export default router;