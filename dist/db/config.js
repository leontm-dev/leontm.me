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
exports.getV = exports.updateV = exports.createC = exports.getC = exports.editIR = exports.removeIR = exports.addIR = exports.Config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const importableRepoSchema = new mongoose_1.default.Schema({
    url: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    repoUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    command: {
        type: String,
        required: true,
    },
});
const configSchema = new mongoose_1.default.Schema({
    findMe: {
        type: String,
        required: true,
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now,
    },
    version: {
        type: String,
        required: true,
    },
    importableRepos: [importableRepoSchema],
});
const Config = mongoose_1.default.model("Config", configSchema, "Config");
exports.Config = Config;
const addIR = (repo) => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield Config.findOne({ findMe: "default" });
    return Config.updateOne({ findMe: "default" }, {
        importableRepos: config === null || config === void 0 ? void 0 : config.importableRepos.push(repo),
        lastModifiedAt: Date.now(),
    });
});
exports.addIR = addIR;
const removeIR = (repo) => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield Config.findOne({ findMe: "default" });
    return Config.updateOne({ findMe: "default" }, {
        importableRepos: config === null || config === void 0 ? void 0 : config.importableRepos.filter((r) => {
            if (r._id) {
                return r._id !== repo._id;
            }
        }),
        lastModifiedAt: Date.now(),
    });
});
exports.removeIR = removeIR;
const editIR = (repo) => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield Config.findOne({ findMe: "default" });
    return Config.updateOne({ findMe: "default" }, {
        importableRepos: config === null || config === void 0 ? void 0 : config.importableRepos.map((r) => {
            if (r._id === repo._id) {
                return repo;
            }
            return r;
        }),
        lastModifiedAt: Date.now(),
    });
});
exports.editIR = editIR;
const getC = () => __awaiter(void 0, void 0, void 0, function* () { return Config.findOne({ findMe: "default" }); });
exports.getC = getC;
const createC = (version) => __awaiter(void 0, void 0, void 0, function* () { return Config.create({ findMe: "default", version, importableRepos: [] }); });
exports.createC = createC;
const updateV = (version) => __awaiter(void 0, void 0, void 0, function* () {
    return Config.updateOne({ findMe: "default" }, { version, lastModifiedAt: Date.now() });
});
exports.updateV = updateV;
const getV = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield Config.findOne({ findMe: "default" });
    return config === null || config === void 0 ? void 0 : config.version;
});
exports.getV = getV;
