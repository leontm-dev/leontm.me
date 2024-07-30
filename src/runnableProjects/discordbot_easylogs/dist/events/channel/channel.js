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
// Project-Imports
const create_1 = __importDefault(require("./create"));
const delete_1 = __importDefault(require("./delete"));
const pinsUpdate_1 = __importDefault(require("./pinsUpdate"));
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    (0, create_1.default)(client);
    (0, delete_1.default)(client);
    (0, pinsUpdate_1.default)(client);
});
