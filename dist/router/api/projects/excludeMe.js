"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
// Code
exports.default = (router) => {
    router.post("/projects/excludeMe/collection/create");
    router.put("/projects/excludeMe/collection/update");
    router.delete("/projects/excludeMe/collection/delete");
    router.get("/projects/excludeMe/collection/get");
    router.get("/projects/excludeMe/collection/getAll");
};
