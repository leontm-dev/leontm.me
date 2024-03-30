// Imports

import express from "express";

// Project-Imports

import { register, login, logout } from "../../controller/auth";

// Code

export default (router: express.Router) => {
  router.post("/api/auth/register", register);
  router.post("/api/auth/login", login);
  router.post("/api/auth/logout", logout);
};
