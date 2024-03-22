// Imports

import express from "express";

// Code

const openHomePage = (req: express.Request, res: express.Response) => {
  res.render("home");
};
const openAboutPage = (req: express.Request, res: express.Response) => {
  res.render("about");
};

// Exports

export { openHomePage, openAboutPage };
