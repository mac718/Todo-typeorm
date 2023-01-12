"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
var app_data_source_1 = require("../app-data-source");
var task_entity_1 = require("../entity/task.entity");
exports.TaskRepository = app_data_source_1.myDataSource.getRepository(task_entity_1.Task);
