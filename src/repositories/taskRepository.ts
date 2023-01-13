//import { myDataSource } from "../app-data-source";
//import { myDataSource } from "../../src/app";
import { DataSource, DataSourceOptions } from "typeorm";
import { Task } from "../entity/task.entity";
import config from "config";

let db: DataSourceOptions = config.get("database");

export const myDataSource = new DataSource(db);

export const TaskRepository = myDataSource.getRepository(Task);
