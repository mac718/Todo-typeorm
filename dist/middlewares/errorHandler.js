"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var customError_1 = require("../errors/customError");
var errorHandlerMiddleware = function (err, req, res, next) {
    console.log("middles", err);
    if (err instanceof customError_1.CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    else {
        return res.status(500).json({ msg: "Somthing went wrong." });
    }
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
