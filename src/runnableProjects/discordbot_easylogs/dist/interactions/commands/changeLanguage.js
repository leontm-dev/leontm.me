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
        var _a, _b, _c;
        if (interaction.isCommand()) {
            if (interaction.commandName === "change-language") {
                const server = yield (0, server_1.getServer)(interaction.guild.id);
                if (!server) {
                    yield interaction.reply({
                        content: "Server not found",
                        ephemeral: true,
                    });
                    return;
                }
                let language = interaction.options.get("language", true);
                if (!language) {
                    yield interaction.reply({
                        content: "You need to specify a language.",
                        ephemeral: true,
                    });
                    return;
                }
                yield (0, server_1.updateBotLanguage)(interaction.guild.id, (_a = language.value) === null || _a === void 0 ? void 0 : _a.valueOf());
                let message = "";
                switch ((_b = language.value) === null || _b === void 0 ? void 0 : _b.valueOf()) {
                    case "en":
                        message = `Change language to ${language.value.valueOf()}`;
                        break;
                    case "de":
                        message = `Sprache zu ${language.value.valueOf()} geändert`;
                        break;
                    case "fr":
                        message = `Langue changée en ${language.value.valueOf()}`;
                        break;
                    case "es":
                        message = `Idioma cambiado a ${language.value.valueOf()}`;
                        break;
                    case "ru":
                        message = `Язык изменен на ${language.value.valueOf()}`;
                        break;
                    case "pt":
                        message = `Idioma alterado para ${language.value.valueOf()}`;
                        break;
                    case "it":
                        message = `Lingua cambiata in ${language.value.valueOf()}`;
                        break;
                    case "pl":
                        message = `Język zmieniony na ${language.value.valueOf()}`;
                        break;
                    case "nl":
                        message = `Taal gewijzigd naar ${language.value.valueOf()}`;
                        break;
                    case "ja":
                        message = `言語を${language.value.valueOf()}に変更しました`;
                        break;
                    case "zh":
                        message = `语言更改为${language.value.valueOf()}`;
                        break;
                    case "ko":
                        message = `언어가 ${language.value.valueOf()}로 변경되었습니다`;
                        break;
                    default:
                        message = `Language updated to ${(_c = language.value) === null || _c === void 0 ? void 0 : _c.valueOf()}`;
                        break;
                }
                yield interaction.reply({
                    content: message,
                    ephemeral: true,
                });
            }
        }
    }));
});
