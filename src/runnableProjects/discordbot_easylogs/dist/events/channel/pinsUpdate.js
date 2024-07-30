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
    client.on("channelPinsUpdate", (channel, date) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38;
        const server = yield (0, server_1.getServer)(client.channels.cache.get(channel.id).guildId);
        if (!server)
            return;
        if (!server.logChannel)
            return;
        if (!((_a = server.serverEvents) === null || _a === void 0 ? void 0 : _a.channelPinsUpdate))
            return;
        const embed = new discord_js_1.EmbedBuilder().setColor("Greyple").setTimestamp();
        let auditLog = yield ((_c = (_b = channel.lastMessage) === null || _b === void 0 ? void 0 : _b.guild) === null || _c === void 0 ? void 0 : _c.fetchAuditLogs({
            type: undefined,
            limit: 1,
        }));
        let auditLogEvent = auditLog === null || auditLog === void 0 ? void 0 : auditLog.entries.first();
        if (((_d = auditLog === null || auditLog === void 0 ? void 0 : auditLog.entries.first()) === null || _d === void 0 ? void 0 : _d.action) === 74) {
            switch (server.language) {
                case "en":
                    embed.setTitle("New message pinned");
                    embed.setDescription(`pinned by: ${(_e = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _e === void 0 ? void 0 : _e.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              pinned at: ${new Date(date).toLocaleString("en-GB")}\n
              message: ${(_f = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _f === void 0 ? void 0 : _f.url}`);
                    embed.setFooter({ text: "Logs by LTM | Logs" });
                    break;
                case "de":
                    embed.setTitle("Neue Nachricht angeheftet");
                    embed.setDescription(`angeheftet von: ${(_g = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _g === void 0 ? void 0 : _g.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              angeheftet am: ${new Date(date).toLocaleString("de-DE")}\n
              Nachricht: ${(_h = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _h === void 0 ? void 0 : _h.url}`);
                    embed.setFooter({ text: "Logs von LTM | Logs" });
                    break;
                case "fr":
                    embed.setTitle("Nouveau message épinglé");
                    embed.setDescription(`épinglé par: ${(_j = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _j === void 0 ? void 0 : _j.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              épinglé à: ${new Date(date).toLocaleString("fr-FR")}\n
              message: ${(_k = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _k === void 0 ? void 0 : _k.url}`);
                    embed.setFooter({ text: "Logs par LTM | Logs" });
                    break;
                case "it":
                    embed.setTitle("Nuovo messaggio fissato");
                    embed.setDescription(`fissato da: ${(_l = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _l === void 0 ? void 0 : _l.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              fissato a: ${new Date(date).toLocaleString("it-IT")}\n
              messaggio: ${(_m = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _m === void 0 ? void 0 : _m.url}`);
                    embed.setFooter({ text: "Log di LTM | Logs" });
                    break;
                case "nl":
                    embed.setTitle("Nieuw bericht vastgezet");
                    embed.setDescription(`vastgezet door: ${(_o = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _o === void 0 ? void 0 : _o.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              vastgezet op: ${new Date(date).toLocaleString("nl-NL")}\n
              bericht: ${(_p = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _p === void 0 ? void 0 : _p.url}`);
                    embed.setFooter({ text: "Logs door LTM | Logs" });
                    break;
                case "pl":
                    embed.setTitle("Nowa wiadomość przypięta");
                    embed.setDescription(`przypięta przez: ${(_q = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _q === void 0 ? void 0 : _q.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              przypięta o: ${new Date(date).toLocaleString("pl-PL")}\n
              wiadomość: ${(_r = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _r === void 0 ? void 0 : _r.url}`);
                    embed.setFooter({ text: "Logi przez LTM | Logs" });
                    break;
                case "es":
                    embed.setTitle("Nuevo mensaje fijado");
                    embed.setDescription(`fijado por: ${(_s = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _s === void 0 ? void 0 : _s.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              fijado en: ${new Date(date).toLocaleString("es-ES")}\n
              mensaje: ${(_t = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _t === void 0 ? void 0 : _t.url}`);
                    embed.setFooter({ text: "Logs por LTM | Logs" });
                    break;
                case "pt":
                    embed.setTitle("Nova mensagem fixada");
                    embed.setDescription(`fixado por: ${(_u = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _u === void 0 ? void 0 : _u.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              fixado em: ${new Date(date).toLocaleString("pt-PT")}\n
              mensagem: ${(_v = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _v === void 0 ? void 0 : _v.url}`);
                    embed.setFooter({ text: "Logs por LTM | Logs" });
                    break;
                case "ru":
                    embed.setTitle("Новое закрепленное сообщение");
                    embed.setDescription(`закреплено: ${(_w = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _w === void 0 ? void 0 : _w.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              закреплено в: ${new Date(date).toLocaleString("ru-RU")}\n
              сообщение: ${(_x = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _x === void 0 ? void 0 : _x.url}`);
                    embed.setFooter({ text: "Логи от LTM | Logs" });
                    break;
                case "tr":
                    embed.setTitle("Yeni sabitlenmiş mesaj");
                    embed.setDescription(`sabitlenen: ${(_y = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _y === void 0 ? void 0 : _y.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              sabitlenen tarih: ${new Date(date).toLocaleString("tr-TR")}\n
              mesaj: ${(_z = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _z === void 0 ? void 0 : _z.url}`);
                    embed.setFooter({ text: "Loglar LTM | Logs" });
                    break;
                case "ja":
                    embed.setTitle("新しいメッセージがピン留めされました");
                    embed.setDescription(`ピン留め者: ${(_0 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _0 === void 0 ? void 0 : _0.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              ピン留めされた日: ${new Date(date).toLocaleString("ja-JP")}\n
              メッセージ: ${(_1 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _1 === void 0 ? void 0 : _1.url}`);
                    embed.setFooter({ text: "ログ LTM | Logs" });
                case "zh":
                    embed.setTitle("新消息已固定");
                    embed.setDescription(`固定者: ${(_2 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _2 === void 0 ? void 0 : _2.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              固定日期: ${new Date(date).toLocaleString("zh-CN")}\n
              消息: ${(_3 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _3 === void 0 ? void 0 : _3.url}`);
                    embed.setFooter({ text: "日志由 LTM | Logs" });
                    break;
                case "ko":
                    embed.setTitle("새로운 메시지 고정됨");
                    embed.setDescription(`고정자: ${(_4 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _4 === void 0 ? void 0 : _4.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              고정된 날짜: ${new Date(date).toLocaleString("ko-KR")}\n
              메시지: ${(_5 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _5 === void 0 ? void 0 : _5.url}`);
                    embed.setFooter({ text: "로그 LTM | Logs" });
                    break;
                default:
                    embed.setTitle("New message pinned");
                    embed.setDescription(`pinned by: ${(_6 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _6 === void 0 ? void 0 : _6.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
              pinned at: ${new Date(date).toLocaleString("en-GB")}\n
              message: ${(_7 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _7 === void 0 ? void 0 : _7.url}`);
                    embed.setFooter({ text: "Logs by LTM | Logs" });
                    break;
            }
        }
        else if (((_8 = auditLog === null || auditLog === void 0 ? void 0 : auditLog.entries.first()) === null || _8 === void 0 ? void 0 : _8.action) === 75) {
            switch (server.language) {
                case "en":
                    embed.setTitle("Message unpinned");
                    embed.setDescription(`unpinned by: ${(_9 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _9 === void 0 ? void 0 : _9.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    unpinned at: ${new Date(date).toLocaleString("en-GB")}\n
                    message: ${(_10 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _10 === void 0 ? void 0 : _10.url}`);
                    embed.setFooter({ text: "Logs by LTM | Logs" });
                    break;
                case "de":
                    embed.setTitle("Nachricht nicht mehr angeheftet");
                    embed.setDescription(`nicht mehr angeheftet von: ${(_11 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _11 === void 0 ? void 0 : _11.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    nicht mehr angeheftet am: ${new Date(date).toLocaleString("de-DE")}\n
                    Nachricht: ${(_12 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _12 === void 0 ? void 0 : _12.url}`);
                    embed.setFooter({ text: "Logs von LTM | Logs" });
                    break;
                case "fr":
                    embed.setTitle("Message détaché");
                    embed.setDescription(`détaché par: ${(_13 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _13 === void 0 ? void 0 : _13.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    détaché à: ${new Date(date).toLocaleString("fr-FR")}\n
                    message: ${(_14 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _14 === void 0 ? void 0 : _14.url}`);
                    embed.setFooter({ text: "Logs par LTM | Logs" });
                    break;
                case "it":
                    embed.setTitle("Messaggio non più fissato");
                    embed.setDescription(`non più fissato da: ${(_15 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _15 === void 0 ? void 0 : _15.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    non più fissato a: ${new Date(date).toLocaleString("it-IT")}\n
                    messaggio: ${(_16 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _16 === void 0 ? void 0 : _16.url}`);
                    embed.setFooter({ text: "Log di LTM | Logs" });
                    break;
                case "nl":
                    embed.setTitle("Bericht niet meer vastgezet");
                    embed.setDescription(`niet meer vastgezet door: ${(_17 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _17 === void 0 ? void 0 : _17.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    niet meer vastgezet op: ${new Date(date).toLocaleString("nl-NL")}\n
                    bericht: ${(_18 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _18 === void 0 ? void 0 : _18.url}`);
                    embed.setFooter({ text: "Logs door LTM | Logs" });
                    break;
                case "pl":
                    embed.setTitle("Wiadomość nieprzypięta");
                    embed.setDescription(`nieprzypięta przez: ${(_19 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _19 === void 0 ? void 0 : _19.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    nieprzypięta o: ${new Date(date).toLocaleString("pl-PL")}\n
                    wiadomość: ${(_20 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _20 === void 0 ? void 0 : _20.url}`);
                    embed.setFooter({ text: "Logi przez LTM | Logs" });
                    break;
                case "es":
                    embed.setTitle("Mensaje desanclado");
                    embed.setDescription(`desanclado por: ${(_21 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _21 === void 0 ? void 0 : _21.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    desanclado en: ${new Date(date).toLocaleString("es-ES")}\n
                    mensaje: ${(_22 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _22 === void 0 ? void 0 : _22.url}`);
                    embed.setFooter({ text: "Logs por LTM | Logs" });
                    break;
                case "pt":
                    embed.setTitle("Mensagem desafixada");
                    embed.setDescription(`desafixada por: ${(_23 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _23 === void 0 ? void 0 : _23.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    desafixada em: ${new Date(date).toLocaleString("pt-PT")}\n
                    mensagem: ${(_24 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _24 === void 0 ? void 0 : _24.url}`);
                    embed.setFooter({ text: "Logs por LTM | Logs" });
                    break;
                case "ru":
                    embed.setTitle("Сообщение откреплено");
                    embed.setDescription(`откреплено: ${(_25 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _25 === void 0 ? void 0 : _25.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    откреплено в: ${new Date(date).toLocaleString("ru-RU")}\n
                    сообщение: ${(_26 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _26 === void 0 ? void 0 : _26.url}`);
                    embed.setFooter({ text: "Логи от LTM | Logs" });
                    break;
                case "tr":
                    embed.setTitle("Mesaj sabitlenmemiş");
                    embed.setDescription(`sabitlenmemiş: ${(_27 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _27 === void 0 ? void 0 : _27.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    sabitlenmemiş tarih: ${new Date(date).toLocaleString("tr-TR")}\n
                    mesaj: ${(_28 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _28 === void 0 ? void 0 : _28.url}`);
                    embed.setFooter({ text: "Loglar LTM | Logs" });
                    break;
                case "ja":
                    embed.setTitle("メッセージのピン留めが解除されました");
                    embed.setDescription(`ピン留め解除者: ${(_29 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _29 === void 0 ? void 0 : _29.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    ピン留め解除された日: ${new Date(date).toLocaleString("ja-JP")}\n
                    メッセージ: ${(_30 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _30 === void 0 ? void 0 : _30.url}`);
                    embed.setFooter({ text: "ログ LTM | Logs" });
                    break;
                case "zh":
                    embed.setTitle("消息已取消固定");
                    embed.setDescription(`取消固定者: ${(_31 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _31 === void 0 ? void 0 : _31.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    取消固定日期: ${new Date(date).toLocaleString("zh-CN")}\n
                    消息: ${(_32 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _32 === void 0 ? void 0 : _32.url}`);
                    embed.setFooter({ text: "日志由 LTM | Logs" });
                    break;
                case "ko":
                    embed.setTitle("메시지 고정 해제됨");
                    embed.setDescription(`고정 해제자: ${(_33 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _33 === void 0 ? void 0 : _33.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    고정 해제된 날짜: ${new Date(date).toLocaleString("ko-KR")}\n
                    메시지: ${(_34 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _34 === void 0 ? void 0 : _34.url}`);
                    embed.setFooter({ text: "로그 LTM | Logs" });
                    break;
                case "nl":
                    embed.setTitle("Bericht niet meer vastgezet");
                    embed.setDescription(`niet meer vastgezet door: ${(_35 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _35 === void 0 ? void 0 : _35.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    niet meer vastgezet op: ${new Date(date).toLocaleString("nl-NL")}\n
                    bericht: ${(_36 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _36 === void 0 ? void 0 : _36.url}`);
                    embed.setFooter({ text: "Logs door LTM | Logs" });
                    break;
                default:
                    embed.setTitle("Message unpinned");
                    embed.setDescription(`unpinned by: ${(_37 = auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executor) === null || _37 === void 0 ? void 0 : _37.globalName} (${auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.executorId})\n
                    unpinned at: ${new Date(date).toLocaleString("en-GB")}\n
                    message: ${(_38 = (client.channels.cache.get(channel.id)).messages.cache.get(auditLogEvent === null || auditLogEvent === void 0 ? void 0 : auditLogEvent.id)) === null || _38 === void 0 ? void 0 : _38.url}`);
                    embed.setFooter({ text: "Logs by LTM | Logs" });
                    break;
            }
        }
        try {
            yield client.channels.cache.get(server.logChannel).send({
                embeds: [embed],
            });
        }
        catch (error) {
            console.error(error);
        }
    }));
});
