import { TaskRepository } from "../repositories/taskRepository";

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
  console.log("thinssssss", id);
  await TaskRepository.delete({ id: id });
}

export async function updateTask(
  id: number,
  description: string,
  targetDate: Date,
  complete: boolean
) {
  console.log("id", id);
  const task = await TaskRepository.findOneBy({ id: id });
  if (!task) {
    throw new Error("nope");
  }
  task.description = description;
  task.targetDate = targetDate;
  task.complete = complete;
  return TaskRepository.save(task);
}
