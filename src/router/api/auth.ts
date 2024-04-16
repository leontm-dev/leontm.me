// Imports

import express from "express";

// Project-Imports

import { register, login } from "../../controller/auth";

// Code

export default (router: express.Router) => {
  router.post("/api/auth/register", register);
  router.post("/api/auth/login", login);
};
