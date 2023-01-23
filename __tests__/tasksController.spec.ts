const request = require("supertest");
import {
  getAllTasks,
  getUserTasks,
  createTask,
} from "../src/services/tasksService";
import { signUp } from "../src/services/usersService";
import { getTasks } from "../src/controllers/tasksController";
import { dataSource } from "../src/app-data-source";
import { app } from "../src/app";
import { Task } from "../src/entity/Task.entity";
import { User } from "../src/entity/User.entity";
import * as dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
  await dataSource.initialize();
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
      await signUp("Guy", "email@email.com", "password");
      await createTask(
        "new task",
        false,
        new Date("1-23-23"),
        "email@email.com"
      );
      Object.defineProperty(window.document, "cookie", {
        writable: true,
        value: "user=email@email.com",
      });
      const res = await request(app).get("/api/v1/tasks");
      expect(res.status).toBe(200);
    });
  });
});
