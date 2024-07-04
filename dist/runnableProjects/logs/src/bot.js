"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configChannels = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
// Project imports
const handler_1 = __importDefault(require("./handling/handler"));
const events_1 = __importDefault(require("./events/events"));
const interactions_1 = __importDefault(require("./interactions/interactions"));
// Presets
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
const server = http_1.default.createServer();
// Configs
dotenv_1.default.config();
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(process.env.MONGO);
// Code
mongoose_1.default.connection.on("error", (error) => console.log(error));
mongoose_1.default.connection.on("open", () => console.log("Connected to MongoDB!"));
client.login(process.env.TOKEN);
(0, handler_1.default)(client);
(0, events_1.default)(client);
(0, interactions_1.default)(client);
server.listen(10000, () => console.log("Host server running on port 10000!"));
// Exports
exports.configChannels = {
    logs: "1068600931157016586",
    console: "984824689111228457",
};
