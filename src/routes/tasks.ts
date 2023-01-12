import express from "express";
import {
  getTasks,
  createNewTask,
  findOneTask,
  deleteOneTask,
  update,
} from "../controllers/tasksController";
import { body, param } from "express-validator";
export const tasks = express.Router();

tasks.route("/").get(getTasks);
tasks.route("/:id").get(param("id").isInt({ min: 1 }), findOneTask);
tasks
  .route("/")
  .post(body("description").not().isEmpty().trim().escape(), createNewTask);
tasks.route("/:id").delete(param("id").isInt({ min: 1 }), deleteOneTask);
tasks.route("/").put(update);
