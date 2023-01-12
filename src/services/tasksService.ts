//import { TaskRepository } from "../repositories/taskRepository";
import { Task } from "../entity/task.entity";
import { myDataSource } from "../app-data-source";
const TaskRepository = myDataSource.getRepository(Task);

export async function getAllTasks() {
  return await TaskRepository.find();
}

export async function getOneTask(id: number) {
  try {
    return await TaskRepository.findOneBy({ id: id });
  } catch (err) {
    return err;
  }
}

export async function createTask(
  description: string,
  complete: boolean,
  targetDate: Date
) {
  const newTask = TaskRepository.create({ description, complete, targetDate });
  await TaskRepository.save(newTask);
  return newTask;
}

export async function deleteTask(id: number) {
  await TaskRepository.delete({ id: id });
}

export async function updateTask(
  id: number,
  description: string,
  targetDate: Date,
  complete: boolean
) {
  console.log("id", complete);
  const task = await TaskRepository.findOneBy({ id: id });
  if (!task) {
    return null;
  }
  task.description = description;
  task.targetDate = targetDate;
  task.complete = complete;
  return TaskRepository.save(task);
}
