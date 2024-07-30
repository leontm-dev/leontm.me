// Imports

import express from "express";

// Project-Imports

import {
  createServer,
  getServer,
  updateLanguageForServer,
  updateLogChannelForServer,
  updateSettingsForServer,
  deleteServer,
} from "../../../projects/EasyLogs/controller/server";

// Code

export default (router: express.Router) => {
  router.post("/projects/EasyLogs/server/create", createServer);
  router.get("/projects/EasyLogs/server/get", getServer);
  router.put(
    "/projects/EasyLogs/server/updateLanguage",
    updateLanguageForServer
  );
  router.put(
    "/projects/EasyLogs/server/updateLogChannel",
    updateLogChannelForServer
  );
  router.put(
    "/projects/EasyLogs/server/updateSettings",
    updateSettingsForServer
  );
  router.delete("/projects/EasyLogs/server/delete", deleteServer);
};
