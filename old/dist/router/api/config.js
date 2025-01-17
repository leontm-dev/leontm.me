"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const config_1 = require("../../controller/config");
// Code
exports.default = (router) => {
    router.get("/config/version", config_1.getVersion);
    router.get("/config", config_1.getConfig);
    router.get("/config/importable-repos", config_1.getImportableRepos);
    router.post("/config", config_1.createConfig);
    router.post("/config/importable-repo", config_1.addImportableRepo);
    router.put("/config/importable-repo", config_1.editImportableRepo);
    router.put("/config/version", config_1.updateVersion);
    router.delete("/config/importable-repo", config_1.removeImportableRepo);
};
