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
exports.contextMenu6 = exports.contextMenu5 = exports.contextMenu4 = exports.contextMenu3 = exports.contextMenu2 = exports.contextMenu1 = exports.changeSettings = void 0;
const discord_js_1 = require("discord.js");
// Project-Imports
const server_1 = require("../../controller/server");
// Code
const contextMenu1 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-1")
    .setOptions([
    {
        label: "applicationCommandPermissionsUpdate",
        value: "applicationCommandPermissionsUpdate",
    },
    {
        label: "autoModerationActionExecution",
        value: "autoModerationActionExecution",
    },
    {
        label: "autoModerationRuleCreate",
        value: "autoModerationRuleCreate",
    },
    {
        label: "autoModerationRuleDelete",
        value: "autoModerationRuleDelete",
    },
    {
        label: "autoModerationRuleUpdate",
        value: "autoModerationRuleUpdate",
    },
    { label: "channelCreate", value: "channelCreate" },
    { label: "channelDelete", value: "channelDelete" },
    { label: "channelPinsUpdate", value: "channelPinsUpdate" },
    { label: "channelUpdate", value: "channelUpdate" },
    { label: "emojiCreate", value: "emojiCreate" },
]);
exports.contextMenu1 = contextMenu1;
const contextMenu2 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-2")
    .setOptions([
    { label: "emojiDelete", value: "emojiDelete" },
    { label: "emojiUpdate", value: "emojiUpdate" },
    { label: "entitlementCreate", value: "entitlementCreate" },
    { label: "entitlementDelete", value: "entitlementDelete" },
    { label: "entitlementUpdate", value: "entitlementUpdate" },
    {
        label: "guildAuditLogEntryCreate",
        value: "guildAuditLogEntryCreate",
    },
    { label: "guildBanAdd", value: "guildBanAdd" },
    { label: "guildBanRemove", value: "guildBanRemove" },
    { label: "guildInteractionUpdate", value: "guildInteractionUpdate" },
    { label: "guildMemberAdd", value: "guildMemberAdd" },
]);
exports.contextMenu2 = contextMenu2;
const contextMenu3 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-3")
    .setOptions([
    { label: "guildMemberAvailable", value: "guildMemberAvailable" },
    { label: "guildMemberRemove", value: "guildMemberRemove" },
    { label: "guildMemberUpdate", value: "guildMemberUpdate" },
    {
        label: "guildScheduledEventCreate",
        value: "guildScheduledEventCreate",
    },
    {
        label: "guildScheduledEventDelete",
        value: "guildScheduledEventDelete",
    },
    {
        label: "guildScheduledEventUpdate",
        value: "guildScheduledEventUpdate",
    },
    {
        label: "guildScheduledEventUserAdd",
        value: "guildScheduledEventUserAdd",
    },
    {
        label: "guildScheduledEventUserRemove",
        value: "guildScheduledEventUserRemove",
    },
    { label: "guildUpdate", value: "guildUpdate" },
    { label: "interactionCreate", value: "interactionCreate" },
]);
exports.contextMenu3 = contextMenu3;
const contextMenu4 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-4")
    .setOptions([
    { label: "inviteCreate", value: "inviteCreate" },
    { label: "inviteDelete", value: "inviteDelete" },
    { label: "messageCreate", value: "messageCreate" },
    { label: "messageDelete", value: "messageDelete" },
    { label: "messageDeleteBulk", value: "messageDeleteBulk" },
    { label: "messageUpdate", value: "messageUpdate" },
    { label: "messageReactionAdd", value: "messageReactionAdd" },
    { label: "messageReactionRemove", value: "messageReactionRemove" },
    {
        label: "messageReactionRemoveAll",
        value: "messageReactionRemoveAll",
    },
    {
        label: "messageReactionRemoveEmoji",
        value: "messageReactionRemoveEmoji",
    },
]);
exports.contextMenu4 = contextMenu4;
const contextMenu5 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-5")
    .setOptions([
    { label: "messageUpdate", value: "messageUpdate" },
    { label: "roleCreate", value: "roleCreate" },
    { label: "roleDelete", value: "roleDelete" },
    { label: "roleUpdate", value: "roleUpdate" },
    { label: "stageInstanceCreate", value: "stageInstanceCreate" },
    { label: "stageInstanceDelete", value: "stageInstanceDelete" },
    { label: "stageInstanceUpdate", value: "stageInstanceUpdate" },
    { label: "stickerCreate", value: "stickerCreate" },
    { label: "stickerDelete", value: "stickerDelete" },
    { label: "stickerUpdate", value: "stickerUpdate" },
]);
exports.contextMenu5 = contextMenu5;
const contextMenu6 = new discord_js_1.StringSelectMenuBuilder()
    .setMinValues(1)
    .setMaxValues(1)
    .setCustomId("change-settings-menu-6")
    .setOptions([
    { label: "threadCreate", value: "threadCreate" },
    { label: "threadDelete", value: "threadDelete" },
    { label: "threadListSync", value: "threadListSync" },
    { label: "threadMemberUpdate", value: "threadMemberUpdate" },
    { label: "threadMembersUpdate", value: "threadMembersUpdate" },
    { label: "threadUpdate", value: "threadUpdate" },
    { label: "typingStart", value: "typingStart" },
    { label: "userUpdate", value: "userUpdate" },
    { label: "voiceStateUpdate", value: "voiceStateUpdate" },
    { label: "webhookUpdate", value: "webhookUpdate" },
]);
exports.contextMenu6 = contextMenu6;
const enableButton = new discord_js_1.ButtonBuilder()
    .setStyle(discord_js_1.ButtonStyle.Success)
    .setEmoji("✅")
    .setDisabled(true)
    .setCustomId("enable-settings");
