// Imports

import express from "express";

// Project-Imports
// API

import auth from "./api/auth";
import user from "./api/user";
import test from "./api/test";

// Projects

import betterTracker from "./api/projects/betterTracker";
import excludeMe from "./api/projects/excludeMe";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  // API
  auth(router);
  user(router);
  test(router);
  // Projects
  betterTracker(router);
  excludeMe(router);
  return router;
};
