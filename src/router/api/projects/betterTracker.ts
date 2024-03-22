// Imports

import express from "express";

// Project-Imports

import { createSmurf } from "../../../projects/BetterTrackerExtension/controller/smurf";

// Code

export default (router: express.Router) => {
  router.post("/projects/BetterTracker/smurf/create", createSmurf);
};
