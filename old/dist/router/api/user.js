"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const user_1 = require("../../controller/user");
// Code
exports.default = (router) => {
    router.get("/users", user_1.getAllUsers);
    router.get("/users/:id", user_1.getUserById);
    router.get("/users/username/:username", user_1.getUserByUsername);
    router.get("/users/session/:sessionToken", user_1.getUserBySessionToken);
    router.put("/users/auth/:id", user_1.updateUserAuth);
    router.put("/users/info/:id", user_1.updateUserInfo);
    router.put("/users/services/:id", user_1.updateUserServices);
    router.delete("/users/:id", user_1.deleteUser);
};
