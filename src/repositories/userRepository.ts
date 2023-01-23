import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/User.entity";
import config from "config";

let db: DataSourceOptions = config.get("database");

export const usersDataSource = new DataSource(db);

export const UserRepository = usersDataSource.getRepository(User);
