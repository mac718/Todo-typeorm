import { Task } from "../src/entity/task.entity";
import { getAllTasks } from "../src/services/tasksService";
import "reflect-metadata";
import { dataSource } from "../src/app-data-source";

beforeAll(async () => {
  await dataSource.initialize();
});

afterAll(async () => {
  await dataSource.destroy();
});
describe("Tasks Service", () => {
  describe("getTasks", () => {
    it("should return all tasks", async () => {
      const tasks: Task[] = await getAllTasks();
      expect(tasks.length).toBe(1);
    });
  });
  describe("something", () => {
    it("should equal 4", () => {
      expect(2 + 2).toEqual(4);
    });
  });
});
