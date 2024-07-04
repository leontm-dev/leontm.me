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
    client.on("channelCreate", (channel) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let embed = new discord_js_1.EmbedBuilder().setColor("Green").setTimestamp();
        let server = yield (0, server_1.getServer)(channel.guild.id);
        if (!server)
            return;
        if (!server.logChannel)
            return;
        if (!((_a = server.serverEvents) === null || _a === void 0 ? void 0 : _a.channelCreate))
            return;
        let description = ``;
        let deleteButton = new discord_js_1.ButtonBuilder()
            .setCustomId(`delete-channel-${channel.id}`)
            .setStyle(discord_js_1.ButtonStyle.Danger)
            .setEmoji("🗑️");
        switch (server.language) {
            case "en":
                description += `name: ${channel.name}\n`;
                description += `id: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Text-Channel created");
                        description += `type: Text-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Voice-Channel created");
                        description += `type: Voice-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Category created");
                        description += `type: Category\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Stage-Channel created");
                        description += `type: Stage-Channel\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum-Channel created");
                        description += `type: Forum-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Announcement-Channel created");
                        description += `type: Announcement-Channel\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Media-Channel created");
                        description += `type: Media-Channel\n`;
                        break;
                    default:
                        break;
                }
                description += `position: ${channel.position}\n`;
                description += `parent: ${(_b = channel.parent) === null || _b === void 0 ? void 0 : _b.name}\n`;
                description += `rawPosition: ${channel.rawPosition}\n`;
                description += `created: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Logs by LTM | Logs" });
                deleteButton.setLabel("Delete Channel");
                break;
            case "de":
                description += `Name: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Textkanal erstellt");
                        description += `Typ: Textkanal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Sprachkanal erstellt");
                        description += `Typ: Sprachkanal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Kategorie erstellt");
                        description += `Typ: Kategorie\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Bühnenkanal erstellt");
                        description += `Typ: Bühnenkanal\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum-Kanal erstellt");
                        description += `Typ: Forum-Kanal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Ankündigungskanal erstellt");
                        description += `Typ: Ankündigungskanal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Medienkanal erstellt");
                        description += `Typ: Medienkanal\n`;
                        break;
                    default:
                        break;
                }
                description += `Position: ${channel.position}\n`;
                description += `Überkategorie: ${(_c = channel.parent) === null || _c === void 0 ? void 0 : _c.name}\n`;
                description += `Rohposition: ${channel.rawPosition}\n`;
                description += `Erstellt: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Logs von LTM | Logs" });
                deleteButton.setLabel("Kanal löschen");
                break;
            case "fr":
                description += `Nom: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Salon de texte créé");
                        description += `Type: Salon de texte\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Salon vocal créé");
                        description += `Type: Salon vocal\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Catégorie créée");
                        description += `Type: Catégorie\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Salon de scène créé");
                        description += `Type: Salon de scène\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Salon de forum créé");
                        description += `Type: Salon de forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Salon d'annonce créé");
                        description += `Type: Salon d'annonce\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Salon multimédia créé");
                        description += `Type: Salon multimédia\n`;
                        break;
                    default:
                        break;
                }
                description += `Position: ${channel.position}\n`;
                description += `Parent: ${(_d = channel.parent) === null || _d === void 0 ? void 0 : _d.name}\n`;
                description += `Position brute: ${channel.rawPosition}\n`;
                description += `Créé: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Logs par LTM | Logs" });
                deleteButton.setLabel("Supprimer le canal");
                break;
            case "es":
                description += `Nombre: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canal de texto creado");
                        description += `Tipo: Canal de texto\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canal de voz creado");
                        description += `Tipo: Canal de voz\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoría creada");
                        description += `Tipo: Categoría\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canal de escenario creado");
                        description += `Tipo: Canal de escenario\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canal de foro creado");
                        description += `Tipo: Canal de foro\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canal de anuncios creado");
                        description += `Tipo: Canal de anuncios\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canal de medios creado");
                        description += `Tipo: Canal de medios\n`;
                        break;
                    default:
                        break;
                }
                description += `Posición: ${channel.position}\n`;
                description += `Padre: ${(_e = channel.parent) === null || _e === void 0 ? void 0 : _e.name}\n`;
                description += `Posición bruta: ${channel.rawPosition}\n`;
                description += `Creado: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Registros por LTM | Logs" });
                deleteButton.setLabel("Eliminar canal");
                break;
            case "it":
                description += `Nome: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canale di testo creato");
                        description += `Tipo: Canale di testo\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canale vocale creato");
                        description += `Tipo: Canale vocale\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoria creata");
                        description += `Tipo: Categoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canale di palco creato");
                        description += `Tipo: Canale di palco\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canale del forum creato");
                        description += `Tipo: Canale del forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canale degli annunci creato");
                        description += `Tipo: Canale degli annunci\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canale multimediale creato");
                        description += `Tipo: Canale multimediale\n`;
                        break;
                    default:
                        break;
                }
                description += `Posizione: ${channel.position}\n`;
                description += `Genitore: ${(_f = channel.parent) === null || _f === void 0 ? void 0 : _f.name}\n`;
                description += `Posizione grezza: ${channel.rawPosition}\n`;
                description += `Creato: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Log di LTM | Logs" });
                deleteButton.setLabel("Elimina canale");
                break;
            case "pt":
                description += `Nome: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Canal de texto criado");
                        description += `Tipo: Canal de texto\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Canal de voz criado");
                        description += `Tipo: Canal de voz\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Categoria criada");
                        description += `Tipo: Categoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Canal de palco criado");
                        description += `Tipo: Canal de palco\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Canal do fórum criado");
                        description += `Tipo: Canal do fórum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Canal de anúncios criado");
                        description += `Tipo: Canal de anúncios\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Canal de mídia criado");
                        description += `Tipo: Canal de mídia\n`;
                        break;
                    default:
                        break;
                }
                description += `Posição: ${channel.position}\n`;
                description += `Pai: ${(_g = channel.parent) === null || _g === void 0 ? void 0 : _g.name}\n`;
                description += `Posição bruta: ${channel.rawPosition}\n`;
                description += `Criado: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Logs por LTM | Logs" });
                deleteButton.setLabel("Excluir canal");
                break;
            case "pl":
                description += `Nazwa: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Utworzono kanał tekstowy");
                        description += `Typ: Kanał tekstowy\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Utworzono kanał głosowy");
                        description += `Typ: Kanał głosowy\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Utworzono kategorię");
                        description += `Typ: Kategoria\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Utworzono kanał sceny");
                        description += `Typ: Kanał sceny\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Utworzono kanał forum");
                        description += `Typ: Kanał forum\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Utworzono kanał ogłoszeń");
                        description += `Typ: Kanał ogłoszeń\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Utworzono kanał mediów");
                        description += `Typ: Kanał mediów\n`;
                        break;
                    default:
                        break;
                }
                description += `Pozycja: ${channel.position}\n`;
                description += `Rodzic: ${(_h = channel.parent) === null || _h === void 0 ? void 0 : _h.name}\n`;
                description += `Pozycja surowa: ${channel.rawPosition}\n`;
                description += `Utworzono: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Logi przez LTM | Logs" });
                deleteButton.setLabel("Usuń kanał");
                break;
            case "ru":
                description += `название: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Создан текстовый канал");
                        description += `тип: Текстовый канал\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Создан голосовой канал");
                        description += `тип: Голосовой канал\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Создана категория");
                        description += `тип: Категория\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Создан канал сцены");
                        description += `тип: Канал сцены\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Создан форум");
                        description += `тип: Форум\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Создан канал объявлений");
                        description += `тип: Канал объявлений\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Создан медиа-канал");
                        description += `тип: Медиа-канал\n`;
                        break;
                    default:
                        break;
                }
                description += `позиция: ${channel.position}\n`;
                description += `родитель: ${(_j = channel.parent) === null || _j === void 0 ? void 0 : _j.name}\n`;
                description += `сырая позиция: ${channel.rawPosition}\n`;
                description += `создан: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "Логи от LTM | Logs" });
                deleteButton.setLabel("Удалить канал");
                break;
            case "tr":
                description += `ad: ${channel.name}\n`;
                description += `kimlik: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("Metin Kanalı oluşturuldu");
                        description += `tip: Metin Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("Ses Kanalı oluşturuldu");
                        description += `tip: Ses Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("Kategori oluşturuldu");
                        description += `tip: Kategori\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("Sahne Kanalı oluşturuldu");
                        description += `tip: Sahne Kanalı\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("Forum Kanalı oluşturuldu");
                        description += `tip: Forum Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("Duyuru Kanalı oluşturuldu");
                        description += `tip: Duyuru Kanalı\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("Medya Kanalı oluşturuldu");
                        description += `tip: Medya Kanalı\n`;
                        break;
                    default:
                        break;
                }
                description += `pozisyon: ${channel.position}\n`;
                description += `ebeveyn: ${(_k = channel.parent) === null || _k === void 0 ? void 0 : _k.name}\n`;
                description += `ham pozisyon: ${channel.rawPosition}\n`;
                description += `oluşturuldu: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "LTM | Logs tarafından kaydedildi" });
                deleteButton.setLabel("Kanalı Sil");
                break;
            case "ja":
                description += `名前: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("テキストチャンネルが作成されました");
                        description += `タイプ: テキストチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("ボイスチャンネルが作成されました");
                        description += `タイプ: ボイスチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("カテゴリが作成されました");
                        description += `タイプ: カテゴリ\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("ステージチャンネルが作成されました");
                        description += `タイプ: ステージチャンネル\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("フォーラムチャンネルが作成されました");
                        description += `タイプ: フォーラムチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("アナウンスメントチャンネルが作成されました");
                        description += `タイプ: アナウンスメントチャンネル\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("メディアチャンネルが作成されました");
                        description += `タイプ: メディアチャンネル\n`;
                        break;
                    default:
                        break;
                }
                description += `位置: ${channel.position}\n`;
                description += `親: ${(_l = channel.parent) === null || _l === void 0 ? void 0 : _l.name}\n`;
                description += `生の位置: ${channel.rawPosition}\n`;
                description += `作成日時: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "LTM | Logsによって記録されました" });
                deleteButton.setLabel("チャンネルを削除");
                break;
            case "zh":
                description += `名称: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("创建了文本频道");
                        description += `类型: 文本频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("创建了语音频道");
                        description += `类型: 语音频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("创建了类别");
                        description += `类型: 类别\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("创建了舞台频道");
                        description += `类型: 舞台频道\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("创建了论坛频道");
                        description += `类型: 论坛频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("创建了公告频道");
                        description += `类型: 公告频道\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("创建了媒体频道");
                        description += `类型: 媒体频道\n`;
                        break;
                    default:
                        break;
                }
                description += `位置: ${channel.position}\n`;
                description += `父级: ${(_m = channel.parent) === null || _m === void 0 ? void 0 : _m.name}\n`;
                description += `原始位置: ${channel.rawPosition}\n`;
                description += `创建时间: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "由LTM | Logs记录" });
                deleteButton.setLabel("删除频道");
                break;
            case "ko":
                description += `이름: ${channel.name}\n`;
                description += `ID: ${channel.id}\n`;
                switch (channel.type) {
                    case discord_js_1.ChannelType.GuildText:
                        embed.setTitle("텍스트 채널이 생성되었습니다");
                        description += `유형: 텍스트 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildVoice:
                        embed.setTitle("음성 채널이 생성되었습니다");
                        description += `유형: 음성 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildCategory:
                        embed.setTitle("카테고리가 생성되었습니다");
                        description += `유형: 카테고리\n`;
                        break;
                    case discord_js_1.ChannelType.GuildStageVoice:
                        embed.setTitle("무대 채널이 생성되었습니다");
                        description += `유형: 무대 채널\n`;
                    case discord_js_1.ChannelType.GuildForum:
                        embed.setTitle("포럼 채널이 생성되었습니다");
                        description += `유형: 포럼 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildAnnouncement:
                        embed.setTitle("공지 채널이 생성되었습니다");
                        description += `유형: 공지 채널\n`;
                        break;
                    case discord_js_1.ChannelType.GuildMedia:
                        embed.setTitle("미디어 채널이 생성되었습니다");
                        description += `유형: 미디어 채널\n`;
                        break;
                    default:
                        break;
                }
                description += `위치: ${channel.position}\n`;
                description += `상위: ${(_o = channel.parent) === null || _o === void 0 ? void 0 : _o.name}\n`;
                description += `원시 위치: ${channel.rawPosition}\n`;
                description += `생성 날짜: ${new Date(channel.createdTimestamp)}\n`;
                embed.setFooter({ text: "LTM | Logs에 의해 기록됨" });
                deleteButton.setLabel("채널 삭제");
                break;
        }
        embed.setDescription(description);
        let row = new discord_js_1.ActionRowBuilder().addComponents(deleteButton);
        try {
            (channel.guild.channels.cache.get(server.logChannel)).send({ embeds: [embed], components: [row] });
        }
        catch (error) {
            console.log(error);
        }
    }));
});
