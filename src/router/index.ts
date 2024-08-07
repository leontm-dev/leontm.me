// Imports

import express from "express";

// Project-Imports
// API

import auth from "./api/auth";
import user from "./api/users";
import test from "./api/test";

// Projects

import betterTracker from "./api/projects/betterTracker";
import excludeMe from "./api/projects/excludeMe";
import config from "./api/config";
import easylogs from "./api/projects/easylogs";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  // API
  auth(router);
  user(router);
  test(router);
  config(router);
  // Projects
  betterTracker(router);
  excludeMe(router);
  easylogs(router);
  return router;
};
