"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const users_1 = require("../../controller/users");
// Code
exports.default = (router) => {
    router.get("/users/all", users_1.getAllUsers);
    router.get("/users/get", users_1.getUser);
    router.put("/users/services/update?id=", users_1.updateUserServices);
    router.put("/users/auth/update?id=", users_1.updateUserAuth);
    router.put("/users/info/update?id=", users_1.updateUserInfo);
    router.delete("/users/delete?id=", users_1.deleteUser);
};
