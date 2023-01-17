import express from "express";
import {
  getTasks,
  createNewTask,
  findOneTask,
  deleteOneTask,
  update,
} from "../controllers/tasksController";
import { body, param } from "express-validator";
import { checkToken } from "../middlewares/auth";
export const tasks = express.Router();

function isAfterNow(dateString: string): boolean {
  const date = new Date(dateString);
  return date > new Date();
}

tasks.route("/").get(checkToken, getTasks);
tasks.route("/:id").get(param("id").isInt({ min: 1 }), findOneTask);
tasks.route("/").post(
  body("description").not().isEmpty().trim().escape(),
  body("targetDate").custom((value) => isAfterNow(value)),
  checkToken,
  createNewTask
);
tasks.route("/:id").delete(param("id").isInt({ min: 1 }), deleteOneTask);
tasks.route("/").put(update);
