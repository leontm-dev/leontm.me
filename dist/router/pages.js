"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const pages_1 = require("../controller/pages");
// Code
exports.default = (router) => {
    router.get("/", pages_1.openHomePage);
    router.get("/about", pages_1.openAboutPage);
};
