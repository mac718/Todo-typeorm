import { Task } from "../src/entity/Task.entity";
import { User } from "../src/entity/User.entity";
import {
  createTask,
  getAllTasks,
  getUserTasks,
} from "../src/services/tasksService";
import { signUp } from "../src/services/usersService";
import "reflect-metadata";
import { dataSource } from "../src/app-data-source";
import * as dotenv from "dotenv";
import { tasks } from "../src/routes/tasks";

dotenv.config();

beforeAll(async () => {
  await dataSource.initialize();
});

beforeEach(async () => {
  // await dataSource
  //   .createQueryBuilder()
  //   .relation(User, "user")
  //   .of(Task)
  //   .set(null);
  await dataSource.synchronize(true);
  //await dataSource.manager.query(`TRUNCATE TABLE "user" CASCADE`);
});

afterAll(async () => {
  await dataSource.destroy();
});

describe("Tasks Service", () => {
  describe("getUserTasks", () => {
    it("should return only tasks associated by the currently signed-in user", async () => {
      await signUp("Guy", "email@email.com", "password");
      await createTask(
        "new task",
        false,
        new Date("1-23-23"),
        "email@email.com"
      );
      const tasks = await getUserTasks("email@email.com");
      expect(tasks.every((task) => (task.user.email = "email@email.com"))).toBe(
        true
      );
    });
  });
});
