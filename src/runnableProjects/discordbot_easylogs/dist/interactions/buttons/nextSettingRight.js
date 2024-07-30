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
const changeSettings_1 = require("../commands/changeSettings");
const server_1 = require("../../controller/server");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!interaction.isButton())
            return;
        if (!interaction.customId.startsWith("next-setting-right"))
            return;
        const server = yield (0, server_1.getServer)(interaction.guildId);
        if (!server)
            return;
        let index = (_a = interaction.message.components[1].components[0].customId) === null || _a === void 0 ? void 0 : _a.replace("change-settings-menu-", "");
        const buttonRight = new discord_js_1.ButtonBuilder()
            .setCustomId("next-setting-right")
            .setStyle(discord_js_1.ButtonStyle.Secondary)
            .setDisabled(true)
            .setEmoji("➡️");
        const buttonLeft = new discord_js_1.ButtonBuilder()
            .setCustomId("next-setting-left")
            .setStyle(discord_js_1.ButtonStyle.Secondary)
            .setDisabled(false)
            .setEmoji("⬅️");
        switch (server.language) {
            case "en":
                buttonRight.setLabel("Next menu");
                buttonLeft.setLabel("Previous menu");
                changeSettings_1.contextMenu1.setPlaceholder("Select a setting #1");
                changeSettings_1.contextMenu2.setPlaceholder("Select a setting #2");
                changeSettings_1.contextMenu3.setPlaceholder("Select a setting #3");
                changeSettings_1.contextMenu4.setPlaceholder("Select a setting #4");
                changeSettings_1.contextMenu5.setPlaceholder("Select a setting #5");
                changeSettings_1.contextMenu6.setPlaceholder("Select a setting #6");
                break;
            case "de":
                buttonRight.setLabel("Nächstes Menü");
                buttonLeft.setLabel("Vorheriges Menü");
                changeSettings_1.contextMenu1.setPlaceholder("Wähle eine Einstellung #1");
                changeSettings_1.contextMenu2.setPlaceholder("Wähle eine Einstellung #2");
                changeSettings_1.contextMenu3.setPlaceholder("Wähle eine Einstellung #3");
                changeSettings_1.contextMenu4.setPlaceholder("Wähle eine Einstellung #4");
                changeSettings_1.contextMenu5.setPlaceholder("Wähle eine Einstellung #5");
                changeSettings_1.contextMenu6.setPlaceholder("Wähle eine Einstellung #6");
                break;
            case "fr":
                buttonRight.setLabel("Menu suivant");
                buttonLeft.setLabel("Menu précédent");
                changeSettings_1.contextMenu1.setPlaceholder("Sélectionnez un paramètre #1");
                changeSettings_1.contextMenu2.setPlaceholder("Sélectionnez un paramètre #2");
                changeSettings_1.contextMenu3.setPlaceholder("Sélectionnez un paramètre #3");
                changeSettings_1.contextMenu4.setPlaceholder("Sélectionnez un paramètre #4");
                changeSettings_1.contextMenu5.setPlaceholder("Sélectionnez un paramètre #5");
                changeSettings_1.contextMenu6.setPlaceholder("Sélectionnez un paramètre #6");
                break;
            case "es":
                buttonRight.setLabel("Siguiente menú");
                buttonLeft.setLabel("Menú anterior");
                changeSettings_1.contextMenu1.setPlaceholder("Selecciona un ajuste #1");
                changeSettings_1.contextMenu2.setPlaceholder("Selecciona un ajuste #2");
                changeSettings_1.contextMenu3.setPlaceholder("Selecciona un ajuste #3");
                changeSettings_1.contextMenu4.setPlaceholder("Selecciona un ajuste #4");
                changeSettings_1.contextMenu5.setPlaceholder("Selecciona un ajuste #5");
                changeSettings_1.contextMenu6.setPlaceholder("Selecciona un ajuste #6");
                break;
            case "it":
                buttonRight.setLabel("Menu successivo");
                buttonLeft.setLabel("Menu precedente");
                changeSettings_1.contextMenu1.setPlaceholder("Seleziona un'impostazione #1");
                changeSettings_1.contextMenu2.setPlaceholder("Seleziona un'impostazione #2");
                changeSettings_1.contextMenu3.setPlaceholder("Seleziona un'impostazione #3");
                changeSettings_1.contextMenu4.setPlaceholder("Seleziona un'impostazione #4");
                changeSettings_1.contextMenu5.setPlaceholder("Seleziona un'impostazione #5");
                changeSettings_1.contextMenu6.setPlaceholder("Seleziona un'impostazione #6");
                break;
            case "pt":
                buttonRight.setLabel("Próximo menu");
                buttonLeft.setLabel("Menu anterior");
                changeSettings_1.contextMenu1.setPlaceholder("Selecione uma configuração #1");
                changeSettings_1.contextMenu2.setPlaceholder("Selecione uma configuração #2");
                changeSettings_1.contextMenu3.setPlaceholder("Selecione uma configuração #3");
                changeSettings_1.contextMenu4.setPlaceholder("Selecione uma configuração #4");
                changeSettings_1.contextMenu5.setPlaceholder("Selecione uma configuração #5");
                changeSettings_1.contextMenu6.setPlaceholder("Selecione uma configuração #6");
                break;
            case "ru":
                buttonRight.setLabel("Следующее меню");
                buttonLeft.setLabel("Предыдущее меню");
                changeSettings_1.contextMenu1.setPlaceholder("Выберите настройку #1");
                changeSettings_1.contextMenu2.setPlaceholder("Выберите настройку #2");
                changeSettings_1.contextMenu3.setPlaceholder("Выберите настройку #3");
                changeSettings_1.contextMenu4.setPlaceholder("Выберите настройку #4");
                changeSettings_1.contextMenu5.setPlaceholder("Выберите настройку #5");
                changeSettings_1.contextMenu6.setPlaceholder("Выберите настройку #6");
                break;
            case "tr":
                buttonRight.setLabel("Sonraki menü");
                buttonLeft.setLabel("Önceki menü");
                changeSettings_1.contextMenu1.setPlaceholder("Bir ayar seçin #1");
                changeSettings_1.contextMenu2.setPlaceholder("Bir ayar seçin #2");
                changeSettings_1.contextMenu3.setPlaceholder("Bir ayar seçin #3");
                changeSettings_1.contextMenu4.setPlaceholder("Bir ayar seçin #4");
                changeSettings_1.contextMenu5.setPlaceholder("Bir ayar seçin #5");
                changeSettings_1.contextMenu6.setPlaceholder("Bir ayar seçin #6");
                break;
            case "nl":
                buttonRight.setLabel("Volgende menu");
                buttonLeft.setLabel("Vorige menu");
                changeSettings_1.contextMenu1.setPlaceholder("Selecteer een instelling #1");
                changeSettings_1.contextMenu2.setPlaceholder("Selecteer een instelling #2");
                changeSettings_1.contextMenu3.setPlaceholder("Selecteer een instelling #3");
                changeSettings_1.contextMenu4.setPlaceholder("Selecteer een instelling #4");
                changeSettings_1.contextMenu5.setPlaceholder("Selecteer een instelling #5");
                changeSettings_1.contextMenu6.setPlaceholder("Selecteer een instelling #6");
                break;
            case "ja":
                buttonRight.setLabel("次のメニュー");
                buttonLeft.setLabel("前のメニュー");
                changeSettings_1.contextMenu1.setPlaceholder("設定を選択 #1");
                changeSettings_1.contextMenu2.setPlaceholder("設定を選択 #2");
                changeSettings_1.contextMenu3.setPlaceholder("設定を選択 #3");
                changeSettings_1.contextMenu4.setPlaceholder("設定を選択 #4");
                changeSettings_1.contextMenu5.setPlaceholder("設定を選択 #5");
                changeSettings_1.contextMenu6.setPlaceholder("設定を選択 #6");
                break;
            case "zh":
                buttonRight.setLabel("下一个菜单");
                buttonLeft.setLabel("上一个菜单");
                changeSettings_1.contextMenu1.setPlaceholder("选择一个设置 #1");
                changeSettings_1.contextMenu2.setPlaceholder("选择一个设置 #2");
                changeSettings_1.contextMenu3.setPlaceholder("选择一个设置 #3");
                changeSettings_1.contextMenu4.setPlaceholder("选择一个设置 #4");
                changeSettings_1.contextMenu5.setPlaceholder("选择一个设置 #5");
                changeSettings_1.contextMenu6.setPlaceholder("选择一个设置 #6");
                break;
            case "ko":
                buttonRight.setLabel("다음 메뉴");
                buttonLeft.setLabel("이전 메뉴");
                changeSettings_1.contextMenu1.setPlaceholder("설정 선택 #1");
                changeSettings_1.contextMenu2.setPlaceholder("설정 선택 #2");
                changeSettings_1.contextMenu3.setPlaceholder("설정 선택 #3");
                changeSettings_1.contextMenu4.setPlaceholder("설정 선택 #4");
                changeSettings_1.contextMenu5.setPlaceholder("설정 선택 #5");
                changeSettings_1.contextMenu6.setPlaceholder("설정 선택 #6");
                break;
            case "nl":
                buttonRight.setLabel("Volgende menu");
                buttonLeft.setLabel("Vorige menu");
                changeSettings_1.contextMenu1.setPlaceholder("Selecteer een instelling #1");
                changeSettings_1.contextMenu2.setPlaceholder("Selecteer een instelling #2");
                changeSettings_1.contextMenu3.setPlaceholder("Selecteer een instelling #3");
                changeSettings_1.contextMenu4.setPlaceholder("Selecteer een instelling #4");
                changeSettings_1.contextMenu5.setPlaceholder("Selecteer een instelling #5");
                changeSettings_1.contextMenu6.setPlaceholder("Selecteer een instelling #6");
                break;
            default:
                buttonRight.setLabel("Next menu");
                buttonLeft.setLabel("Previous menu");
                changeSettings_1.contextMenu1.setPlaceholder("Select a setting #1");
                changeSettings_1.contextMenu2.setPlaceholder("Select a setting #2");
                changeSettings_1.contextMenu3.setPlaceholder("Select a setting #3");
                changeSettings_1.contextMenu4.setPlaceholder("Select a setting #4");
                changeSettings_1.contextMenu5.setPlaceholder("Select a setting #5");
                changeSettings_1.contextMenu6.setPlaceholder("Select a setting #6");
                break;
        }
        switch (index) {
            case "1":
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(changeSettings_1.contextMenu2),
                        new discord_js_1.ActionRowBuilder().addComponents(buttonLeft),
                    ],
                });
                break;
            case "2":
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(changeSettings_1.contextMenu3),
                    ],
                });
                break;
            case "3":
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(changeSettings_1.contextMenu4),
                    ],
                });
                break;
            case "4":
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(changeSettings_1.contextMenu5),
                    ],
                });
                break;
            case "5":
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(changeSettings_1.contextMenu6),
                    ],
                });
                interaction.message.edit({
                    components: [
                        new discord_js_1.ActionRowBuilder().addComponents(buttonRight),
                    ],
                });
                break;
        }
    }));
});
