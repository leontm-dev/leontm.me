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
const bot_1 = require("../../bot");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (interaction.isChannelSelectMenu()) {
            if (interaction.customId === "setup-context") {
                const server = yield (0, server_1.updateServerLogChannel)(interaction.channels.first().guildId, interaction.channels.first().id);
                try {
                    if (server) {
                        let content = "";
                        switch (server.language) {
                            case "en":
                                content = `The log-channel has been set to <#${interaction.channels.first().id}>`;
                                break;
                            case "de":
                                content = `Der Log-Kanal wurde auf <#${interaction.channels.first().id}> gesetzt`;
                                break;
                            case "fr":
                                content = `Le canal de journalisation a été défini sur <#${interaction.channels.first().id}>`;
                                break;
                            case "es":
                                content = `El canal de registro se ha establecido en <#${interaction.channels.first().id}>`;
                                break;
                            case "it":
                                content = `Il canale di log è stato impostato su <#${interaction.channels.first().id}>`;
                                break;
                            case "pt":
                                content = `O canal de log foi definido para <#${interaction.channels.first().id}>`;
                                break;
                            case "ru":
                                content = `Журнальный канал установлен на <#${interaction.channels.first().id}>`;
                                break;
                            case "tr":
                                content = `Günlük kanalı <#${interaction.channels.first().id}> olarak ayarlandı`;
                                break;
                            case "ja":
                                content = `ログチャンネルは<#${interaction.channels.first().id}>に設定されました`;
                                break;
                            case "zh":
                                content = `日志频道已设置为<#${interaction.channels.first().id}>`;
                                break;
                            case "ko":
                                content = `로그 채널이 <#${interaction.channels.first().id}>로 설정되었습니다`;
                                break;
                            default:
                                content = `The log-channel has been set to <#${interaction.channels.first().id}>`;
                                break;
                        }
                        yield interaction.reply({
                            content: content,
                            ephemeral: true,
                        });
                        yield (client.channels.cache.get(bot_1.configChannels.console)).send({
                            content: `${interaction.guildId} | Log-channel updated.`,
                        });
                    }
                    else {
                        console.log(server);
                        yield interaction.reply({
                            content: "An error occurred while updating the log-channel.",
                            ephemeral: true,
                        });
                    }
                }
                catch (error) {
                    client.channels.cache.get(bot_1.configChannels.console).send({
                        content: `${interaction.guildId} | Error while updating log-channel. ERROR: ${error}`,
                    });
                    console.log(error);
                }
            }
        }
    }));
});
