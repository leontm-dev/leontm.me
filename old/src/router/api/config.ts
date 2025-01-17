// Imports

import express from "express";

// Project-Imports

import {
  getVersion,
  getConfig,
  getImportableRepos,
  createConfig,
  addImportableRepo,
  editImportableRepo,
  updateVersion,
  removeImportableRepo,
} from "../../controller/config";

// Code

export default (router: express.Router) => {
  router.get("/config/version", getVersion);
  router.get("/config", getConfig);
  router.get("/config/importable-repos", getImportableRepos);
  router.post("/config", createConfig);
  router.post("/config/importable-repo", addImportableRepo);
  router.put("/config/importable-repo", editImportableRepo);
  router.put("/config/version", updateVersion);
  router.delete("/config/importable-repo", removeImportableRepo);
};
