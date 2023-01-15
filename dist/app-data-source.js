"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.testData = exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("config"));
exports.myDataSource = new typeorm_1.DataSource({
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
exports.testData = new typeorm_1.DataSource({
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
var db = config_1.default.get("database");
exports.dataSource = new typeorm_1.DataSource(db);
