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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signUp = void 0;
var app_data_source_1 = require("../app-data-source");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_entity_1 = require("../entity/user.entity");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UserRepository = app_data_source_1.dataSource.getRepository(user_entity_1.User);
function signUp(name, email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var existingUser, passwordHash, newUser, createdUser, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("name", name, "email", email, "pass", password);
                    return [4 /*yield*/, UserRepository.findOneBy({ email: email })];
                case 1:
                    existingUser = _a.sent();
                    if (existingUser) {
                        throw new Error("User already exists. Pleas log in.");
                    }
                    return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
                case 2:
                    passwordHash = _a.sent();
                    newUser = new user_entity_1.User();
                    newUser.name = name;
                    newUser.email = email;
                    newUser.password = passwordHash;
                    newUser.token = "";
                    newUser.tasks = [];
                    return [4 /*yield*/, UserRepository.create(newUser)];
                case 3:
                    createdUser = _a.sent();
                    token = jsonwebtoken_1.default.sign({ email: createdUser.email }, "supersecretjwtsecret", { expiresIn: "2h" });
                    createdUser.token = token;
                    return [4 /*yield*/, UserRepository.save(createdUser)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, createdUser];
            }
        });
    });
}
exports.signUp = signUp;
function loginUser(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var existingUser, validPassword, payload, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserRepository.findOneBy({ email: email })];
                case 1:
                    existingUser = _a.sent();
                    if (!existingUser) {
                        throw new Error("No user with this email exists. Please create an account.");
                    }
                    return [4 /*yield*/, bcryptjs_1.default.compare(password, existingUser.password)];
                case 2:
                    validPassword = _a.sent();
                    if (!validPassword) {
                        throw new Error("Invalid password.");
                    }
                    payload = { email: existingUser.email };
                    token = jsonwebtoken_1.default.sign(payload, "supersecretjwtsecret", {
                        expiresIn: "2h",
                    });
                    existingUser.token = token;
                    return [4 /*yield*/, UserRepository.save(existingUser)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, existingUser];
            }
        });
    });
}
exports.loginUser = loginUser;