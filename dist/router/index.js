"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Project-Imports
const pages_1 = require("../controller/pages");
// Presets
const router = express_1.default.Router();
// Code
exports.default = () => {
    router.get("/", pages_1.openHomePage);
    router.get("/about", pages_1.openAboutPage);
    return router;
};
