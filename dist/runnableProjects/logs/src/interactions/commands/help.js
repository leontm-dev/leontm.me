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
const server_1 = require("../../controller/server");
// Project-Imports
const bot_1 = require("../../bot");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isCommand())
            return;
        if (interaction.commandName === "help") {
            const server = yield (0, server_1.getServer)(interaction.guildId);
            if (!server)
                return;
            const lang = server.language;
            const embed = new discord_js_1.EmbedBuilder().setColor("Grey").setTimestamp();
            if (!lang)
                return;
            switch (lang) {
                case "en":
                    embed.setFooter({
                        text: "Requested by " + interaction.user.username,
                    });
                    embed.setTitle("Help");
                    embed.setDescription("Here are the available commands for this bot:\n\n`/help` - Shows this message\n`/invite` - Get the invite link for the bot\n`/ping` - Check the bot's latency\n`/setup` - Setup the bot.\n`/change-language` - Change the bot's language \n`/language` - Check the current language.\n`/settings` - Check the current settings.\n`/change-settings` - Change the current settings.");
                    break;
                case "de":
                    embed.setFooter({
                        text: "Angefordert von " + interaction.user.username,
                    });
                    embed.setTitle("Hilfe");
                    embed.setDescription("Hier sind die verfügbaren Befehle für diesen Bot:\n\n`/help` - Zeigt diese Nachricht an\n`/invite` - Erhalte den Einladungslink für den Bot\n`/ping` - Überprüfen Sie die Latenz des Bots\n`/setup` - Richten Sie den Bot ein. \n`/change-language` - Ändern Sie die Sprache des Bots \n`/language` - Überprüfen Sie die aktuelle Sprache.\n`/settings` - Überprüfen Sie die aktuellen Einstellungen.\n`/change-settings` - Ändern Sie die aktuellen Einstellungen.");
                    break;
                case "ru":
                    embed.setFooter({ text: "Запрошено " + interaction.user.username });
                    embed.setTitle("Помощь");
                    embed.setDescription("Вот доступные команды для этого бота:\n\n`/help` - Показать это сообщение\n`/invite` - Получите ссылку для приглашения бота\n`/ping` - Проверьте задержку бота\n`/setup` - Настройте бота. \n`/change-language` - Измените язык бота \n`/language` - Проверьте текущий язык.\n`/settings` - Проверьте текущие настройки.\n`/change-settings` - Измените текущие настройки.");
                    break;
                case "fr":
                    embed.setFooter({ text: "Demandé par " + interaction.user.username });
                    embed.setTitle("Aide");
                    embed.setDescription("Voici les commandes disponibles pour ce bot:\n\n`/help` - Affiche ce message\n`/invite` - Obtenez le lien d'invitation pour le bot\n`/ping` - Vérifiez la latence du bot\n`/setup` - Configurez le bot. \n`/change-language` - Changez la langue du bot \n`/language` - Vérifiez la langue actuelle.\n`/settings` - Vérifiez les paramètres actuels.\n`/change-settings` - Changez les paramètres actuels.");
                    break;
                case "es":
                    embed.setFooter({
                        text: "Solicitado por " + interaction.user.username,
                    });
                    embed.setTitle("Ayuda");
                    embed.setDescription("Aquí están los comandos disponibles para este bot:\n\n`/help` - Muestra este mensaje\n`/invite` - Obtén el enlace de invitación para el bot\n`/ping` - Verifique la latencia del bot\n`/setup` - Configura el bot. \n`/change-language` - Cambia el idioma del bot \n`/language` - Verifique el idioma actual.\n`/settings` - Verifique la configuración actual.\n`/change-settings` - Cambie la configuración actual.");
                    break;
                case "pt":
                    embed.setFooter({
                        text: "Solicitado por " + interaction.user.username,
                    });
                    embed.setTitle("Ajuda");
                    embed.setDescription("Aqui estão os comandos disponíveis para este bot:\n\n`/help` - Mostra esta mensagem\n`/invite` - Obtenha o link de convite para o bot\n`/ping` - Verifique a latência do bot\n`/setup` - Configure o bot. \n`/change-language` - Mude o idioma do bot \n`/language` - Verifique o idioma atual.\n`/settings` - Verifique as configurações atuais.\n`/change-settings` - Altere as configurações atuais.");
                    break;
                case "it":
                    embed.setFooter({
                        text: "Richiesto da " + interaction.user.username,
                    });
                    embed.setTitle("Aiuto");
                    embed.setDescription("Ecco i comandi disponibili per questo bot:\n\n`/help` - Mostra questo messaggio\n`/invite` - Ottieni il link di invito per il bot\n`/ping` - Verifica la latenza del bot\n`/setup` - Configura il bot. \n`/change-language` - Cambia la lingua del bot \n`/language` - Verifica la lingua corrente.\n`/settings` - Verifica le impostazioni correnti.\n`/change-settings` - Cambia le impostazioni correnti.");
                    break;
                case "tr":
                    embed.setFooter({
                        text: "Tarafından istendi " + interaction.user.username,
                    });
                    embed.setTitle("Yardım");
                    embed.setDescription("Bu bot için kullanılabilir komutlar burada:\n\n`/help` - Bu mesajı göster\n`/invite` - Bot için davet bağlantısını alın\n`/ping` - Botun gecikmesini kontrol edin\n`/setup` - Bot'u yapılandırın. \n`/change-language` - Botun dilini değiştirin \n`/language` - Geçerli dili kontrol edin.\n`/settings` - Geçerli ayarları kontrol edin.\n`/change-settings` - Geçerli ayarları değiştirin.");
                    break;
                case "pl":
                    embed.setFooter({
                        text: "Zażądane przez " + interaction.user.username,
                    });
                    embed.setTitle("Wsparcie");
                    embed.setDescription("Oto dostępne polecenia dla tego bota:\n\n`/help` - Pokazuje tę wiadomość\n`/invite` - Pobierz link zaproszenia dla bota\n`/ping` - Sprawdź opóźnienie bota\n`/setup` - Skonfiguruj bota. \n`/change-language` - Zmień język bota \n`/language` - Sprawdź bieżący język.\n`/settings` - Sprawdź bieżące ustawienia.\n`/change-settings` - Zmień bieżące ustawienia.");
                    break;
                case "nl":
                    embed.setFooter({
                        text: "Aangevraagd door " + interaction.user.username,
                    });
                    embed.setTitle("Helpen");
                    embed.setDescription("Hier zijn de beschikbare opdrachten voor deze bot:\n\n`/help` - Toon dit bericht\n`/invite` - Haal de uitnodigingslink voor de bot op\n`/ping` - Controleer de latentie van de bot\n`/setup` - Stel de bot in. \n`/change-language` - Verander de taal van de bot \n`/language` - Controleer de huidige taal.\n`/settings` - Controleer de huidige instellingen.\n`/change-settings` - Verander de huidige instellingen.");
                    break;
                case "ja":
                    embed.setFooter({ text: "要求者 " + interaction.user.username });
                    embed.setTitle("助けて");
                    embed.setDescription("このボットで使用可能なコマンドは次のとおりです。\n\n`/help` - このメッセージを表示\n`/invite` - ボットの招待リンクを取得\n`/ping` - ボットの遅延を確認\n`/setup` - ボットを設定 \n`/change-language` - ボットの言語を変更 \n`/language` - 現在の言語を確認\n`/settings` - 現在の設定を確認\n`/change-settings` - 現在の設定を変更");
                    break;
                case "zh":
                    embed.setFooter({
                        text: "由 " + interaction.user.username + " 请求",
                    });
                    embed.setTitle("帮帮我");
                    embed.setDescription("这是此机器人的可用命令：\n\n`/help` - 显示此消息\n`/invite` - 获取机器人的邀请链接\n`/ping` - 检查机器人的延迟\n`/setup` - 设置机器人。\n`/change-language` - 更改机器人的语言 \n`/language` - 检查当前语言。\n`/settings` - 检查当前设置。\n`/change-settings` - 更改当前设置。");
                    break;
                case "ko":
                    embed.setFooter({ text: "요청자 " + interaction.user.username });
                    embed.setTitle("도와주세요");
                    embed.setDescription("이 봇에 사용 가능한 명령어는 다음과 같습니다.\n\n`/help` - 이 메시지 표시\n`/invite` - 봇의 초대 링크 가져 오기\n`/ping` - 봇의 지연 확인\n`/setup` - 봇 설정 \n`/change-language` - 봇의 언어 변경 \n`/language` - 현재 언어 확인\n`/settings` - 현재 설정 확인\n`/change-settings` - 현재 설정 변경");
                    break;
                default:
                    embed.setFooter({
                        text: "Requested by " + interaction.user.username,
                    });
                    embed.setTitle("Help");
                    embed.setDescription("Here are the available commands for this bot:\n\n`/help` - Shows this message\n`/invite` - Get the invite link for the bot\n`/ping` - Check the bot's latency\n`/setup` - Setup the bot.\n`/change-language` - Change the bot's language \n`/language` - Check the current language.\n`/settings` - Check the current settings.\n`/change-settings` - Change the current settings.");
                    break;
            }
            try {
                const inviteButton = new discord_js_1.ButtonBuilder()
                    .setStyle(discord_js_1.ButtonStyle.Link)
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands`);
                switch (lang) {
                    case "en":
                        inviteButton.setLabel("Invite");
                        break;
                    case "de":
                        inviteButton.setLabel("Einladen");
                        break;
                    case "ru":
                        inviteButton.setLabel("Пригласить");
                        break;
                    case "fr":
                        inviteButton.setLabel("Inviter");
                        break;
                    case "es":
                        inviteButton.setLabel("Invitar");
                        break;
                    case "pt":
                        inviteButton.setLabel("Convidar");
                        break;
                    case "it":
                        inviteButton.setLabel("Invitare");
                        break;
                    case "tr":
                        inviteButton.setLabel("Davet etmek");
                        break;
                    case "pl":
                        inviteButton.setLabel("Zaproś");
                        break;
                    case "nl":
                        inviteButton.setLabel("Uitnodigen");
                        break;
                    case "ja":
                        inviteButton.setLabel("招待");
                        break;
                    case "zh":
                        inviteButton.setLabel("邀请");
                        break;
                    case "ko":
                        inviteButton.setLabel("초대");
                        break;
                    default:
                        inviteButton.setLabel("Invite");
                        break;
                }
                const supportButton = new discord_js_1.ButtonBuilder()
                    .setStyle(discord_js_1.ButtonStyle.Link)
                    .setURL("https://discord.gg/RMaSbcpHAc");
                switch (lang) {
                    case "en":
                        supportButton.setLabel("Support");
                        break;
                    case "de":
                        supportButton.setLabel("Unterstützung");
                        break;
                    case "ru":
                        supportButton.setLabel("Поддержка");
                        break;
                    case "fr":
                        supportButton.setLabel("Soutien");
                        break;
                    case "es":
                        supportButton.setLabel("Apoyo");
                        break;
                    case "pt":
                        supportButton.setLabel("Apoio");
                        break;
                    case "it":
                        supportButton.setLabel("Supporto");
                        break;
                    case "tr":
                        supportButton.setLabel("Destek");
                        break;
                    case "pl":
                        supportButton.setLabel("Wsparcie");
                        break;
                    case "nl":
                        supportButton.setLabel("Ondersteuning");
                        break;
                    case "ja":
                        supportButton.setLabel("サポート");
                        break;
                    case "zh":
                        supportButton.setLabel("支持");
                        break;
                    case "ko":
                        supportButton.setLabel("지원");
                        break;
                    default:
                        supportButton.setLabel("Support");
                        break;
                }
                yield interaction.reply({
                    embeds: [embed],
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(inviteButton, supportButton),
                    ],
                });
            }
            catch (error) {
                client.channels.cache.get(bot_1.configChannels.console).send(`${interaction.guildId} | Could not send help message`);
                console.log(error);
            }
        }
    }));
});
