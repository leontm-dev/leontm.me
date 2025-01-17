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
exports.updateCByName = exports.updateCById = exports.getCByName = exports.getCById = exports.deleteCByName = exports.deleteCById = exports.getAllC = exports.createC = exports.CollectionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const collectionSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    lastUpdated: {
        type: Date,
        default: Date.now(),
    },
    creator: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    websites: {
        type: [String],
        default: [],
    },
});
const CollectionModel = mongoose_1.default.model("ExcludeMe-Collection", collectionSchema, "ExcludeMe-Collections");
exports.CollectionModel = CollectionModel;
const createC = (name, user, websites) => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.create({ name, creator: user, websites }); });
exports.createC = createC;
const getAllC = () => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.find(); });
exports.getAllC = getAllC;
const deleteCById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.findByIdAndDelete(id); });
exports.deleteCById = deleteCById;
const deleteCByName = (name) => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.findOneAndDelete({ name }); });
exports.deleteCByName = deleteCByName;
const getCById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.findById(id); });
exports.getCById = getCById;
const getCByName = (name) => __awaiter(void 0, void 0, void 0, function* () { return yield CollectionModel.findOne({ name }); });
exports.getCByName = getCByName;
const updateCById = (id, websites) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CollectionModel.findByIdAndUpdate(id, {
        websites,
        lastUpdated: Date.now(),
    });
});
exports.updateCById = updateCById;
const updateCByName = (name, websites) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CollectionModel.findOneAndUpdate({ name }, {
        websites,
        lastUpdated: Date.now(),
    });
});
exports.updateCByName = updateCByName;
// Path: src/db/user.ts
