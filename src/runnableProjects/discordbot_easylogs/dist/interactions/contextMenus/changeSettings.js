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
        if (!interaction.isStringSelectMenu())
            return;
        if (!interaction.customId.startsWith("change-settings-menu-"))
            return;
        const server = yield (0, server_1.getServer)(interaction.guildId);
        if (!server) {
            yield interaction.reply({
                content: "Server not found",
                ephemeral: true,
            });
        }
        console.log(interaction.values[0]);
        yield interaction.reply({
            content: "Not implemented yet",
            ephemeral: true,
        });
    }));
});
