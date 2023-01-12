"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
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
