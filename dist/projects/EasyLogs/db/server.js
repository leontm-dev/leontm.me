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
        required: true,
        default: false,
    },
    autoModerationActionExecution: {
        type: Boolean,
        required: true,
        default: true,
    },
    autoModerationRuleCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    autoModerationRuleDelete: {
        type: Boolean,
        required: true,
        default: true,
    },
    autoModerationRuleUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    channelCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    channelDelete: {
        type: Boolean,
        required: true,
        default: true,
    },
    channelPinsUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    channelUpdate: {
        type: Boolean,
        required: true,
        default: true,
    },
    emojiCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    emojiDelete: {
        type: Boolean,
        required: true,
        default: true,
    },
    emojiUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    entitlementCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    entitlementDelete: {
        type: Boolean,
        required: true,
        default: false,
    },
    entitlementUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    guildAuditLogEntryCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildBanAdd: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildBanRemove: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildInteractionUpdate: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildMemberAdd: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildMemberAvailable: {
        type: Boolean,
        required: true,
        default: false,
    },
    guildMemberRemove: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildMemberUpdate: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildScheduledEventCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildScheduledEventDelete: {
        type: Boolean,
        required: true,
        default: true,
    },
    guildScheduledEventUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    guildScheduledEventUserAdd: {
        type: Boolean,
        required: true,
        default: false,
    },
    guildScheduledEventUserRemove: {
        type: Boolean,
        required: true,
        default: false,
    },
    guildUpdate: {
        type: Boolean,
        required: true,
        default: true,
    },
    integrationCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    inviteCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    inviteDelete: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageDeleteBulk: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageReactionAdd: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageReactionRemove: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageReactionRemoveAll: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageReactionRemoveEmoji: {
        type: Boolean,
        required: true,
        default: false,
    },
    messageUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    roleCreate: {
        type: Boolean,
        required: true,
        default: true,
    },
    roleDelete: {
        type: Boolean,
        required: true,
        default: true,
    },
    roleUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    stageInstanceCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    stageInstanceDelete: {
        type: Boolean,
        required: true,
        default: false,
    },
    stageInstanceUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    stickerCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    stickerDelete: {
        type: Boolean,
        required: true,
        default: false,
    },
    stickerUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadCreate: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadDelete: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadListSync: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadMemberUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadMembersUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    threadUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    typingStart: {
        type: Boolean,
        required: true,
        default: false,
    },
    userUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    voiceStateUpdate: {
        type: Boolean,
        required: true,
        default: false,
    },
    webhookUpdate: {
        type: Boolean,
        required: true,
        default: true,
    },
});
const serverSchema = new mongoose_1.default.Schema({
    discordId: {
        type: String,
        required: true,
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
        required: true,
    },
});
const ServerModel = mongoose_1.default.model("easylogs_servers", serverSchema);
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
