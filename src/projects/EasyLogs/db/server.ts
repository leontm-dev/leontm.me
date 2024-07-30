// Imports

import mongoose from "mongoose";

// Code

const settingsSchema = new mongoose.Schema({
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
    required: true,
  },
});

const ServerModel = mongoose.model("easylogs_servers", serverSchema);
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
