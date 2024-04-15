// Imports

import express from "express";

// Project-Imports

import { openHomePage, openAboutPage } from "../controller/pages";

// Code

export default (router: express.Router) => {
  router.get("/", openHomePage);
  router.get("/about", openAboutPage);
  return router;
};
