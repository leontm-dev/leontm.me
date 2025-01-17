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
exports.createSmurf = void 0;
// Project-Imports
const smurf_1 = require("../db/smurf");
const sendApiResponse_1 = __importDefault(require("../../../helpers/sendApiResponse"));
// Code
const createSmurf = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Body is necessary."))
                .end();
        const toBeCreated = req.body;
        delete toBeCreated.url;
        const smurf = yield (0, smurf_1.create)(req.body.url, toBeCreated);
        if (!smurf)
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Check the body once more."))
                .end();
        return res
            .status(204)
            .json((0, sendApiResponse_1.default)(204, null, "Smurf created."))
            .end();
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error, our bad."))
            .end();
    }
});
exports.createSmurf = createSmurf;
