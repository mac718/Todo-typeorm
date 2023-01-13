"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tasks_1 = require("./routes/tasks");
var cors_1 = __importDefault(require("cors"));
var taskRepository_1 = require("./repositories/taskRepository");
//import { DataSource, DataSourceOptions } from "typeorm";
//let db: DataSourceOptions = config.get("database");
// db = JSON.parse(JSON.stringify(db));
// console.log("db", db);
//const myDataSource = new DataSource(db);
//console.log("db", myDataSource);
taskRepository_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = (0, express_1.default)();
var PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/tasks", tasks_1.tasks);
app.listen(PORT, function () {
    console.log("Listening on port: ".concat(PORT));
});
