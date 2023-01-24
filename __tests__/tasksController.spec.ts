const request = require("supertest");
import {
  getAllTasks,
  getUserTasks,
  createTask,
} from "../src/services/tasksService";
import { signUp } from "../src/services/usersService";
import { createNewTask, getTasks } from "../src/controllers/tasksController";
import { register } from "../src/controllers/usersController";
import { dataSource } from "../src/app-data-source";
import { app } from "../src/app";
import { Task } from "../src/entity/Task.entity";
import { User } from "../src/entity/User.entity";
import * as dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
  await dataSource.initialize();
  const user = { name: "Guy", email: "email@email.com", password: "password" };
  await request(app).post("/api/v1/users").send(user);
});

beforeEach(async () => {
  await dataSource.synchronize(true);
  //await dataSource.manager.query(`TRUNCATE TABLE "public.User" CASCADE`);
});

afterAll(async () => {
  await dataSource.destroy();
});

describe("tasksController", () => {
  describe("getTasks", () => {
    it("returns OK when the request is valid", async () => {
      const task = {
        description: "new task",
        completed: false,
        targetDate: new Date("1-23-23"),
        userId: "email@email.com",
      };

      await request(app).post("/api/v1/tasks").send(task);

      const res = await request(app).get("/api/v1/tasks");
      expect(res.status).toBe(200);
    });
  });
});
