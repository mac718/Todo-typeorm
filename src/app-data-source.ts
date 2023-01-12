import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "todo",
  entities: ["src/entity/*.js"],
  logging: true,
  synchronize: true,
});

export const testData = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "todo-test",
  entities: ["src/entity/*.js"],
  logging: true,
  synchronize: true,
});
