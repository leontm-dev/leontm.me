// Imports

import express from "express";

// Project-Imports

import user from "./api/user";
import betterTracker from "./api/projects/betterTracker";
/* import moreStreams from "./api/projects/moreStreams"; */
import auth from "./api/auth";
import test from "./api/test";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  user(router);
  auth(router);
  betterTracker(router);
  test(router);
  /*   moreStreams(router); */
  return router;
};
