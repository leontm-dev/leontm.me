"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const smurf_1 = require("../../../projects/BetterTrackerExtension/controller/smurf");
// Code
exports.default = (router) => {
    router.post("/projects/BetterTracker/smurf/create", smurf_1.createSmurf);
};
