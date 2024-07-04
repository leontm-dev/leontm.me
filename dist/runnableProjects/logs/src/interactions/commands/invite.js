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
const bot_1 = require("../../bot");
const server_1 = require("../../controller/server");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isCommand())
            return;
        if (interaction.commandName === "invite") {
            let server = yield (0, server_1.getServer)(interaction.guildId);
            let content = "";
            if (server) {
                switch (server.language) {
                    case "en":
                        content =
                            "Invite me to your server with this link: [Invite](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Thanks a lot ❤";
                        break;
                    case "de":
                        content =
                            "Lade mich auf deinen Server ein mit diesem Link: [Einladen](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Danke dir ❤";
                        break;
                    case "fr":
                        content =
                            "Invitez-moi sur votre serveur avec ce lien: [Inviter](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Merci beaucoup ❤";
                        break;
                    case "es":
                        content =
                            "Invítame a tu servidor con este enlace: [Invitar](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Gracias ❤";
                        break;
                    case "it":
                        content =
                            "Invitami nel tuo server con questo link: [Invita](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Grazie mille ❤";
                        break;
                    case "pt":
                        content =
                            "Me convide para o seu servidor com este link: [Convidar](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Muito obrigado ❤";
                        break;
                    case "ru":
                        content =
                            "Пригласите меня на свой сервер с этой ссылкой: [Пригласить](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Спасибо ❤";
                        break;
                    case "tr":
                        content =
                            "Beni sunucunuza bu bağlantıyla davet edin: [Davet](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Çok teşekkür ederim ❤";
                        break;
                    case "ja":
                        content =
                            "このリンクで私をサーバーに招待してください: [招待](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). ありがとうございます ❤";
                        break;
                    case "zh":
                        content =
                            "用这个链接邀请我到你的服务器: [邀请](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). 非常感谢 ❤";
                        break;
                    case "ko":
                        content =
                            "이 링크로 서버에 초대해주세요: [초대](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). 감사합니다 ❤";
                        break;
                    default:
                        content =
                            "Invite me to your server with this link: [Invite](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Thanks a lot ❤";
                        break;
                }
            }
            else {
                content =
                    "Invite me to your server with this link: [Invite](https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands). Thanks a lot ❤";
            }
            try {
                yield interaction.reply({
                    content: content,
                    ephemeral: true,
                });
            }
            catch (error) {
                client.channels.cache.get(bot_1.configChannels.console).send({
                    content: `${interaction.guildId} | Could not send invite link`,
                });
                console.error(error);
            }
        }
    }));
});
