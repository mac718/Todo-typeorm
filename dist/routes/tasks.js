"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
var express_1 = __importDefault(require("express"));
var tasksController_1 = require("../controllers/tasksController");
var express_validator_1 = require("express-validator");
var auth_1 = require("../middlewares/auth");
exports.tasks = express_1.default.Router();
exports.tasks.route("/").get(auth_1.checkToken, tasksController_1.getTasks);
exports.tasks.route("/:id").get((0, express_validator_1.param)("id").isInt({ min: 1 }), tasksController_1.findOneTask);
exports.tasks
    .route("/")
    .post((0, express_validator_1.body)("description").not().isEmpty().trim().escape(), auth_1.checkToken, tasksController_1.createNewTask);
exports.tasks.route("/:id").delete((0, express_validator_1.param)("id").isInt({ min: 1 }), tasksController_1.deleteOneTask);
exports.tasks.route("/").put(tasksController_1.update);
