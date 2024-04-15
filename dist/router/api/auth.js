"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const auth_1 = require("../../controller/auth");
// Code
exports.default = (router) => {
    router.post("/api/auth/register", auth_1.register);
    router.post("/api/auth/login", auth_1.login);
};
