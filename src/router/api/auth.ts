// Imports

import express from "express";

// Project-Imports

import { register, login, checkForUsernames } from "../../controller/auth";

// Code

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.get("/auth/usernames", checkForUsernames);
};
