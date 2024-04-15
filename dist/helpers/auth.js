"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.random = void 0;
const crypto_1 = __importDefault(require("crypto"));
// Code
const random = () => crypto_1.default.randomBytes(128).toString("base64");
exports.random = random;
const auth = (salt, password) => {
    return crypto_1.default
        .createHmac("sha512", [salt, password].join("/"))
        .update(process.env.GLOBAL_SECRET)
        .digest("hex");
};
exports.auth = auth;
