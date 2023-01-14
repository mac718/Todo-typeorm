import express from "express";
import { tasks } from "./routes/tasks";
import cors from "cors";
import { myDataSource } from "./repositories/taskRepository";

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
