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
exports.deleteUser = exports.updateUserServices = exports.updateUserInfo = exports.updateUserAuth = exports.getUser = exports.getAllUsers = void 0;
// Project-Imports
const users_1 = require("../db/users");
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
const validateReq_1 = __importDefault(require("../helpers/validateReq"));
// Code
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const users = yield (0, users_1.getAllU)();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, users, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p) {
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        }
        const { id, username, token } = req.query;
        if (!id && !username && !token) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No identifier provided."))
                .end();
        }
        const user = id
            ? yield (0, users_1.getUById)(id)
            : username
                ? yield (0, users_1.getUbyUsername)(username)
                : token
                    ? yield (0, users_1.getUBySessionToken)(token)
                    : null;
        if (!user) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No identifier provided."))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.getUser = getUser;
const updateUserAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const user = yield (0, users_1.updateUAuth)(req.params.id, req.body);
        if (!user)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "User not found"))
                .end();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.updateUserAuth = updateUserAuth;
const updateUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { id } = req.query;
        if (!id)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No identifier provided."))
                .end();
        const body = req.body;
        if (!body)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No body provided."))
                .end();
        const user = yield (0, users_1.updateUInfo)(id, body);
        if (!user)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "User not found"))
                .end();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.updateUserInfo = updateUserInfo;
const updateUserServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { id } = req.query;
        if (!id)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No identifier provided."))
                .end();
        const body = req.body;
        if (!body)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No body provided."))
                .end();
        const user = yield (0, users_1.updateUServices)(id, body);
        if (!user)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "User not found"))
                .end();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.updateUserServices = updateUserServices;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { id } = req.query;
        if (!id)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No identifier provided."))
                .end();
        const user = yield (0, users_1.deleteU)(id);
        if (!user)
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "User not found"))
                .end();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal error"))
            .end();
    }
});
exports.deleteUser = deleteUser;
