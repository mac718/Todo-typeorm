"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.deleteOneTask = exports.createNewTask = exports.findOneTask = exports.getTasks = void 0;
var tasksService_1 = require("../services/tasksService");
var express_validator_1 = require("express-validator");
var getTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tasks, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("helllooo");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, tasksService_1.getAllTasks)()];
            case 2:
                tasks = _a.sent();
                res.json(tasks);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                res.json({ error: err_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTasks = getTasks;
var findOneTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, id, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ Error: "Invalid request" })];
                }
                id = Number(req.params.id);
                return [4 /*yield*/, (0, tasksService_1.getOneTask)(id)];
            case 1:
                task = _a.sent();
                if (!task) {
                    res.status(404).json({ error: "task not found." });
                }
                else {
                    res.json(task);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.findOneTask = findOneTask;
var createNewTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, description, complete, targetDate, date, newTask;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ Error: "Invalid request" })];
                }
                _a = req.body, description = _a.description, complete = _a.complete, targetDate = _a.targetDate;
                date = new Date(targetDate);
                return [4 /*yield*/, (0, tasksService_1.createTask)(description, complete, date)];
            case 1:
                newTask = _b.sent();
                newTask.user = req.user.user_id;
                if (!newTask) {
                    res.status(404).json({ error: "task not found." });
                }
                else {
                    res.json(newTask);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.createNewTask = createNewTask;
var deleteOneTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, id, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ Error: "Invalid request" })];
                }
                id = Number(req.params.id);
                return [4 /*yield*/, (0, tasksService_1.deleteTask)(id)];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); };
exports.deleteOneTask = deleteOneTask;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, description, targetDate, complete, updated;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("thinhnhnh");
                _a = req.body, id = _a.id, description = _a.description, targetDate = _a.targetDate, complete = _a.complete;
                console.log(req.body);
                return [4 /*yield*/, (0, tasksService_1.updateTask)(id, description, targetDate, complete)];
            case 1:
                updated = _b.sent();
                if (!updated) {
                    res.status(404).json({ error: "item not found" });
                }
                else {
                    res.status(200).json(updated);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.update = update;
