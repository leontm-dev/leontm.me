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
  router.post("/projects/easyLogs/server/create", createServer);
  router.get("/projects/easyLogs/server/get", getServer);
  router.put(
    "/projects/easyLogs/server/updateLanguage",
    updateLanguageForServer
  );
  router.put(
    "/projects/easyLogs/server/updateLogChannel",
    updateLogChannelForServer
  );
  router.put(
    "/projects/easyLogs/server/updateSettings",
    updateSettingsForServer
  );
  router.delete("/projects/easyLogs/server/delete", deleteServer);
};
