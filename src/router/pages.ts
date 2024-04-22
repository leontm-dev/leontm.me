// Imports

import express from "express";

// Project-Imports

import {
  openHomePage,
  openAboutPage,
  openAccountPage,
  openLoginPage,
  openAppStorePage,
  openProjectsPage,
  openRegisterPage,
} from "../controller/pages";
import { isAuthenticated } from "../middlewares/isAuthenticated";

// Code

const router = express.Router();

export default (): express.Router => {
  router.get("/", openHomePage);
  router.get("/about", openAboutPage);
  router.get("/account", isAuthenticated, openAccountPage);
  router.get("/login", openLoginPage);
  router.get("/app-store", openAppStorePage);
  router.get("/projects", openProjectsPage);
  router.get("/register", openRegisterPage);
  return router;
};
