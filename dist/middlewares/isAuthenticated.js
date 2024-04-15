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
const lodash_1 = require("lodash");
// Project-Imports
const user_1 = require("../db/user");
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
// Code
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sessionToken = req.cookies["LEONTM-AUTH"];
        if (!sessionToken) {
            return res
                .status(401)
                .json((0, sendApiResponse_1.default)(401, null, "The sessionToken is missing"))
                .end();
        }
        const user = yield (0, user_1.getUBySessionToken)(sessionToken);
        if (!user) {
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "The sessionToken is invalid"))
                .end();
        }
        (0, lodash_1.merge)(req, { identity: user });
        return next();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" }).end();
    }
});
