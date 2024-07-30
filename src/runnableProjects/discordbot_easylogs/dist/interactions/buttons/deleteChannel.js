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
        if (!interaction.isButton())
            return;
        if (!interaction.customId.startsWith("delete-channel-"))
            return;
        const server = yield (0, server_1.getServer)(interaction.guild.id);
        if (!server)
            return;
        (client.channels.cache.get(interaction.customId.replace("delete-channel-", ""))).delete("Button on create-embed was clicked.");
        let content = "";
        switch (server.language) {
            case "en":
                content = "The channel has been deleted.";
                break;
            case "de":
                content = "Der Kanal wurde gelöscht.";
                break;
            case "fr":
                content = "Le canal a été supprimé.";
                break;
            case "es":
                content = "El canal ha sido eliminado.";
                break;
            case "it":
                content = "Il canale è stato eliminato.";
                break;
            case "pt":
                content = "O canal foi excluído.";
                break;
            case "ru":
                content = "Канал был удален.";
                break;
            case "tr":
                content = "Kanal silindi.";
                break;
            case "pl":
                content = "Kanał został usunięty.";
                break;
            case "nl":
                content = "Het kanaal is verwijderd.";
                break;
            case "ja":
                content = "チャンネルが削除されました。";
                break;
            case "zh":
                content = "频道已删除。";
                break;
            case "ko":
                content = "채널이 삭제되었습니다.";
                break;
        }
        interaction.message.edit({ components: [] });
        yield interaction.reply({ content, ephemeral: true });
    }));
});
