// Imports

import express from "express";

// Project-Imports

import user from "./api/user";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  user(router);
  return router;
};
