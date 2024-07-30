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
        if (interaction.isCommand()) {
            if (interaction.commandName === "ping") {
                const server = yield (0, server_1.getServer)(interaction.guild.id);
                if (!server) {
                    yield interaction.reply({
                        content: "Server not found",
                        ephemeral: true,
                    });
                    return;
                }
                const language = server.language;
                if (!language) {
                    yield interaction.reply({
                        content: "Language not found",
                        ephemeral: true,
                    });
                    return;
                }
                let message = "";
                switch (language) {
                    case "en":
                        message = `The current ping is ${client.ws.ping}ms`;
                        break;
                    case "de":
                        message = `Der aktuelle Ping beträgt ${client.ws.ping}ms`;
                        break;
                    case "fr":
                        message = `Le ping actuel est de ${client.ws.ping}ms`;
                        break;
                    case "es":
                        message = `El ping actual es de ${client.ws.ping}ms`;
                        break;
                    case "ru":
                        message = `Текущий пинг составляет ${client.ws.ping}мс`;
                        break;
                    case "pt":
                        message = `O ping atual é de ${client.ws.ping}ms`;
                        break;
                    case "it":
                        message = `Il ping attuale è di ${client.ws.ping}ms`;
                        break;
                    case "pl":
                        message = `Aktualny ping wynosi ${client.ws.ping}ms`;
                        break;
                    case "nl":
                        message = `De huidige ping is ${client.ws.ping}ms`;
                        break;
                    case "ja":
                        message = `現在のピンは${client.ws.ping}msです`;
                        break;
                    case "zh":
                        message = `当前的ping为${client.ws.ping}ms`;
                        break;
                    case "ko":
                        message = `현재 핑은 ${client.ws.ping}ms입니다`;
                        break;
                    default:
                        message = `The current ping is ${client.ws.ping}ms`;
                        break;
                }
                yield interaction.reply(message);
            }
        }
    }));
});
