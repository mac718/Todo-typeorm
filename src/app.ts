import express from "express";
import cookieParser from "cookie-parser";
import { tasks } from "./routes/tasks";
import cors from "cors";
import { users } from "./routes/users";
import { dataSource } from "./app-data-source";

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const PORT: number = 3000;

//enable cors - allow credentials (for cookies) from localhost:5173
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/users", users);

app.listen(PORT, (): void => {
  console.log(`Listening on port: ${PORT}`);
});
