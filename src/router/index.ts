// Imports

import express from "express";

// Project-Imports

import { openHomePage, openAboutPage } from "../controller/pages";

// Presets

const router = express.Router();

// Code

export default (): express.Router => {
  router.get("/", openHomePage);
  router.get("/about", openAboutPage);
  return router;
};
