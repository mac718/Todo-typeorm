"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../entity/user.entity");
var config_1 = __importDefault(require("config"));
var db = config_1.default.get("database");
exports.myDataSource = new typeorm_1.DataSource(db);
exports.UserRepository = exports.myDataSource.getRepository(user_entity_1.User);
