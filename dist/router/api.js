"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Project-Imports
const user_1 = __importDefault(require("./api/user"));
const betterTracker_1 = __importDefault(require("./api/projects/betterTracker"));
/* import moreStreams from "./api/projects/moreStreams"; */
const auth_1 = __importDefault(require("./api/auth"));
const test_1 = __importDefault(require("./api/test"));
// Presets
const router = express_1.default.Router();
// Code
exports.default = () => {
    (0, user_1.default)(router);
    (0, auth_1.default)(router);
    (0, betterTracker_1.default)(router);
    (0, test_1.default)(router);
    /*   moreStreams(router); */
    return router;
};
