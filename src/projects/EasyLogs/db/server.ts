// Imports

import mongoose from "mongoose";

// Code

const settingsSchema = new mongoose.Schema({
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

const serverSchema = new mongoose.Schema({
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
    default: settingsSchema,
  },
});

const ServerModel = mongoose.model(
  "easylogs-servers",
  serverSchema,
  "EasyLogs-Servers"
);
const createS = async (discordId: string) => ServerModel.create({ discordId });
const getS = async (discordId: string) => ServerModel.findOne({ discordId });
const updateLanguageForS = async (discordId: string, language: Language) =>
  ServerModel.updateOne(
    { discordId },
    { language, lastModifiedAt: Date.now() }
  );
const deleteS = async (discordId: string) =>
  ServerModel.deleteOne({ discordId });
const updateLogChannelForS = async (discordId: string, logChannel: string) =>
  ServerModel.updateOne(
    { discordId },
    { logChannel, lastModifiedAt: Date.now() }
  );
const updateSettingsForS = async (discordId: string, settings: any) =>
  ServerModel.updateOne(
    { discordId },
    { settings, lastModifiedAt: Date.now() }
  );

// Exports

export {
  createS,
  deleteS,
  getS,
  updateLanguageForS,
  updateLogChannelForS,
  updateSettingsForS,
};
