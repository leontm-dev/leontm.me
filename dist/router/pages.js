"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Project-Imports
const pages_1 = require("../controller/pages");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
// Code
const router = express_1.default.Router();
exports.default = () => {
    router.get("/", pages_1.openHomePage);
    router.get("/about", pages_1.openAboutPage);
    router.get("/account", isAuthenticated_1.isAuthenticated, pages_1.openAccountPage);
    router.get("/login", pages_1.openLoginPage);
    router.get("/app-store", pages_1.openAppStorePage);
    router.get("/projects", pages_1.openProjectsPage);
    router.get("/projects/betterTracker", pages_1.openBetterTrackerPage);
    router.get("/projects/learnCode", pages_1.openLearnCodePage);
    router.get("/register", pages_1.openRegisterPage);
    return router;
};
