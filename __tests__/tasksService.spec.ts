import { Task } from "../src/entity/task.entity";
import { getAllTasks } from "../src/services/tasksService";
import "reflect-metadata";
import { testData } from "../src/app-data-source";

beforeAll(async () => {
  await testData.initialize();
});

afterAll(async () => {
  await testData.destroy();
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
