"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const auth_1 = require("../../controller/auth");
// Code
exports.default = (router) => {
    router.post("/auth/register", auth_1.register);
    router.post("/auth/login", auth_1.login);
    router.get("/auth/usernames", auth_1.checkForUsernames);
};
