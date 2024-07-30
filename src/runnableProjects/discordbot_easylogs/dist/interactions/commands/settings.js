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
const server_1 = require("../../controller/server");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isCommand())
            return;
        if (interaction.commandName !== "settings")
            return;
        let server = yield (0, server_1.getServer)(interaction.guild.id);
        if (!server) {
            yield interaction.reply({
                content: "Please run the setup command first.",
                ephemeral: true,
            });
            return;
        }
        const embed = new discord_js_1.EmbedBuilder().setColor("Grey").setTimestamp();
        let content = "";
        switch (server.language) {
            case "en":
                embed.setTitle("The current settings of this server");
                embed.setFooter({
                    text: "You can change these settings with the /settings command.",
                });
                break;
            case "de":
                embed.setTitle("Die aktuellen Einstellungen dieses Servers");
                embed.setFooter({
                    text: "Sie können diese Einstellungen mit dem /settings-Befehl ändern.",
                });
                break;
            case "fr":
                embed.setTitle("Les paramètres actuels de ce serveur");
                embed.setFooter({
                    text: "Vous pouvez modifier ces paramètres avec la commande /settings.",
                });
                break;
            case "es":
                embed.setTitle("Los ajustes actuales de este servidor");
                embed.setFooter({
                    text: "Puede cambiar estos ajustes con el comando /settings.",
                });
                break;
            case "it":
                embed.setTitle("Le impostazioni attuali di questo server");
                embed.setFooter({
                    text: "È possibile modificare queste impostazioni con il comando /settings.",
                });
                break;
            case "pt":
                embed.setTitle("As configurações atuais deste servidor");
                embed.setFooter({
                    text: "Você pode alterar essas configurações com o comando /settings.",
                });
                break;
            case "pl":
                embed.setTitle("Aktualne ustawienia tego serwera");
                embed.setFooter({
                    text: "Możesz zmienić te ustawienia za pomocą polecenia /settings.",
                });
                break;
            case "ru":
                embed.setTitle("Текущие настройки этого сервера");
                embed.setFooter({
                    text: "Вы можете изменить эти настройки с помощью команды /settings.",
                });
                break;
            case "tr":
                embed.setTitle("Bu sunucunun mevcut ayarları");
                embed.setFooter({
                    text: "Bu ayarları /settings komutu ile değiştirebilirsiniz.",
                });
                break;
            case "jp":
                embed.setTitle("このサーバーの現在の設定");
                embed.setFooter({
                    text: "この設定は/settingsコマンドで変更できます。",
                });
                break;
            case "zh":
                embed.setTitle("此服务器的当前设置");
                embed.setFooter({
                    text: "您可以使用/settings命令更改这些设置。",
                });
                break;
            case "ko":
                embed.setTitle("이 서버의 현재 설정");
                embed.setFooter({
                    text: "이 설정은 /settings 명령으로 변경할 수 있습니다.",
                });
                break;
            case "nl":
                embed.setTitle("De huidige instellingen van deze server");
                embed.setFooter({
                    text: "U kunt deze instellingen wijzigen met het /settings commando.",
                });
                break;
            default:
                embed.setTitle("The current settings of this server");
                embed.setFooter({
                    text: "You can change these settings with the /settings command.",
                });
                break;
        }
        let events = server.serverEvents;
        for (let key in events) {
            if (events.hasOwnProperty(key)) {
                content += `${key}: ${events[key] ? ":white_check_mark:" : ":x:"}\n`;
            }
        }
        embed.setDescription(content);
        yield interaction.reply({ embeds: [embed], ephemeral: true });
    }));
});
