// Imports

import express from "express";

// Project-Imports

import user from "./api/user";
import betterTracker from "./api/projects/betterTracker";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  user(router);
  betterTracker(router);
  return router;
};
