import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/user.entity";
import config from "config";

let db: DataSourceOptions = config.get("database");

export const myDataSource = new DataSource(db);

export const UserRepository = myDataSource.getRepository(User);
