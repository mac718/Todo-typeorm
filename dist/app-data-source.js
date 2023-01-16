"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("config"));
var db = config_1.default.get("database");
exports.dataSource = new typeorm_1.DataSource(db);
