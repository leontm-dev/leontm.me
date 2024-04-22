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
import {} from "../middlewares/isAuthenticated";

// Code

export default (router: express.Router) => {
  router.get("/", openHomePage);
  router.get("/about", openAboutPage);
  router.get("/account", openAccountPage);
  router.get("/login", openLoginPage);
  router.get("/app-store", openAppStorePage);
  router.get("/projects", openProjectsPage);
  router.get("/register", openRegisterPage);
};
