"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
// Code
const isFromMainReferer = (req, res, next) => {
    const referer = req.get("Referer");
    if (referer && referer.startsWith("https://leontm.me")) {
        next();
    }
    else {
        res.status(403).json((0, sendApiResponse_1.default)(403, null, "Forbidden")).end();
    }
};
// Exports
exports.default = isFromMainReferer;
