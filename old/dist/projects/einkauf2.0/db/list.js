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
exports.updateLById = exports.getLById = exports.deleteLById = exports.getAllL = exports.createL = exports.ListModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const listSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    items: {
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                reference: {
                    type: String,
                    required: false,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                bought: {
                    type: Number,
                    default: 0,
                },
                addedBy: {
                    type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                boughtBy: {
                    type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: "User",
                    required: false,
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
        default: [],
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
        ref: "einkauf2-0_Family",
        required: true,
    },
});
const ListModel = mongoose_1.default.model("einkauf2-0_List", listSchema, "einkauf2-0_Lists");
exports.ListModel = ListModel;
const createL = (name, creator) => __awaiter(void 0, void 0, void 0, function* () { return yield ListModel.create({ name, creator }); });
exports.createL = createL;
const getAllL = () => __awaiter(void 0, void 0, void 0, function* () { return yield ListModel.find(); });
exports.getAllL = getAllL;
const deleteLById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield ListModel.findByIdAndDelete(id); });
exports.deleteLById = deleteLById;
const getLById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield ListModel.findById(id); });
exports.getLById = getLById;
const updateLById = (id, items) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ListModel.findByIdAndUpdate(id, {
        items,
        lastUpdated: Date.now(),
    });
});
exports.updateLById = updateLById;
