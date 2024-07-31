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
exports.updateSettingsForS = exports.updateLogChannelForS = exports.updateLanguageForS = exports.getS = exports.deleteS = exports.createS = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Code
const settingsSchema = new mongoose_1.default.Schema({
    applicationCommandPermissionsUpdate: {
        type: Boolean,
        default: false,
    },
    autoModerationActionExecution: {
        type: Boolean,
        default: true,
    },
    autoModerationRuleCreate: {
        type: Boolean,
        default: true,
    },
    autoModerationRuleDelete: {
        type: Boolean,
        default: true,
    },
    autoModerationRuleUpdate: {
        type: Boolean,
        default: false,
    },
    channelCreate: {
        type: Boolean,
        default: true,
    },
    channelDelete: {
        type: Boolean,
        default: true,
    },
    channelPinsUpdate: {
        type: Boolean,
        default: false,
    },
    channelUpdate: {
        type: Boolean,
        default: true,
    },
    emojiCreate: {
        type: Boolean,
        default: true,
    },
    emojiDelete: {
        type: Boolean,
        default: true,
    },
    emojiUpdate: {
        type: Boolean,
        default: false,
    },
    entitlementCreate: {
        type: Boolean,
        default: false,
    },
    entitlementDelete: {
        type: Boolean,
        default: false,
    },
    entitlementUpdate: {
        type: Boolean,
        default: false,
    },
    guildAuditLogEntryCreate: {
        type: Boolean,
        default: true,
    },
    guildBanAdd: {
        type: Boolean,
        default: true,
    },
    guildBanRemove: {
        type: Boolean,
        default: true,
    },
    guildInteractionUpdate: {
        type: Boolean,
        default: true,
    },
    guildMemberAdd: {
        type: Boolean,
        default: true,
    },
    guildMemberAvailable: {
        type: Boolean,
        default: false,
    },
    guildMemberRemove: {
        type: Boolean,
        default: true,
    },
    guildMemberUpdate: {
        type: Boolean,
        default: true,
    },
    guildScheduledEventCreate: {
        type: Boolean,
        default: true,
    },
    guildScheduledEventDelete: {
        type: Boolean,
        default: true,
    },
    guildScheduledEventUpdate: {
        type: Boolean,
        default: false,
    },
    guildScheduledEventUserAdd: {
        type: Boolean,
        default: false,
    },
    guildScheduledEventUserRemove: {
        type: Boolean,
        default: false,
    },
    guildUpdate: {
        type: Boolean,
        default: true,
    },
    integrationCreate: {
        type: Boolean,
        default: false,
    },
    inviteCreate: {
        type: Boolean,
        default: false,
    },
    inviteDelete: {
        type: Boolean,
        default: false,
    },
    messageCreate: {
        type: Boolean,
        default: false,
    },
    messageDeleteBulk: {
        type: Boolean,
        default: false,
    },
    messageReactionAdd: {
        type: Boolean,
        default: false,
    },
    messageReactionRemove: {
        type: Boolean,
        default: false,
    },
    messageReactionRemoveAll: {
        type: Boolean,
        default: false,
    },
    messageReactionRemoveEmoji: {
        type: Boolean,
        default: false,
    },
    messageUpdate: {
        type: Boolean,
        default: false,
    },
    roleCreate: {
        type: Boolean,
        default: true,
    },
    roleDelete: {
        type: Boolean,
        default: true,
    },
    roleUpdate: {
        type: Boolean,
        default: false,
    },
    stageInstanceCreate: {
        type: Boolean,
        default: false,
    },
    stageInstanceDelete: {
        type: Boolean,
        default: false,
    },
    stageInstanceUpdate: {
        type: Boolean,
        default: false,
    },
    stickerCreate: {
        type: Boolean,
        default: false,
    },
    stickerDelete: {
        type: Boolean,
        default: false,
    },
    stickerUpdate: {
        type: Boolean,
        default: false,
    },
    threadCreate: {
        type: Boolean,
        default: false,
    },
    threadDelete: {
        type: Boolean,
        default: false,
    },
    threadListSync: {
        type: Boolean,
        default: false,
    },
    threadMemberUpdate: {
        type: Boolean,
        default: false,
    },
    threadMembersUpdate: {
        type: Boolean,
        default: false,
    },
    threadUpdate: {
        type: Boolean,
        default: false,
    },
    typingStart: {
        type: Boolean,
        default: false,
    },
    userUpdate: {
        type: Boolean,
        default: false,
    },
    voiceStateUpdate: {
        type: Boolean,
        default: false,
    },
    webhookUpdate: {
        type: Boolean,
        default: true,
    },
});
const serverSchema = new mongoose_1.default.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now,
    },
    language: {
        type: String,
        default: "en",
    },
    logChannel: {
        type: String,
        default: "",
    },
    settings: {
        type: settingsSchema,
        required: false,
    },
});
serverSchema.pre("save", function (next) {
    const server = this;
    if (!server.settings) {
        server.settings = {};
    }
    this.settings = Object.assign({}, settingsSchema.obj, this.settings);
    next();
});
const ServerModel = mongoose_1.default.model("easylogs-servers", serverSchema, "EasyLogs-Servers");
const createS = (discordId) => __awaiter(void 0, void 0, void 0, function* () { return ServerModel.create({ discordId }); });
exports.createS = createS;
const getS = (discordId) => __awaiter(void 0, void 0, void 0, function* () { return ServerModel.findOne({ discordId }); });
exports.getS = getS;
const updateLanguageForS = (discordId, language) => __awaiter(void 0, void 0, void 0, function* () {
    return ServerModel.updateOne({ discordId }, { language, lastModifiedAt: Date.now() });
});
exports.updateLanguageForS = updateLanguageForS;
const deleteS = (discordId) => __awaiter(void 0, void 0, void 0, function* () { return ServerModel.deleteOne({ discordId }); });
exports.deleteS = deleteS;
const updateLogChannelForS = (discordId, logChannel) => __awaiter(void 0, void 0, void 0, function* () {
    return ServerModel.updateOne({ discordId }, { logChannel, lastModifiedAt: Date.now() });
});
exports.updateLogChannelForS = updateLogChannelForS;
const updateSettingsForS = (discordId, settings) => __awaiter(void 0, void 0, void 0, function* () {
    return ServerModel.updateOne({ discordId }, { settings, lastModifiedAt: Date.now() });
});
exports.updateSettingsForS = updateSettingsForS;
