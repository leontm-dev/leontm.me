"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Code
dotenv_1.default.config();
const validateReq = (req, tier) => {
    const result1 = req.url.startsWith("https://leontm.me") ||
        req.headers["leontm-auth"] == `DEV ${process.env.ADMIN_KEY}`;
    const result = result1;
    return result;
};
// Exports
exports.default = validateReq;
