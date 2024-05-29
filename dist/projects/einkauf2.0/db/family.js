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
exports.updateFById = exports.deleteFById = exports.getFByLeader = exports.getFById = exports.getAllF = exports.createF = exports.FamilyModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const familySchema = new mongoose_1.default.Schema({
    members: {
        type: [
            {
                user: {
                    type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                permissions: {
                    type: {
                        view: {
                            type: Boolean,
                            default: false,
                        },
                        delete: {
                            type: Boolean,
                            default: false,
                        },
                        add: {
                            type: Boolean,
                            default: false,
                        },
                        edit: {
                            type: Boolean,
                            default: false,
                        },
                        moderate: {
                            type: Boolean,
                            default: false,
                        },
                    },
                },
            },
        ],
        required: true,
    },
    leader: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const FamilyModel = mongoose_1.default.model("einkauf2-0_Family", familySchema, "einkauf2-0_Families");
exports.FamilyModel = FamilyModel;
const createF = (members, leader) => __awaiter(void 0, void 0, void 0, function* () { return yield FamilyModel.create({ members, leader }); });
exports.createF = createF;
const getAllF = () => __awaiter(void 0, void 0, void 0, function* () { return yield FamilyModel.find(); });
exports.getAllF = getAllF;
const getFById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield FamilyModel.findById(id); });
exports.getFById = getFById;
const getFByLeader = (leader) => __awaiter(void 0, void 0, void 0, function* () { return yield FamilyModel.findOne({ leader }); });
exports.getFByLeader = getFByLeader;
const deleteFById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield FamilyModel.findByIdAndDelete(id); });
exports.deleteFById = deleteFById;
const updateFById = (id, members) => __awaiter(void 0, void 0, void 0, function* () {
    yield FamilyModel.findByIdAndUpdate(id, {
        members,
    });
});
exports.updateFById = updateFById;
