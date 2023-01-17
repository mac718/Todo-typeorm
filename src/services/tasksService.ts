//import { TaskRepository } from "../repositories/taskRepository";
import { Task } from "../entity/task.entity";
import { dataSource } from "../app-data-source";
import { User } from "../entity/user.entity";
import { tasks } from "../routes/tasks";

const TaskRepository = dataSource.getRepository(Task);
const UserRepository = dataSource.getRepository(User);

export async function getUserTasks(email: string) {
  let user = await UserRepository.findOneBy({ email });
  if (!user) {
    user = new User();
  }
  return await TaskRepository.find({
    relations: { user: true },
    where: { user: { email: email } },
  });
}
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
  targetDate: Date,
  email: string
) {
  let user = await UserRepository.findOneBy({ email: email });
  console.log("usersmoozer", email);
  if (!user) {
    user = new User();
  }
  const newTask = new Task();
  newTask.description = description;
  newTask.complete = complete;
  newTask.targetDate = targetDate;
  newTask.user = user;

  const task = await TaskRepository.create(newTask);

  await TaskRepository.save(task);
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
