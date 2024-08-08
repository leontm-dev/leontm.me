"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Project-Imports
// API
const auth_1 = __importDefault(require("./api/auth"));
const users_1 = __importDefault(require("./api/users"));
const test_1 = __importDefault(require("./api/test"));
// Projects
const betterTracker_1 = __importDefault(require("./api/projects/betterTracker"));
const excludeMe_1 = __importDefault(require("./api/projects/excludeMe"));
const config_1 = __importDefault(require("./api/config"));
const easylogs_1 = __importDefault(require("./api/projects/easylogs"));
// Presets
const router = express_1.default.Router();
// Code
exports.default = () => {
    // API
    (0, auth_1.default)(router);
    (0, users_1.default)(router);
    (0, test_1.default)(router);
    (0, config_1.default)(router);
    // Projects
    (0, betterTracker_1.default)(router);
    (0, excludeMe_1.default)(router);
    (0, easylogs_1.default)(router);
    return router;
};
