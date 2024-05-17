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
    let tier3 = false;
    if (tier === 3) {
        if (req.baseUrl === "leontm.me") {
            tier3 = true;
        }
        else if (req.headers.authorization === `Authorization ${process.env.ADMIN_KEY}`) {
            tier3 = true;
        }
    }
    else if (tier === 2) {
    }
    else if (tier === 1) {
    }
    return true;
};
// Exports
exports.default = validateReq;
