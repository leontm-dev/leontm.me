// Imports

import express from "express";

// Project-Imports

import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUserServices,
  updateUserAuth,
  updateUserInfo,
} from "../../controller/user";

// Code

export default (router: express.Router) => {
  router.get("/users/all", getAllUsers);
  router.get("/users/get", getUser);
  router.put("/users/services/update?id=", updateUserServices);
  router.put("/users/auth/update?id=", updateUserAuth);
  router.put("/users/info/update?id=", updateUserInfo);
  router.delete("/users/delete?id=", deleteUser);
};
