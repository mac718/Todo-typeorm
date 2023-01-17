"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var usersController_1 = require("../controllers/usersController");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.users = router;
exports.users.route("/").post(usersController_1.register);
exports.users.route("/login").post(usersController_1.login);
