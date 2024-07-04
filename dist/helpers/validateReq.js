"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Code
dotenv_1.default.config({ encoding: "utf-8" });
const validateReq = (req, tier) => {
    let tier6 = false;
    let tier5 = false;
    let tier4 = false;
    let tier3 = false;
    let tier2 = false;
    let tier1 = false;
    console.log(req.headers);
    if (tier === 6) {
        if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}` &&
            req.headers["x-leontm-tier"] === "6" &&
            req.headers["x-leontm-auth"] === process.env.ADMIN_KEY) {
            tier6 = true;
        }
    }
    else if (tier === 5) {
        if (req.baseUrl === "leontm.me" &&
            req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
            tier5 = true;
        }
    }
    else if (tier === 4) {
        if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
            tier4 = true;
        }
    }
    else if (tier === 3) {
        const websites = [];
        if (websites.includes(req.baseUrl)) {
            tier3 = true;
        }
    }
    else if (tier === 2) {
    }
    else if (tier === 1) {
    }
    if (tier === 6 && tier6) {
        return true;
    }
    else if ((tier === 5 && tier5) || tier6) {
        return true;
    }
    else if ((tier === 4 && tier4) || tier5 || tier6) {
        return true;
    }
    else if ((tier === 3 && tier3) || tier4 || tier5 || tier6) {
        return true;
    }
    else if ((tier === 2 && tier2) || tier3 || tier4 || tier5 || tier6) {
        return true;
    }
    else if ((tier === 1 && tier1) ||
        tier2 ||
        tier3 ||
        tier4 ||
        tier5 ||
        tier6) {
        return true;
    }
    return false;
};
// Exports
exports.default = validateReq;
