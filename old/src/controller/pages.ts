// Imports

import express from "express";

// Code

const openHomePage = (req: express.Request, res: express.Response) => {
  res.render("home");
};
const openAboutPage = (req: express.Request, res: express.Response) => {
  res.render("about");
};
const openAccountPage = (req: express.Request, res: express.Response) => {
  res.render("account");
};
const openProjectsPage = (req: express.Request, res: express.Response) => {
  res.render("projects");
};
const openLoginPage = (req: express.Request, res: express.Response) => {
  res.render("login");
};
const openRegisterPage = (req: express.Request, res: express.Response) => {
  res.render("signup");
};
const openAppStorePage = (req: express.Request, res: express.Response) => {
  res.render("app-store");
};
//Projects
const openBetterTrackerPage = (req: express.Request, res: express.Response) => {
  res.render("projects/betterTracker");
};
const openLearnCodePage = (req: express.Request, res: express.Response) => {
  res.render("projects/learnCode");
};

// Exports

export {
  openHomePage,
  openAboutPage,
  openAccountPage,
  openProjectsPage,
  openLoginPage,
  openRegisterPage,
  openAppStorePage,
  openBetterTrackerPage,
  openLearnCodePage,
};
