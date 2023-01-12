import express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./app-data-source";
import { Task } from "./entity/task.entity";
import { tasks } from "./routes/tasks";
import cors from "cors";

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

app.get("/", (req: Request, res: Response) => {
  res.send("herr0");
});

app.post("/thing", async (req: Request, res: Response) => {
  console.log("butts");
  const task = await myDataSource.getRepository(Task).create(req.body);
  const results = await myDataSource.getRepository(Task).save(task);
  res.send(results);
});

app.listen(PORT, (): void => {
  console.log(`Listening on port: ${PORT}`);
});
