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
        if (interaction.commandName === "language") {
            let server = yield (0, server_1.getServer)(interaction.guildId);
            let embed = new discord_js_1.EmbedBuilder().setColor("Grey");
            if (server) {
                switch (server.language) {
                    case "en":
                        embed
                            .setTitle("Current language")
                            .setDescription("The bot is currently set to English")
                            .addFields({
                            name: "Available Languages",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Use /change-language to change the language",
                        });
                        break;
                    case "de":
                        embed
                            .setTitle("Aktuelle Sprache")
                            .setDescription("Der Bot ist derzeit auf Deutsch eingestellt")
                            .addFields({
                            name: "Verfügbare Sprachen",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Verwenden Sie /change-language, um die Sprache zu ändern",
                        });
                        break;
                    case "fr":
                        embed
                            .setTitle("Langue actuelle")
                            .setDescription("Le bot est actuellement configuré en français")
                            .addFields({
                            name: "Langues disponibles",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Utilisez /change-language pour changer la langue",
                        });
                        break;
                    case "es":
                        embed
                            .setTitle("Idioma actual")
                            .setDescription("El bot está actualmente configurado en español")
                            .addFields({
                            name: "Idiomas disponibles",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Use /change-language para cambiar el idioma",
                        });
                        break;
                    case "it":
                        embed
                            .setTitle("Lingua attuale")
                            .setDescription("Il bot è attualmente impostato su italiano")
                            .addFields({
                            name: "Lingue disponibili",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Usa /change-language per cambiare la lingua",
                        });
                        break;
                    case "pt":
                        embed
                            .setTitle("Idioma atual")
                            .setDescription("O bot está atualmente configurado para português")
                            .addFields({
                            name: "Idiomas disponíveis",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Use /change-language para mudar o idioma",
                        });
                        break;
                    case "ru":
                        embed
                            .setTitle("Текущий язык")
                            .setDescription("Бот в настоящее время настроен на русский")
                            .addFields({
                            name: "Доступные языки",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Используйте /change-language для изменения языка",
                        });
                        break;
                    case "tr":
                        embed
                            .setTitle("Mevcut Dil")
                            .setDescription("Bot şu anda Türkçe olarak ayarlanmış durumda")
                            .addFields({
                            name: "Mevcut Diller",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Dili değiştirmek için /change-language kullanın",
                        });
                        break;
                    case "ja":
                        embed
                            .setTitle("現在の言語")
                            .setDescription("ボットは現在日本語に設定されています")
                            .addFields({
                            name: "利用可能な言語",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "言語を変更するには /change-language を使用してください",
                        });
                        break;
                    case "zh":
                        embed
                            .setTitle("当前语言")
                            .setDescription("机器人当前设置为中文")
                            .addFields({
                            name: "可用语言",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "使用 /change-language 更改语言",
                        });
                        break;
                    default:
                        embed
                            .setTitle("Current language")
                            .setDescription("The bot is currently set to English")
                            .addFields({
                            name: "Available Languages",
                            value: ":flag_gb:, :flag_de:, :flag_fr:, :flag_es:, :flag_it:, :flag_pt:, :flag_pl:, :flag_ru:, :flag_tr:, :flag_jp:, :flag_cn:, :flag_kr:",
                        })
                            .setFooter({
                            text: "Use /change-language to change the language",
                        });
                        break;
                }
            }
            else {
                interaction.reply({
                    content: "An error occurred while fetching the server settings",
                    ephemeral: true,
                });
                return;
            }
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }));
});
