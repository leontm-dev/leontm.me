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
exports.checkForUsernames = exports.login = exports.register = void 0;
// Project-Imports
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
const user_1 = require("../db/user");
const auth_1 = require("../helpers/auth");
const validateReq_1 = __importDefault(require("../helpers/validateReq"));
// Code
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { username, password, rememberMe } = req.body;
        if (!username || !password || !rememberMe) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "You forgot either username or password in your request body. Check that again."))
                .end();
        }
        let passwordSalt = (0, auth_1.random)();
        let sessionSalt = (0, auth_1.random)();
        let ipSalt = (0, auth_1.random)();
        const user = yield (0, user_1.createU)(username, {
            connections: [{}],
            password: { salt: passwordSalt, key: (0, auth_1.auth)(passwordSalt, password) },
            session: {
                salt: sessionSalt,
                key: (0, auth_1.auth)(sessionSalt, (0, auth_1.random)()),
            },
            devices: [
                {
                    name: "Standard",
                    ip: {
                        salt: ipSalt,
                        address: (0, auth_1.auth)(ipSalt, String(req.ip)),
                    },
                },
            ],
        });
        if (!user) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Something went wrong while creating the user. The username may be unavailable."))
                .end();
        }
        if (((_a = user.auth) === null || _a === void 0 ? void 0 : _a.connections) != null) {
            user.auth.connections[0].salt = (0, auth_1.random)();
            user.auth.connections[0].key = (0, auth_1.auth)(user.auth.connections[0].salt, user._id.toString());
            user.auth.connections[0].ip =
                ((_b = req.headers["x-forwarded-for"]) === null || _b === void 0 ? void 0 : _b.toString()) ||
                    req.connection.remoteAddress ||
                    "unknown";
        }
        yield user.save();
        return res
            .cookie("LEONTM-AUTH", (_d = (_c = user.auth) === null || _c === void 0 ? void 0 : _c.connections[0]) === null || _d === void 0 ? void 0 : _d.key, {
            domain: "https://leontm.me",
            expires: rememberMe
                ? undefined
                : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        })
            .status(200)
            .json((0, sendApiResponse_1.default)(200, user, "Your user."))
            .end();
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal error, we will be working on this."))
            .end();
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f, _g, _h, _j, _k, _l;
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "You forgot either username or password in the request body, please check it once more."))
                .end();
        }
        const user = yield user_1.UserModel.findOne({ username: username })
            .select("+auth.password.salt +auth.password.key")
            .populate("auth.connections");
        if (!user) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Something went wrong with getting the user. The username may be incorrect."))
                .end();
        }
        if (((_f = (_e = user.auth) === null || _e === void 0 ? void 0 : _e.password) === null || _f === void 0 ? void 0 : _f.key) !==
            (0, auth_1.auth)((_h = (_g = user.auth) === null || _g === void 0 ? void 0 : _g.password) === null || _h === void 0 ? void 0 : _h.salt, password)) {
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "The given password is not matching with the one linked to the given username."))
                .end();
        }
        if (((_j = user.auth) === null || _j === void 0 ? void 0 : _j.connections) != null) {
            const salt = (0, auth_1.random)();
            user.auth.connections.push({
                salt: salt,
                key: (0, auth_1.auth)(salt, user._id.toString()),
                ip: req.ip,
            });
        }
        yield user.save();
        return res
            .cookie("LEONTM-AUTH", (_l = (_k = user.auth) === null || _k === void 0 ? void 0 : _k.connections[user.auth.connections.length - 1]) === null || _l === void 0 ? void 0 : _l.key, {
            domain: "localhost",
        })
            .status(200)
            .json((0, sendApiResponse_1.default)(200, null, "You are now logged in."))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal server error, we will check it."))
            .end();
    }
});
exports.login = login;
const checkForUsernames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 5).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { username } = req.query;
        if (!username) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "No username given."))
                .end();
        }
        const user = yield (0, user_1.getUbyUsername)(username);
        if (!user) {
            return res
                .status(200)
                .json((0, sendApiResponse_1.default)(200, { available: true }, "Username available."))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, { available: false }, "Username not available."))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, { error }, "Internal server error"))
            .end();
    }
});
exports.checkForUsernames = checkForUsernames;
