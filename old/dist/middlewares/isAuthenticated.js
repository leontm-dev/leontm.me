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
exports.isAuthenticated = void 0;
const lodash_1 = require("lodash");
// Project-Imports
const users_1 = require("../db/users");
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
// Code
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sessionToken = req.cookies["LEONTM-AUTH"];
        if (!sessionToken) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "SessionToken is unavailable"))
                .render("login");
        }
        const user = yield (0, users_1.getUBySessionToken)(sessionToken);
        if (!user) {
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "SessionToken is invalid."))
                .render("login");
        }
        (0, lodash_1.merge)(req, { identity: user });
        return next();
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Our fault."))
            .render("login");
    }
});
exports.isAuthenticated = isAuthenticated;
