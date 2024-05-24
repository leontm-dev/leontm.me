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
    let tier2 = false;
    let tier1 = false;
    if (tier === 3) {
        if (req.baseUrl === "leontm.me") {
            tier3 = true;
        }
    }
    else if (tier === 2) {
        if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
            tier2 = true;
        }
    }
    else if (tier === 1) {
    }
    if (tier === 3 && tier3) {
        return true;
    }
    else if ((tier === 2 && tier2) || tier3) {
        return true;
    }
    else if ((tier === 1 && tier1) || (tier2 && tier2) || (tier3 && tier3)) {
        return true;
    }
    else {
        return false;
    }
};
// Exports
exports.default = validateReq;
