import {
  getAllTasks,
  createTask,
  getOneTask,
  deleteTask,
  updateTask,
} from "../services/tasksService";
import { Task } from "../entity/task.entity";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { json } from "body-parser";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: Task[] = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

export const findOneTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ Error: "Invalid request" });
  }
  const id = Number(req.params.id);
  const task = await getOneTask(id);
  if (!task) {
    res.status(404).json({ error: "task not found." });
  } else {
    res.json(task);
  }
};

export const createNewTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ Error: "Invalid request" });
  }
  const { description, complete, targetDate } = req.body;
  const date = new Date(targetDate);
  const newTask = await createTask(description, complete, date);

  if (!newTask) {
    res.status(404).json({ error: "task not found." });
  } else {
    res.json(newTask);
  }
};

export const deleteOneTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ Error: "Invalid request" });
  }
  const id = Number(req.params.id);
  const result = await deleteTask(id);
  res.send(result);
};

export const update = async (req: Request, res: Response) => {
  console.log("thinhnhnh");
  const { id, description, targetDate, complete } = req.body;
  console.log(req.body);
  const updated = await updateTask(id, description, targetDate, complete);

  if (!updated) {
    res.status(404).json({ error: "item not found" });
  } else {
    res.status(200).json(updated);
  }
};
