"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const server_1 = require("../../../projects/EasyLogs/controller/server");
// Code
exports.default = (router) => {
    router.post("/projects/easyLogs/server/create", server_1.createServer);
    router.get("/projects/easyLogs/server/get", server_1.getServer);
    router.put("/projects/easyLogs/server/updateLanguage", server_1.updateLanguageForServer);
    router.put("/projects/easyLogs/server/updateLogChannel", server_1.updateLogChannelForServer);
    router.put("/projects/easyLogs/server/updateSettings", server_1.updateSettingsForServer);
    router.delete("/projects/easyLogs/server/delete", server_1.deleteServer);
};
