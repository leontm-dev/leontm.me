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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingsForServer = exports.updateLogChannelForServer = exports.updateLanguageForServer = exports.deleteServer = exports.getServer = exports.createServer = void 0;
// Project-Imports
const server_1 = require("../db/server");
const sendApiResponse_1 = __importDefault(require("../../../helpers/sendApiResponse"));
const validateReq_1 = __importDefault(require("../../../helpers/validateReq"));
// Code
const createServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId } = req.body;
        if (!discordId)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId is missing"))
                .end();
        if (yield (0, server_1.getS)(discordId))
            return res
                .status(409)
                .json((0, sendApiResponse_1.default)(409, null, "Server already exists"))
                .end();
        const server = yield (0, server_1.createS)(discordId);
        if (!server)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { server }, "Server created successfully"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.createServer = createServer;
const getServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId } = req.query;
        if (!discordId)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId is missing"))
                .end();
        const server = yield (0, server_1.getS)(discordId);
        if (!server)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Server not found"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, server, "Server found"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.getServer = getServer;
const deleteServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId } = req.body;
        if (!discordId)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId is missing"))
                .end();
        const server = yield (0, server_1.deleteS)(discordId);
        if (!server)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Server not found"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { server }, "Server deleted"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.deleteServer = deleteServer;
const updateLanguageForServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId, language } = req.body;
        if (!discordId || !language)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId or language is missing"))
                .end();
        const server = yield (0, server_1.updateLanguageForS)(discordId, language);
        if (!server)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Server not found"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { server }, "Server updated"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.updateLanguageForServer = updateLanguageForServer;
const updateLogChannelForServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId, logChannel } = req.body;
        if (!discordId || !logChannel)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId or logChannel is missing"))
                .end();
        const server = yield (0, server_1.updateLogChannelForS)(discordId, logChannel);
        if (!server)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Server not found"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { server }, "Server updated"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.updateLogChannelForServer = updateLogChannelForServer;
const updateSettingsForServer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 4))
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "Unauthorized"))
                .end();
        const { discordId, settings } = req.body;
        if (!discordId || !settings)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "discordId or settings is missing"))
                .end();
        const server = yield (0, server_1.updateSettingsForS)(discordId, settings);
        if (!server)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Server not found"))
                .end();
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { server }, "Server updated"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal Server Error"))
            .end();
    }
});
exports.updateSettingsForServer = updateSettingsForServer;
