import { myDataSource } from "../app-data-source";
import { Task } from "../entity/task.entity";

export const TaskRepository = myDataSource.getRepository(Task);
