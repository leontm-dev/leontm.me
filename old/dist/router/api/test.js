"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const test_1 = require("../../controller/test");
// Code
exports.default = (router) => {
    router.get("/test", test_1.testResponse);
};
