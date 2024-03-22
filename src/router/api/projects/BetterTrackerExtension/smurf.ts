// Imports

import express from "express";
import { createSmurf } from "../../../../projects/BetterTrackerExtension/controller/smurf";

// Project-Imports

// Code

export default (router: express.Router) => {
  router.post("/projects/BetterTrackerExtension/smurf/create", createSmurf);
};
