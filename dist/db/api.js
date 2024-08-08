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
exports.updateAByKey = exports.deleteAByKey = exports.createA = exports.getAByKey = exports.getAllA = exports.ApiKey = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const apiKeySchema = new mongoose_1.default.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    tier: {
        type: Number,
        required: true,
    },
    owner: {
        ref: "User",
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
});
const ApiKey = mongoose_1.default.model("ApiKey", apiKeySchema, "Developer-API-Keys");
exports.ApiKey = ApiKey;
const getAllA = () => __awaiter(void 0, void 0, void 0, function* () { return yield ApiKey.find(); });
exports.getAllA = getAllA;
const getAByKey = (key) => __awaiter(void 0, void 0, void 0, function* () { return yield ApiKey.findOne({ key }); });
exports.getAByKey = getAByKey;
const createA = (key, tier, owner, name) => __awaiter(void 0, void 0, void 0, function* () { return yield ApiKey.create({ key, tier, owner, name }); });
exports.createA = createA;
const deleteAByKey = (key) => __awaiter(void 0, void 0, void 0, function* () { return yield ApiKey.findOneAndDelete({ key }); });
exports.deleteAByKey = deleteAByKey;
const updateAByKey = (key, tier, name) => __awaiter(void 0, void 0, void 0, function* () { return yield ApiKey.findOneAndUpdate({ key }, { tier, name }); });
exports.updateAByKey = updateAByKey;
