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
const setup_1 = __importDefault(require("./setup"));
const invite_1 = __importDefault(require("./invite"));
const help_1 = __importDefault(require("./help"));
const changeLanguage_1 = __importDefault(require("./changeLanguage"));
const ping_1 = __importDefault(require("./ping"));
const language_1 = __importDefault(require("./language"));
const settings_1 = __importDefault(require("./settings"));
const changeSettings_1 = require("./changeSettings");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    (0, setup_1.default)(client);
    (0, invite_1.default)(client);
    (0, help_1.default)(client);
    (0, changeLanguage_1.default)(client);
    (0, ping_1.default)(client);
    (0, language_1.default)(client);
    (0, settings_1.default)(client);
    (0, changeSettings_1.changeSettings)(client);
});
