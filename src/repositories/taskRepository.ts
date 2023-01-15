import { DataSource, DataSourceOptions } from "typeorm";
import { Task } from "../entity/task.entity";
import config from "config";

let db: DataSourceOptions = config.get("database");

export const tasksDataSource = new DataSource(db);

export const TaskRepository = tasksDataSource.getRepository(Task);
