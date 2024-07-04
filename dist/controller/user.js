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
exports.getAllUsers = void 0;
// Project-Imports
const user_1 = require("../db/user");
const sendApiResponse_1 = __importDefault(require("../helpers/sendApiResponse"));
const validateReq_1 = __importDefault(require("../helpers/validateReq"));
// Code
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, validateReq_1.default)(req, 1).p)
            return res
                .status(403)
                .json((0, sendApiResponse_1.default)(403, null, "No permissions for this request."))
                .end();
        const users = yield (0, user_1.getAllU)();
        res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, users, "The resource you requested."))
            .end();
    }
    catch (error) {
        console.error(error);
        res.status(500).json().end();
    }
});
exports.getAllUsers = getAllUsers;
