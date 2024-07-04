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
const bot_1 = require("../bot");
// Code
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("ready", (clientT) => {
        var _a;
        (_a = clientT.user) === null || _a === void 0 ? void 0 : _a.setPresence({
            afk: false,
            status: "online",
            activities: [
                {
                    name: "Use /invite",
                    type: 3,
                    state: "Use this command to add me to your server!",
                    url: "https://leontm.me/discord/ltm/logs",
                },
                {
                    name: `Logging events on ${client.guilds.cache.size} guilds`,
                    type: 3,
                    state: "Thanks to all of those!",
                },
            ],
        });
        console.log("Online!");
        try {
            client.channels.cache.get(bot_1.configChannels.console).send({
                content: "I am online now!",
            });
        }
        catch (error) {
            console.log(error);
        }
    });
});
