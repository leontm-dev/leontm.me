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
  router.get("/users/all", getAllUsers);
  router.get("/users/get?id=", getUserById);
  router.get("/users/get?username=", getUserByUsername);
  router.get("/users/get?sessionToken=", getUserBySessionToken);
  router.put("/users/auth/update?id=", updateUserAuth);
  router.put("/users/info/update?id=", updateUserInfo);
  router.put("/users/services/update?id=", updateUserServices);
  router.delete("/users/delete?id=", deleteUser);
};
