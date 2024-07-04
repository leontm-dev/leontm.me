// Imports

import express from "express";

// Project-Imports

import {
  getAllUsers,
  getUserById,
  getUserBySessionToken,
  getUserByUsername,
  deleteUser,
  updateUserAuth,
  updateUserInfo,
  updateUserServices,
} from "../../controller/user";

// Code

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.get("/users/:id", getUserById);
  router.get("/users/username/:username", getUserByUsername);
  router.get("/users/session/:sessionToken", getUserBySessionToken);
  router.put("/users/auth/:id", updateUserAuth);
  router.put("/users/info/:id", updateUserInfo);
  router.put("/users/services/:id", updateUserServices);
  router.delete("/users/:id", deleteUser);
};
