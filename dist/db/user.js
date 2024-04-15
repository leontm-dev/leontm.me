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
exports.updateUInfo = exports.updateUServices = exports.updateUAuth = exports.getUBySessionToken = exports.getUById = exports.getUbyUsername = exports.deleteU = exports.createU = exports.getAllU = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Presets
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    auth: {
        connections: [
            {
                salt: {
                    type: String,
                    required: true,
                    select: false,
                },
                key: {
                    type: String,
                    required: true,
                    select: false,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
        ],
        password: {
            salt: {
                type: String,
                required: true,
                select: false,
            },
            key: {
                type: String,
                required: true,
                select: false,
            },
        },
        session: {
            salt: {
                type: String,
                required: true,
                select: false,
            },
            key: {
                type: String,
                required: true,
                select: false,
            },
        },
        devices: [
            {
                name: {
                    type: String,
                    required: true,
                },
                ip: {
                    salt: {
                        type: String,
                        required: true,
                        select: false,
                    },
                    address: {
                        type: String,
                        required: true,
                        select: false,
                    },
                },
            },
        ],
    },
    services: {
        used: [
            {
                name: {
                    type: String,
                    required: true,
                },
                data: {
                    type: Object,
                    required: true,
                },
                first: {
                    type: Date,
                    required: true,
                },
            },
        ],
        userInfo: {
            profilePic: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
            shownConnections: {
                type: [String],
                default: [],
            },
            tags: {
                type: [String],
                default: [],
            },
            permissions: {
                admin: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editUsers: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editPermissions: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editOwnProfile: {
                    type: Boolean,
                    default: true,
                    select: false,
                },
                editOtherProfile: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                checkDatabase: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editProducts: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editGlobalSettings: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editLocalSettings: {
                    type: Boolean,
                    default: true,
                    select: false,
                },
            },
        },
    },
});
const UserModel = mongoose_1.default.model("User", userSchema, "user");
exports.UserModel = UserModel;
// Code
const getAllU = () => __awaiter(void 0, void 0, void 0, function* () { return UserModel.find(); });
exports.getAllU = getAllU;
const createU = (username, auth) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.create({ username, auth }); });
exports.createU = createU;
const deleteU = (username) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findOneAndDelete({ username }); });
exports.deleteU = deleteU;
const getUbyUsername = (username) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findOne({ username }); });
exports.getUbyUsername = getUbyUsername;
const getUBySessionToken = (sessionToken) => UserModel.findOne({ "auth.session.key": sessionToken });
exports.getUBySessionToken = getUBySessionToken;
const getUById = (id) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findById(id); });
exports.getUById = getUById;
const updateUAuth = (username, auth) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findOneAndUpdate({ username }, { auth }); });
exports.updateUAuth = updateUAuth;
const updateUServices = (username, services) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findOneAndUpdate({ username }, { services }); });
exports.updateUServices = updateUServices;
const updateUInfo = (username, userInfo) => __awaiter(void 0, void 0, void 0, function* () { return UserModel.findOneAndUpdate({ username }, { userInfo }); });
exports.updateUInfo = updateUInfo;
