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
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const server_1 = require("../../controller/server");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (!interaction.isCommand())
            return;
        if (interaction.commandName === "setup") {
            const server = yield (0, server_1.getServer)(interaction.guild.id);
            if (!server) {
                yield (0, server_1.createServer)(interaction.guild.id);
            }
            let channelId = (_b = (_a = interaction.options.get("channel")) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b.id;
            if (!channelId) {
                yield interaction.reply({
                    content: "You need to specify a channel.",
                    ephemeral: true,
                });
                return;
            }
            yield (0, server_1.updateServerLogChannel)(interaction.guild.id, channelId);
            yield interaction.reply({
                content: `The logs channel has been set <#${channelId}>.`,
                ephemeral: true,
            });
        }
    }));
});
