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
exports.login = exports.register = void 0;
// Project-Imports
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
const user_1 = require("../db/user");
const auth_1 = require("../helpers/auth");
const validateReq_1 = __importDefault(require("../helpers/validateReq"));
// Code
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        if (!(0, validateReq_1.default)(req, 1))
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "You forgot either username or password in your request body. Check that again."))
                .end();
        }
        let passwordSalt = (0, auth_1.random)();
        let sessionSalt = (0, auth_1.random)();
        const user = yield (0, user_1.createU)(username, {
            connections: [{}],
            password: { salt: passwordSalt, key: (0, auth_1.auth)(passwordSalt, password) },
            session: {
                salt: sessionSalt,
                key: (0, auth_1.auth)(sessionSalt, (0, auth_1.random)()),
            },
            devices: [
                {
                    name: "Start-Device",
                    ip: {
                        salt: (0, auth_1.random)(),
                        address: req.ip,
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
        if (((_a = user.auth) === null || _a === void 0 ? void 0 : _a.session) != null) {
            user.auth.session.salt = (0, auth_1.random)();
            user.auth.session.key = (0, auth_1.auth)(user.auth.session.salt, user._id.toString());
        }
        yield user.save();
        return res
            .cookie("LEONTM-AUTH", (_c = (_b = user.auth) === null || _b === void 0 ? void 0 : _b.session) === null || _c === void 0 ? void 0 : _c.key, { domain: "localhost" })
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
    var _d, _e, _f, _g, _h, _j, _k;
    try {
        if (!(0, validateReq_1.default)(req, 1))
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
        const user = yield user_1.UserModel.findOne({ username: username }).select("+auth.password.salt +auth.password.key");
        if (!user) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Something went wrong with getting the user. The username may be incorrect."))
                .end();
        }
        if (((_e = (_d = user.auth) === null || _d === void 0 ? void 0 : _d.password) === null || _e === void 0 ? void 0 : _e.key) !==
            (0, auth_1.auth)((_g = (_f = user.auth) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.salt, password)) {
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "The given password is not matching with the one linked to the given username."))
                .end();
        }
        if (((_h = user.auth) === null || _h === void 0 ? void 0 : _h.session) != null) {
            user.auth.session.salt = (0, auth_1.random)();
            user.auth.session.key = (0, auth_1.auth)(user.auth.session.salt, user._id.toString());
        }
        yield user.save();
        return res
            .cookie("LEONTM-AUTH", (_k = (_j = user.auth) === null || _j === void 0 ? void 0 : _j.session) === null || _k === void 0 ? void 0 : _k.key, {
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
            .json((0, sendApiResponse_1.default)(500, null, "Internal server error, we will check it."))
            .end();
    }
});
exports.login = login;
