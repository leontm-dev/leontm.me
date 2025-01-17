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
exports.create = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Presets
const smurfSchema = new mongoose_1.default.Schema({
    url: {
        type: String,
        required: true,
    },
    statsOnSave: {
        playtime: {
            type: Number,
            required: true,
        },
        kda: {
            type: Number,
            required: true,
        },
        winRate: {
            type: Number,
            required: true,
        },
        hsRate: {
            type: Number,
            required: true,
        },
    },
    savedOn: {
        type: Date,
        default: Date.now,
    },
});
const smurfModel = mongoose_1.default.model("smurf", smurfSchema, "BetterTrackerExtension-Smurfs");
// Functions
const create = (url, statsOnSave) => __awaiter(void 0, void 0, void 0, function* () { return yield smurfModel.create({ url, statsOnSave }); });
exports.create = create;
