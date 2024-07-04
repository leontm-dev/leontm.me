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
    client.on("channelDelete", (channel) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (channel instanceof discord_js_1.DMChannel)
            return;
        const server = yield (0, server_1.getServer)(channel.guild.id);
        if (!server)
            return;
        if (!server.logChannel)
            return;
        if (!((_a = server.serverEvents) === null || _a === void 0 ? void 0 : _a.channelDelete))
            return;
        const embed = new discord_js_1.EmbedBuilder().setColor("Red").setTimestamp();
        let description = "";
        const auditLog = yield channel.guild
            .fetchAuditLogs({ type: discord_js_1.AuditLogEvent.ChannelDelete })
            .then((audit) => {
            return audit.entries.first();
        });
        switch (server.language) {
            case "en":
                description += `name: ${channel.name}\n`;
                description += `id: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Text-Channel deleted");
                        description += `type: Text-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Voice-Channel deleted");
                        description += `type: Voice-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Category deleted");
                        description += `type: Category\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Announcement-Channel deleted");
                        description += `type: Announcement-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum-Channel deleted");
                        description += `type: Forum-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Media-Channel deleted");
                        description += `type: Media-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Stage-Voice-Channel deleted");
                        description += `type: Stage-Channel thread\n`;
                        break;
                }
                if (auditLog) {
                    description += `deleted by: ${(_b = auditLog.executor) === null || _b === void 0 ? void 0 : _b.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs by LTM | Logs" });
                break;
            case "de":
                description += `Name: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Text-Channel gelöscht");
                        description += `Typ: Text-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Voice-Channel gelöscht");
                        description += `Typ: Voice-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Kategorie gelöscht");
                        description += `Typ: Kategorie\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Ankündigungs-Channel gelöscht");
                        description += `Typ: Ankündigungs-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum-Channel gelöscht");
                        description += `Typ: Forum-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Media-Channel gelöscht");
                        description += `Typ: Media-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Stage-Voice-Channel gelöscht");
                        description += `Typ: Stage-Channel thread\n`;
                        break;
                }
                if (auditLog) {
                    description += `gelöscht von: ${(_c = auditLog.executor) === null || _c === void 0 ? void 0 : _c.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs von LTM | Logs" });
                break;
            case "fr":
                description += `Nom: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Salon de texte supprimé");
                        description += `Type: Salon de texte\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Salon vocal supprimé");
                        description += `Type: Salon vocal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Catégorie supprimée");
                        description += `Type: Catégorie\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Salon d'annonce supprimé");
                        description += `Type: Salon d'annonce\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Salon de forum supprimé");
                        description += `Type: Salon de forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Salon de média supprimé");
                        description += `Type: Salon de média\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Salon vocal de scène supprimé");
                        description += `Type: Salon de scène\n`;
                        break;
                }
                if (auditLog) {
                    description += `supprimé par: ${(_d = auditLog.executor) === null || _d === void 0 ? void 0 : _d.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs par LTM | Logs" });
                break;
            case "es":
                description += `Nombre: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canal de texto eliminado");
                        description += `Tipo: Canal de texto\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canal de voz eliminado");
                        description += `Tipo: Canal de voz\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoría eliminada");
                        description += `Tipo: Categoría\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canal de anuncios eliminado");
                        description += `Tipo: Canal de anuncios\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canal de foro eliminado");
                        description += `Tipo: Canal de foro\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canal de medios eliminado");
                        description += `Tipo: Canal de medios\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canal de voz de escenario eliminado");
                        description += `Tipo: Canal de escenario\n`;
                        break;
                }
                if (auditLog) {
                    description += `eliminado por: ${(_e = auditLog.executor) === null || _e === void 0 ? void 0 : _e.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs por LTM | Logs" });
                break;
            case "it":
                description += `Nome: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canale di testo eliminato");
                        description += `Tipo: Canale di testo\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canale vocale eliminato");
                        description += `Tipo: Canale vocale\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoria eliminata");
                        description += `Tipo: Categoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canale di annunci eliminato");
                        description += `Tipo: Canale di annunci\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canale del forum eliminato");
                        description += `Tipo: Canale del forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canale multimediale eliminato");
                        description += `Tipo: Canale multimediale\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canale vocale di scena eliminato");
                        description += `Tipo: Canale di scena\n`;
                        break;
                }
                if (auditLog) {
                    description += `eliminato da: ${(_f = auditLog.executor) === null || _f === void 0 ? void 0 : _f.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs da LTM | Logs" });
                break;
            case "pt":
                description += `Nome: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canal de texto excluído");
                        description += `Tipo: Canal de texto\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canal de voz excluído");
                        description += `Tipo: Canal de voz\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoria excluída");
                        description += `Tipo: Categoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canal de anúncios excluído");
                        description += `Tipo: Canal de anúncios\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canal do fórum excluído");
                        description += `Tipo: Canal do fórum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canal de mídia excluído");
                        description += `Tipo: Canal de mídia\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canal de voz de palco excluído");
                        description += `Tipo: Canal de palco\n`;
                        break;
                }
                if (auditLog) {
                    description += `excluído por: ${(_g = auditLog.executor) === null || _g === void 0 ? void 0 : _g.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs por LTM | Logs" });
                break;
            case "pl":
                description += `Nazwa: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Usunięto kanał tekstowy");
                        description += `Typ: Kanał tekstowy\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Usunięto kanał głosowy");
                        description += `Typ: Kanał głosowy\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Usunięto kategorię");
                        description += `Typ: Kategoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Usunięto kanał ogłoszeń");
                        description += `Typ: Kanał ogłoszeń\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Usunięto kanał forum");
                        description += `Typ: Kanał forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Usunięto kanał mediów");
                        description += `Typ: Kanał mediów\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Usunięto kanał głosowy sceny");
                        description += `Typ: Kanał sceny\n`;
                        break;
                }
                if (auditLog) {
                    description += `usunięty przez: ${(_h = auditLog.executor) === null || _h === void 0 ? void 0 : _h.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logi przez LTM | Logs" });
                break;
            case "ru":
                description += `Имя: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Удален текстовый канал");
                        description += `Тип: Текстовый канал\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Удален голосовой канал");
                        description += `Тип: Голосовой канал\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Удалена категория");
                        description += `Тип: Категория\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Удален канал объявлений");
                        description += `Тип: Канал объявлений\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Удален форум");
                        description += `Тип: Форум\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Удален медиа-канал");
                        description += `Тип: Медиа-канал\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Удален канал сцены");
                        description += `Тип: Канал сцены\n`;
                        break;
                }
                if (auditLog) {
                    description += `удалено: ${(_j = auditLog.executor) === null || _j === void 0 ? void 0 : _j.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Логи от LTM | Logs" });
                break;
            case "tr":
                description += `Ad: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Metin Kanalı silindi");
                        description += `Tip: Metin Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Sesli Kanal silindi");
                        description += `Tip: Sesli Kanal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Kategori silindi");
                        description += `Tip: Kategori\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Duyuru Kanalı silindi");
                        description += `Tip: Duyuru Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum silindi");
                        description += `Tip: Forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Medya Kanalı silindi");
                        description += `Tip: Medya Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Sahne Kanalı silindi");
                        description += `Tip: Sahne Kanalı\n`;
                        break;
                }
                if (auditLog) {
                    description += `tarafından silindi: ${(_k = auditLog.executor) === null || _k === void 0 ? void 0 : _k.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "LTM | Günlükler" });
                break;
            case "ja":
                description += `名前: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("テキストチャンネルが削除されました");
                        description += `タイプ: テキストチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("ボイスチャンネルが削除されました");
                        description += `タイプ: ボイスチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("カテゴリが削除されました");
                        description += `タイプ: カテゴリ\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("アナウンスメントチャンネルが削除されました");
                        description += `タイプ: アナウンスメントチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("フォーラムが削除されました");
                        description += `タイプ: フォーラム\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("メディアチャンネルが削除されました");
                        description += `タイプ: メディアチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("ステージボイスチャンネルが削除されました");
                        description += `タイプ: ステージチャンネル\n`;
                        break;
                }
                if (auditLog) {
                    description += `削除者: ${(_l = auditLog.executor) === null || _l === void 0 ? void 0 : _l.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "LTM | ログ" });
                break;
            case "zh":
                description += `名称: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("删除了文本频道");
                        description += `类型: 文本频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("删除了语音频道");
                        description += `类型: 语音频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("删除了类别");
                        description += `类型: 类别\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("删除了公告频道");
                        description += `类型: 公告频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("删除了论坛");
                        description += `类型: 论坛\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("删除了媒体频道");
                        description += `类型: 媒体频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("删除了舞台语音频道");
                        description += `类型: 舞台频道\n`;
                        break;
                }
                if (auditLog) {
                    description += `删除者: ${(_m = auditLog.executor) === null || _m === void 0 ? void 0 : _m.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "LTM | 日志" });
                break;
            case "ko":
                description += `이름: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("텍스트 채널이 삭제되었습니다");
                        description += `유형: 텍스트 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("음성 채널이 삭제되었습니다");
                        description += `유형: 음성 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("카테고리가 삭제되었습니다");
                        description += `유형: 카테고리\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("공지 채널이 삭제되었습니다");
                        description += `유형: 공지 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("포럼이 삭제되었습니다");
                        description += `유형: 포럼\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("미디어 채널이 삭제되었습니다");
                        description += `유형: 미디어 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("스테이지 음성 채널이 삭제되었습니다");
                        description += `유형: 스테이지 채널\n`;
                        break;
                }
                if (auditLog) {
                    description += `삭제자: ${(_o = auditLog.executor) === null || _o === void 0 ? void 0 : _o.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "LTM | 로그" });
                break;
            default:
                description += `name: ${channel.name}\n`;
                description += `id: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Text-Channel deleted");
                        description += `type: Text-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Voice-Channel deleted");
                        description += `type: Voice-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Category deleted");
                        description += `type: Category\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Announcement-Channel deleted");
                        description += `type: Announcement-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum-Channel deleted");
                        description += `type: Forum-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Media-Channel deleted");
                        description += `type: Media-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Stage-Voice-Channel deleted");
                        description += `type: Stage-Channel thread\n`;
                        break;
                }
                if (auditLog) {
                    description += `deleted by: ${(_p = auditLog.executor) === null || _p === void 0 ? void 0 : _p.username} (${auditLog.executorId})\n`;
                }
                embed.setFooter({ text: "Logs by LTM | Logs" });
                break;
        }
        embed.setDescription(description);
        try {
            client.channels.cache.get(server.logChannel).send({
                embeds: [embed],
            });
        }
        catch (error) {
            console.log(error);
        }
    }));
});
