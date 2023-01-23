"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = exports.tasksDataSource = void 0;
var typeorm_1 = require("typeorm");
var Task_entity_1 = require("../entity/Task.entity");
var config_1 = __importDefault(require("config"));
var db = config_1.default.get("database");
exports.tasksDataSource = new typeorm_1.DataSource(db);
exports.TaskRepository = exports.tasksDataSource.getRepository(Task_entity_1.Task);
