"use strict";
// Imports
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServerLogChannel = exports.updateBotLanguage = exports.updateServerSettings = exports.createServer = exports.getServer = void 0;
// Project-Imports
const server_1 = require("../db/server");
// Code
const getServer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, server_1.get)(id);
        if (!server) {
            return false;
        }
        return server;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.getServer = getServer;
const createServer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, server_1.get)(id);
        if (server) {
            return false;
        }
        const newServer = yield (0, server_1.create)(id);
        if (!newServer) {
            return false;
        }
        return newServer;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createServer = createServer;
const updateServerSettings = (id, settings) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, server_1.get)(id);
        if (!server) {
            return false;
        }
        const updatedServer = yield (0, server_1.updateSettings)(id, settings);
        if (!updatedServer) {
            return false;
        }
        return updatedServer;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateServerSettings = updateServerSettings;
const updateBotLanguage = (id, language) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, server_1.get)(id);
        if (!server) {
            return false;
        }
        const updatedServer = yield (0, server_1.updateLanguage)(id, language);
        if (!updatedServer) {
            return false;
        }
        return updatedServer;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateBotLanguage = updateBotLanguage;
const updateServerLogChannel = (id, logChannel) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, server_1.get)(id);
        if (!server) {
            return false;
        }
        const updatedServer = yield (0, server_1.updateLogChannel)(id, logChannel);
        if (!updatedServer) {
            return false;
        }
        return updatedServer;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateServerLogChannel = updateServerLogChannel;
