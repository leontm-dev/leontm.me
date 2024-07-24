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
exports.getImportableRepos = exports.editImportableRepo = exports.removeImportableRepo = exports.addImportableRepo = exports.updateVersion = exports.getVersion = exports.getConfig = exports.createConfig = void 0;
// Project-Imports
const config_1 = require("../db/config");
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
const validateReq_1 = __importDefault(require("../helpers/validateReq"));
// Code
const createConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 6).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        if (!req.body.version)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Please provide a version"))
                .end();
        const config = yield (0, config_1.createC)(req.body.version);
        if (!config)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Failed to create config"))
                .end();
        res.status(201).json((0, sendApiResponse_1.default)(201, config, "Created")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.createConfig = createConfig;
const getConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 3).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        const config = yield (0, config_1.getC)();
        if (!config)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Config not found"))
                .end();
        res.status(200).json((0, sendApiResponse_1.default)(200, config, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.getConfig = getConfig;
const getVersion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const version = yield (0, config_1.getV)();
        if (!version)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Version not found"))
                .end();
        res.status(200).json((0, sendApiResponse_1.default)(200, version, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.getVersion = getVersion;
const updateVersion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 6).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        if (!req.body.version)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Please provide a version"))
                .end();
        const version = yield (0, config_1.updateV)(req.body.version);
        if (!version)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Failed to update version"))
                .end();
        const newVersion = yield (0, config_1.getV)();
        res.status(200).json((0, sendApiResponse_1.default)(200, { newVersion }, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.updateVersion = updateVersion;
const addImportableRepo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 6).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        if (!req.body.repo)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Please provide a repo"))
                .end();
        const config = yield (0, config_1.getC)();
        if (!config)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Config not found"))
                .end();
        if (config.importableRepos.find((r) => r.name === req.body.repo.name) ||
            config.importableRepos.find((r) => r.url === req.body.repo.url)) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Repo url is already loaded."))
                .end();
        }
        const repo = yield (0, config_1.addIR)(req.body.repo);
        if (!repo)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Failed to add repo"))
                .end();
        res.status(200).json((0, sendApiResponse_1.default)(200, repo, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.addImportableRepo = addImportableRepo;
const removeImportableRepo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 6).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        if (!req.body.repo)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Please provide a repo"))
                .end();
        const repo = yield (0, config_1.removeIR)(req.body.repo);
        if (!repo)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Failed to remove repo"))
                .end();
        res.status(200).json((0, sendApiResponse_1.default)(200, repo, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.removeImportableRepo = removeImportableRepo;
const editImportableRepo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 6).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        if (!req.body.repo)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Please provide a repo"))
                .end();
        const repo = yield (0, config_1.editIR)(req.body.repo);
        if (!repo)
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Failed to edit repo"))
                .end();
        res.status(200).json((0, sendApiResponse_1.default)(200, repo, "OK")).end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.editImportableRepo = editImportableRepo;
const getImportableRepos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 3).p)
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "You have to have a higher tier"))
                .end();
        const config = yield (0, config_1.getC)();
        if (!config)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Config not found"))
                .end();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, config.importableRepos, "OK"))
            .end();
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error: error }, "Internal Server Error"))
            .end();
    }
});
exports.getImportableRepos = getImportableRepos;
