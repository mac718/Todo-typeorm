import express from "express";
import { Request, Response } from "express";
//import { myDataSource } from "./app-data-source";
import { Task } from "./entity/task.entity";
import { tasks } from "./routes/tasks";
import cors from "cors";
import config from "config";
import { myDataSource } from "./repositories/taskRepository";
//import { DataSource, DataSourceOptions } from "typeorm";

//let db: DataSourceOptions = config.get("database");
// db = JSON.parse(JSON.stringify(db));
// console.log("db", db);

//const myDataSource = new DataSource(db);

//console.log("db", myDataSource);

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const PORT: number = 3000;

app.use(cors());
app.use(express.json());
app.use("/tasks", tasks);

app.listen(PORT, (): void => {
  console.log(`Listening on port: ${PORT}`);
});