const disableButton = new discord_js_1.ButtonBuilder()
    .setStyle(discord_js_1.ButtonStyle.Danger)
    .setEmoji("❌")
    .setDisabled(true)
    .setCustomId("disable-settings");
const nextSettingRight = new discord_js_1.ButtonBuilder()
    .setStyle(discord_js_1.ButtonStyle.Secondary)
    .setEmoji("➡️")
    .setCustomId("next-setting-right");
const nextSettingLeft = new discord_js_1.ButtonBuilder()
    .setStyle(discord_js_1.ButtonStyle.Secondary)
    .setEmoji("⬅️")
    .setCustomId("next-setting-left")
    .setDisabled(true);
function changeSettings(client) {
    return __awaiter(this, void 0, void 0, function* () {
        client.on("interactionCreate", (interaction) => __awaiter(this, void 0, void 0, function* () {
            if (!interaction.isCommand())
                return;
            if (interaction.commandName !== "change-settings")
                return;
            const server = yield (0, server_1.getServer)(interaction.guild.id);
            const embed = new discord_js_1.EmbedBuilder().setColor("Grey");
            if (server) {
                switch (server.language) {
                    case "en":
                        embed.setTitle("Change settings");
                        embed.setDescription("Select a setting and use the buttons to change it.");
                        embed.setFooter({ text: "Check the server settings with /settings" });
                        enableButton.setLabel("Enable");
                        disableButton.setLabel("Disable");
                        contextMenu1.setPlaceholder("Select a setting #1");
                        contextMenu2.setPlaceholder("Select a setting #2");
                        contextMenu3.setPlaceholder("Select a setting #3");
                        contextMenu4.setPlaceholder("Select a setting #4");
                        contextMenu5.setPlaceholder("Select a setting #5");
                        contextMenu6.setPlaceholder("Select a setting #6");
                        nextSettingRight.setLabel("Next menu");
                        nextSettingLeft.setLabel("Previous menu");
                        break;
                    case "de":
                        embed.setTitle("Einstellungen ändern");
                        embed.setDescription("Wählen Sie eine Einstellung und verwenden Sie die Schaltflächen, um sie zu ändern.");
                        embed.setFooter({
                            text: "Überprüfen Sie die Servereinstellungen mit /settings",
                        });
                        enableButton.setLabel("Aktivieren");
                        disableButton.setLabel("Deaktivieren");
                        contextMenu1.setPlaceholder("Wählen Sie eine Einstellung aus #1");
                        contextMenu2.setPlaceholder("Wählen Sie eine Einstellung aus #2");
                        contextMenu3.setPlaceholder("Wählen Sie eine Einstellung aus #3");
                        contextMenu4.setPlaceholder("Wählen Sie eine Einstellung aus #4");
                        contextMenu5.setPlaceholder("Wählen Sie eine Einstellung aus #5");
                        contextMenu6.setPlaceholder("Wählen Sie eine Einstellung aus #6");
                        nextSettingRight.setLabel("Nächste Menü");
                        nextSettingLeft.setLabel("Vorherige Menü");
                        break;
                    case "fr":
                        embed.setTitle("Modifier les paramètres");
                        embed.setDescription("Sélectionnez un paramètre et utilisez les boutons pour le modifier.");
                        embed.setFooter({
                            text: "Vérifiez les paramètres du serveur avec /settings",
                        });
                        enableButton.setLabel("Activer");
                        disableButton.setLabel("Désactiver");
                        contextMenu1.setPlaceholder("Sélectionnez un paramètre #1");
                        contextMenu2.setPlaceholder("Sélectionnez un paramètre #2");
                        contextMenu3.setPlaceholder("Sélectionnez un paramètre #3");
                        contextMenu4.setPlaceholder("Sélectionnez un paramètre #4");
                        contextMenu5.setPlaceholder("Sélectionnez un paramètre #5");
                        contextMenu6.setPlaceholder("Sélectionnez un paramètre #6");
                        nextSettingRight.setLabel("Menu suivant");
                        nextSettingLeft.setLabel("Menu précédent");
                        break;
                    case "es":
                        embed.setTitle("Cambiar ajustes");
                        embed.setDescription("Seleccione un ajuste y use los botones para cambiarlo.");
                        embed.setFooter({
                            text: "Consulte la configuración del servidor con /settings",
                        });
                        enableButton.setLabel("Habilitar");
                        disableButton.setLabel("Deshabilitar");
                        contextMenu1.setPlaceholder("Seleccione un ajuste #1");
                        contextMenu2.setPlaceholder("Seleccione un ajuste #2");
                        contextMenu3.setPlaceholder("Seleccione un ajuste #3");
                        contextMenu4.setPlaceholder("Seleccione un ajuste #4");
                        contextMenu5.setPlaceholder("Seleccione un ajuste #5");
                        contextMenu6.setPlaceholder("Seleccione un ajuste #6");
                        nextSettingRight.setLabel("Menú siguiente");
                        nextSettingLeft.setLabel("Menú anterior");
                        break;
                    case "it":
                        embed.setTitle("Cambia impostazioni");
                        embed.setDescription("Seleziona un'impostazione e usa i pulsanti per cambiarla.");
                        embed.setFooter({
                            text: "Controlla le impostazioni del server con /settings",
                        });
                        enableButton.setLabel("Abilitare");
                        disableButton.setLabel("Disabilitare");
                        contextMenu1.setPlaceholder("Seleziona un'impostazione #1");
                        contextMenu2.setPlaceholder("Seleziona un'impostazione #2");
                        contextMenu3.setPlaceholder("Seleziona un'impostazione #3");
                        contextMenu4.setPlaceholder("Seleziona un'impostazione #4");
                        contextMenu5.setPlaceholder("Seleziona un'impostazione #5");
                        contextMenu6.setPlaceholder("Seleziona un'impostazione #6");
                        nextSettingRight.setLabel("Menu successivo");
                        nextSettingLeft.setLabel("Menu precedente");
                        break;
                    case "pt":
                        embed.setTitle("Alterar configurações");
                        embed.setDescription("Selecione uma configuração e use os botões para alterá-la.");
                        embed.setFooter({
                            text: "Verifique as configurações do servidor com /settings",
                        });
                        enableButton.setLabel("Habilitar");
                        disableButton.setLabel("Desabilitar");
                        contextMenu1.setPlaceholder("Selecione uma configuração #1");
                        contextMenu2.setPlaceholder("Selecione uma configuração #2");
                        contextMenu3.setPlaceholder("Selecione uma configuração #3");
                        contextMenu4.setPlaceholder("Selecione uma configuração #4");
                        contextMenu5.setPlaceholder("Selecione uma configuração #5");
                        contextMenu6.setPlaceholder("Selecione uma configuração #6");
                        nextSettingRight.setLabel("Próximo menu");
                        nextSettingLeft.setLabel("Menu anterior");
                        break;
                    case "ru":
                        embed.setTitle("Изменить настройки");
                        embed.setDescription("Выберите настройку и используйте кнопки для изменения.");
                        embed.setFooter({
                            text: "Проверьте настройки сервера с помощью /settings",
                        });
                        enableButton.setLabel("Включить");
                        disableButton.setLabel("Отключить");
                        contextMenu1.setPlaceholder("Выберите настройку #1");
                        contextMenu2.setPlaceholder("Выберите настройку #2");
                        contextMenu3.setPlaceholder("Выберите настройку #3");
                        contextMenu4.setPlaceholder("Выберите настройку #4");
                        contextMenu5.setPlaceholder("Выберите настройку #5");
                        contextMenu6.setPlaceholder("Выберите настройку #6");
                        nextSettingRight.setLabel("Следующее меню");
                        nextSettingLeft.setLabel("Предыдущее меню");
                        break;
                    case "tr":
                        embed.setTitle("Ayarları değiştir");
                        embed.setDescription("Bir ayar seçin ve değiştirmek için düğmeleri kullanın.");
                        embed.setFooter({
                            text: "Sunucu ayarlarını /settings ile kontrol edin",
                        });
                        enableButton.setLabel("Etkinleştir");
                        disableButton.setLabel("Devre dışı bırak");
                        contextMenu1.setPlaceholder("Bir ayar seçin #1");
                        contextMenu2.setPlaceholder("Bir ayar seçin #2");
                        contextMenu3.setPlaceholder("Bir ayar seçin #3");
                        contextMenu4.setPlaceholder("Bir ayar seçin #4");
                        contextMenu5.setPlaceholder("Bir ayar seçin #5");
                        contextMenu6.setPlaceholder("Bir ayar seçin #6");
                        nextSettingRight.setLabel("Sonraki menü");
                        nextSettingLeft.setLabel("Önceki menü");
                        break;
                    case "zh":
                        embed.setTitle("更改设置");
                        embed.setDescription("选择一个设置并使用按钮进行更改。");
                        embed.setFooter({ text: "使用 /settings 检查服务器设置" });
                        enableButton.setLabel("启用");
                        disableButton.setLabel("禁用");
                        contextMenu1.setPlaceholder("选择一个设置 #1");
                        contextMenu2.setPlaceholder("选择一个设置 #2");
                        contextMenu3.setPlaceholder("选择一个设置 #3");
                        contextMenu4.setPlaceholder("选择一个设置 #4");
                        contextMenu5.setPlaceholder("选择一个设置 #5");
                        contextMenu6.setPlaceholder("选择一个设置 #6");
                        nextSettingRight.setLabel("下一个菜单");
                        nextSettingLeft.setLabel("上一个菜单");
                        break;
                    case "ja":
                        embed.setTitle("設定を変更する");
                        embed.setDescription("設定を選択し、ボタンを使用して変更します。");
                        embed.setFooter({ text: "/settings でサーバーの設定を確認" });
                        enableButton.setLabel("有効にする");
                        disableButton.setLabel("無効にする");
                        contextMenu1.setPlaceholder("設定を選択 #1");
                        contextMenu2.setPlaceholder("設定を選択 #2");
                        contextMenu3.setPlaceholder("設定を選択 #3");
                        contextMenu4.setPlaceholder("設定を選択 #4");
                        contextMenu5.setPlaceholder("設定を選択 #5");
                        contextMenu6.setPlaceholder("設定を選択 #6");
                        nextSettingRight.setLabel("次のメニュー");
                        nextSettingLeft.setLabel("前のメニュー");
                        break;
                    case "ko":
                        embed.setTitle("설정 변경");
                        embed.setDescription("설정을 선택하고 버튼을 사용하여 변경하십시오.");
                        embed.setFooter({ text: "/settings로 서버 설정 확인" });
                        enableButton.setLabel("사용");
                        disableButton.setLabel("사용 안 함");
                        contextMenu1.setPlaceholder("설정 선택 #1");
                        contextMenu2.setPlaceholder("설정 선택 #2");
                        contextMenu3.setPlaceholder("설정 선택 #3");
                        contextMenu4.setPlaceholder("설정 선택 #4");
                        contextMenu5.setPlaceholder("설정 선택 #5");
                        contextMenu6.setPlaceholder("설정 선택 #6");
                        nextSettingRight.setLabel("다음 메뉴");
                        nextSettingLeft.setLabel("이전 메뉴");
                        break;
                    case "nl":
                        embed.setTitle("Instellingen wijzigen");
                        embed.setDescription("Selecteer een instelling en gebruik de knoppen om deze te wijzigen.");
                        embed.setFooter({
                            text: "Controleer de serverinstellingen met /settings",
                        });
                        enableButton.setLabel("Inschakelen");
                        disableButton.setLabel("Uitschakelen");
                        contextMenu1.setPlaceholder("Selecteer een instelling #1");
                        contextMenu2.setPlaceholder("Selecteer een instelling #2");
                        contextMenu3.setPlaceholder("Selecteer een instelling #3");
                        contextMenu4.setPlaceholder("Selecteer een instelling #4");
                        contextMenu5.setPlaceholder("Selecteer een instelling #5");
                        contextMenu6.setPlaceholder("Selecteer een instelling #6");
                        nextSettingRight.setLabel("Volgend menu");
                        nextSettingLeft.setLabel("Vorige menu");
                        break;
                }
            }
            else {
                embed
                    .setTitle("Change settings")
                    .setDescription("Select a setting and use the buttons to change it.")
                    .setFooter({ text: "Check the server settings with /settings" });
                enableButton.setLabel("Enable");
                disableButton.setLabel("Disable");
                contextMenu1.setPlaceholder("Select a setting #1");
                contextMenu2.setPlaceholder("Select a setting #2");
                contextMenu3.setPlaceholder("Select a setting #3");
                contextMenu4.setPlaceholder("Select a setting #4");
                contextMenu5.setPlaceholder("Select a setting #5");
                contextMenu6.setPlaceholder("Select a setting #6");
                nextSettingRight.setLabel("Next menu");
                nextSettingLeft.setLabel("Previous menu");
            }
            interaction.reply({
                embeds: [embed],
                components: [
                    new discord_js_1.ActionRowBuilder().addComponents([
                        nextSettingLeft,
                        enableButton,
                        disableButton,
                        nextSettingRight,
                    ]),
                    new discord_js_1.ActionRowBuilder().addComponents([
                        contextMenu1,
                    ]),
                ],
            });
        }));
    });
}
exports.changeSettings = changeSettings;
