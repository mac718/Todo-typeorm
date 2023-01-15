import { DataSource, DataSourceOptions } from "typeorm";
import config from "config";

const db: DataSourceOptions = config.get("database");

export const dataSource = new DataSource(db);
