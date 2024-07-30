"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configChannels = exports.version = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
// Project imports
const handler_1 = __importDefault(require("./handling/handler"));
const events_1 = __importDefault(require("./events/events"));
const interactions_1 = __importDefault(require("./interactions/interactions"));
const events_2 = __importDefault(require("events"));
// Configs
dotenv_1.default.config({ encoding: "utf-8" });
// Presets
const configChannels = {
    logs: "1068600931157016586",
    console: "984824689111228457",
};
exports.configChannels = configChannels;
const version = "v0.0.2";
exports.version = version;
// Code
const client = new discord_js_1.default.Client({
    intents: [
        "GuildBans",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildMembers",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "GuildMessages",
        "GuildModeration",
        "GuildPresences",
        "GuildScheduledEvents",
        "GuildVoiceStates",
        "GuildWebhooks",
        "Guilds",
        "MessageContent",
    ],
    partials: [
        discord_js_1.default.Partials.GuildMember,
        discord_js_1.default.Partials.GuildScheduledEvent,
        discord_js_1.default.Partials.Message,
        discord_js_1.default.Partials.Reaction,
        discord_js_1.default.Partials.ThreadMember,
        discord_js_1.default.Partials.User,
    ],
});
const emitter = new events_2.default();
emitter.setMaxListeners(Infinity);
client.login(process.env.DISCORDBOT_EASYLOGS_TOKEN);
(0, handler_1.default)(client);
(0, events_1.default)(client);
(0, interactions_1.default)(client);
