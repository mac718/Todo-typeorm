"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_entity_1 = require("./User.entity");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Task.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Task.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Task.prototype, "targetDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Task.prototype, "complete", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_entity_1.User; }, function (user) { return user.tasks; }),
        __metadata("design:type", User_entity_1.User)
    ], Task.prototype, "user", void 0);
    Task = __decorate([
        (0, typeorm_1.Entity)("Task")
    ], Task);
    return Task;
}());
exports.Task = Task;
