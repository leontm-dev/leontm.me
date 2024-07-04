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
        const server = yield (0, server_1.getServer)(interaction.guild.id);
        const embed = new discord_js_1.EmbedBuilder().setColor("Grey");
        const enableButton = new discord_js_1.ButtonBuilder()
            .setStyle(discord_js_1.ButtonStyle.Success)
            .setEmoji("✅")
            .setDisabled(true);
        const disableButton = new discord_js_1.ButtonBuilder()
            .setStyle(discord_js_1.ButtonStyle.Danger)
            .setEmoji("❌")
            .setDisabled(true);
        const contextMenu = new discord_js_1.StringSelectMenuBuilder()
            .setMinValues(1)
            .setMaxValues(1)
            .setCustomId("change-settings-menu")
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
        if (server) {
            switch (server.language) {
                case "en":
                    embed.setTitle("Change settings");
                    embed.setDescription("Select a setting and use the buttons to change it.");
                    embed.setFooter({ text: "Check the server settings with /settings" });
                    enableButton.setLabel("Enable");
                    disableButton.setLabel("Disable");
                    contextMenu.setPlaceholder("Select a setting");
                    break;
                case "de":
                    embed.setTitle("Einstellungen ändern");
                    embed.setDescription("Wählen Sie eine Einstellung und verwenden Sie die Schaltflächen, um sie zu ändern.");
                    embed.setFooter({
                        text: "Überprüfen Sie die Servereinstellungen mit /settings",
                    });
                    enableButton.setLabel("Aktivieren");
                    disableButton.setLabel("Deaktivieren");
                    contextMenu.setPlaceholder("Wählen Sie eine Einstellung aus");
                    break;
                case "fr":
                    embed.setTitle("Modifier les paramètres");
                    embed.setDescription("Sélectionnez un paramètre et utilisez les boutons pour le modifier.");
                    embed.setFooter({
                        text: "Vérifiez les paramètres du serveur avec /settings",
                    });
                    enableButton.setLabel("Activer");
                    disableButton.setLabel("Désactiver");
                    contextMenu.setPlaceholder("Sélectionnez un paramètre");
                    break;
                case "es":
                    embed.setTitle("Cambiar ajustes");
                    embed.setDescription("Seleccione un ajuste y use los botones para cambiarlo.");
                    embed.setFooter({
                        text: "Consulte la configuración del servidor con /settings",
                    });
                    enableButton.setLabel("Habilitar");
                    disableButton.setLabel("Deshabilitar");
                    contextMenu.setPlaceholder("Seleccione un ajuste");
                    break;
                case "it":
                    embed.setTitle("Cambia impostazioni");
                    embed.setDescription("Seleziona un'impostazione e usa i pulsanti per cambiarla.");
                    embed.setFooter({
                        text: "Controlla le impostazioni del server con /settings",
                    });
                    enableButton.setLabel("Abilitare");
                    disableButton.setLabel("Disabilitare");
                    contextMenu.setPlaceholder("Seleziona un'impostazione");
                    break;
                case "pt":
                    embed.setTitle("Alterar configurações");
                    embed.setDescription("Selecione uma configuração e use os botões para alterá-la.");
                    embed.setFooter({
                        text: "Verifique as configurações do servidor com /settings",
                    });
                    enableButton.setLabel("Habilitar");
                    disableButton.setLabel("Desabilitar");
                    contextMenu.setPlaceholder("Selecione uma configuração");
                    break;
                case "ru":
                    embed.setTitle("Изменить настройки");
                    embed.setDescription("Выберите настройку и используйте кнопки для изменения.");
                    embed.setFooter({
                        text: "Проверьте настройки сервера с помощью /settings",
                    });
                    enableButton.setLabel("Включить");
                    disableButton.setLabel("Отключить");
                    contextMenu.setPlaceholder("Выберите настройку");
                    break;
                case "tr":
                    embed.setTitle("Ayarları değiştir");
                    embed.setDescription("Bir ayar seçin ve değiştirmek için düğmeleri kullanın.");
                    embed.setFooter({
                        text: "Sunucu ayarlarını /settings ile kontrol edin",
                    });
                    enableButton.setLabel("Etkinleştir");
                    disableButton.setLabel("Devre dışı bırak");
                    contextMenu.setPlaceholder("Bir ayar seçin");
                    break;
                case "zh":
                    embed.setTitle("更改设置");
                    embed.setDescription("选择一个设置并使用按钮进行更改。");
                    embed.setFooter({ text: "使用 /settings 检查服务器设置" });
                    enableButton.setLabel("启用");
                    disableButton.setLabel("禁用");
                    contextMenu.setPlaceholder("选择一个设置");
                    break;
                case "ja":
                    embed.setTitle("設定を変更する");
                    embed.setDescription("設定を選択し、ボタンを使用して変更します。");
                    embed.setFooter({ text: "/settings でサーバーの設定を確認" });
                    enableButton.setLabel("有効にする");
                    disableButton.setLabel("無効にする");
                    contextMenu.setPlaceholder("設定を選択");
                    break;
                case "ko":
                    embed.setTitle("설정 변경");
                    embed.setDescription("설정을 선택하고 버튼을 사용하여 변경하십시오.");
                    embed.setFooter({ text: "/settings로 서버 설정 확인" });
                    enableButton.setLabel("사용");
                    disableButton.setLabel("사용 안 함");
                    contextMenu.setPlaceholder("설정 선택");
                    break;
                case "nl":
                    embed.setTitle("Instellingen wijzigen");
                    embed.setDescription("Selecteer een instelling en gebruik de knoppen om deze te wijzigen.");
                    embed.setFooter({
                        text: "Controleer de serverinstellingen met /settings",
                    });
                    enableButton.setLabel("Inschakelen");
                    disableButton.setLabel("Uitschakelen");
                    contextMenu.setPlaceholder("Selecteer een instelling");
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
            contextMenu.setPlaceholder("Select a setting");
        }
        (client.channels.cache.get(interaction.channelId)).send({
            embeds: [embed],
            components: [
                new discord_js_1.ActionRowBuilder().addComponents([
                    enableButton,
                    disableButton,
                ]),
                new discord_js_1.ActionRowBuilder().addComponents([
                    contextMenu,
                ]),
            ],
        });
    }));
});
