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
const discord_js_1 = require("discord.js");
// Project-Imports
const bot_1 = require("../../bot");
const server_1 = require("../../controller/server");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("guildCreate", (guild) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        if (!guild.available)
            return;
        const server = yield (0, server_1.getServer)(guild.id);
        if (!server) {
            yield (0, server_1.createServer)(guild.id);
        }
        let joinedEmbed = new discord_js_1.EmbedBuilder()
            .setColor("Green")
            .setTitle("Got added to a server.")
            .setAuthor({ name: guild.name, iconURL: guild.iconURL() })
            .setFooter({ text: `Server ID: ${guild.id}` })
            .setTimestamp()
            .setDescription(`Server owner: ${(_a = guild.members.cache.get(guild.ownerId)) === null || _a === void 0 ? void 0 : _a.user.tag}`);
        let joinMessage = new discord_js_1.EmbedBuilder()
            .setColor("Grey")
            .setAuthor({
            name: (_b = client.user) === null || _b === void 0 ? void 0 : _b.username,
            iconURL: (_c = client.user) === null || _c === void 0 ? void 0 : _c.displayAvatarURL(),
        })
            .setDescription("Thanks for adding me to your server! \nI am LTM | Logs and I am able to log every event that happens in your server. \nAnd all this for free, with full customizations and a lot of features. You can check all the commands by using `/help`. But first you need to set up the logs channel. You can do this by using `/setup` or just use the context menu below")
            .setTimestamp()
            .setTitle("Hello!")
            .setURL("https://leontm.me/discord/ltm/logs/docs");
        let row = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("change-language")
            .setLabel("Change language")
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setEmoji("🌐"));
        let row2 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ChannelSelectMenuBuilder()
            .setChannelTypes([discord_js_1.ChannelType.GuildText])
            .setCustomId("setup-context")
            .setMinValues(1)
            .setMaxValues(1)
            .setPlaceholder("Select a channel to which all event logs should be send."));
        try {
            client.channels.cache.get(bot_1.configChannels.logs).send({
                embeds: [joinedEmbed],
            });
            (_d = guild.systemChannel) === null || _d === void 0 ? void 0 : _d.send({
                embeds: [joinMessage],
                components: [row, row2],
            });
        }
        catch (error) {
            console.error(error);
        }
    }));
});
