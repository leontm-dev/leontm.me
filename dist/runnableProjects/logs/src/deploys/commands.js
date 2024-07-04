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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
// Configs
dotenv_1.default.config();
// Presets
const commands = [
    new discord_js_1.SlashCommandBuilder()
        .setName("setup")
        .setDescription("Setup the bot for your server.")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
        .setDescriptionLocalizations({
        "en-GB": "Setup the bot for your server.",
        "en-US": "Setup the bot for your server.",
        de: "Richte den Bot für deinen Server ein.",
        fr: "Configurez le bot pour votre serveur.",
        "es-ES": "Configura el bot para tu servidor.",
        tr: "Botu sunucunuz için kurun.",
        ru: "Настройте бота для своего сервера.",
        "pt-BR": "Configure o bot para o seu servidor.",
        it: "Configura il bot per il tuo server.",
        pl: "Skonfiguruj bota dla swojego serwera.",
        nl: "Stel de bot in voor je server.",
        ja: "サーバーのボットを設定します。",
        "zh-CN": "为您的服务器设置机器人。",
        ko: "서버에 봇을 설정하세요.",
    })
        .addChannelOption((option) => {
        return option
            .setName("channel")
            .setDescription("The channel where the logs should be sent to.")
            .setNameLocalizations({
            "en-GB": "channel",
            "en-US": "channel",
            de: "kanal",
            fr: "canal",
            "es-ES": "canal",
            tr: "kanal",
            ru: "канал",
            "pt-BR": "canal",
            it: "canale",
            pl: "kanał",
            nl: "kanaal",
            ja: "チャンネル",
            "zh-CN": "频道",
            ko: "채널",
        })
            .setDescriptionLocalizations({
            "en-GB": "The channel where the logs should be sent to.",
            "en-US": "The channel where the logs should be sent to.",
            de: "Der Kanal, in den die Logs gesendet werden sollen.",
            fr: "Le canal où les journaux doivent être envoyés.",
            "es-ES": "El canal donde se deben enviar los registros.",
            tr: "Günlüklerin gönderilmesi gereken kanal.",
            ru: "Канал, куда должны быть отправлены журналы.",
            "pt-BR": "O canal para onde os logs devem ser enviados.",
            it: "Il canale in cui inviare i log.",
            pl: "Kanał, do którego mają być wysyłane logi.",
            nl: "Het kanaal waar de logs naartoe moeten worden gestuurd.",
            ja: "ログを送信するチャンネル。",
            "zh-CN": "应将日志发送到的频道。",
            ko: "로그를 보낼 채널.",
        })
            .setRequired(true);
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("invite")
        .setDescription("Invite the bot to your server.")
        .setDescriptionLocalizations({
        "en-GB": "Invite the bot to your server.",
        "en-US": "Invite the bot to your server.",
        de: "Lade den Bot auf deinen Server ein.",
        fr: "Invitez le bot sur votre serveur.",
        "es-ES": "Invita al bot a tu servidor.",
        tr: "Botu sunucunuza davet edin.",
        ru: "Пригласите бота на свой сервер.",
        "pt-BR": "Convide o bot para o seu servidor.",
        it: "Invita il bot nel tuo server.",
        pl: "Zaproś bota na swój serwer.",
        nl: "Nodig de bot uit op je server.",
        ja: "ボットをサーバーに招待します。",
        "zh-CN": "邀请机器人加入您的服务器。",
        ko: "봇을 서버로 초대하세요.",
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help for the bot.")
        .setDescriptionLocalizations({
        "en-GB": "Get help for the bot.",
        "en-US": "Get help for the bot.",
        de: "Hilfe für den Bot.",
        fr: "Obtenez de l'aide pour le bot.",
        "es-ES": "Obtén ayuda para el bot.",
        tr: "Bot için yardım alın.",
        ru: "Получить помощь для бота.",
        "pt-BR": "Obtenha ajuda para o bot.",
        it: "Ottieni aiuto per il bot.",
        pl: "Uzyskaj pomoc dla bota.",
        nl: "Krijg hulp voor de bot.",
        ja: "ボットのヘルプを取得します。",
        "zh-CN": "获取机器人的帮助。",
        ko: "봇에 대한 도움말을 받으세요.",
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("change-language")
        .setDescription("Change the language of the bot.")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
        .setDescriptionLocalizations({
        "en-GB": "Change the language of the bot.",
        "en-US": "Change the language of the bot.",
        de: "Ändere die Sprache des Bots.",
        fr: "Changez la langue du bot.",
        "es-ES": "Cambia el idioma del bot.",
        tr: "Botun dilini değiştir.",
        ru: "Изменить язык бота.",
        "pt-BR": "Mude o idioma do bot.",
        it: "Cambia la lingua del bot.",
        pl: "Zmień język bota.",
        nl: "Verander de taal van de bot.",
        ja: "ボットの言語を変更します。",
        "zh-CN": "更改机器人的语言。",
        ko: "봇의 언어를 변경합니다.",
    })
        .addStringOption((option) => {
        return option
            .addChoices({
            name_localizations: {
                "en-GB": "english",
                "en-US": "english",
                de: "englisch",
                fr: "anglais",
                "es-ES": "inglés",
                tr: "ingilizce",
                ru: "английский",
                "pt-BR": "inglês",
                it: "inglese",
                pl: "angielski",
                nl: "engels",
                ja: "英語",
                "zh-CN": "英语",
                ko: "영어",
            },
            value: "en",
            name: "english",
        }, {
            name_localizations: {
                "en-GB": "german",
                "en-US": "german",
                de: "deutsch",
                fr: "allemand",
                "es-ES": "alemán",
                tr: "almanca",
                ru: "немецкий",
                "pt-BR": "alemão",
                it: "tedesco",
                pl: "niemiecki",
                nl: "duits",
                ja: "ドイツ語",
                "zh-CN": "德语",
                ko: "독일어",
            },
            name: "German",
            value: "de",
        }, {
            name_localizations: {
                "en-GB": "french",
                "en-US": "french",
                de: "französisch",
                fr: "français",
                "es-ES": "francés",
                tr: "fransızca",
                ru: "французский",
                "pt-BR": "francês",
                it: "francese",
                pl: "francuski",
                nl: "frans",
                ja: "フランス語",
                "zh-CN": "法语",
                ko: "프랑스어",
            },
            name: "french",
            value: "fr",
        }, {
            name_localizations: {
                "en-GB": "spanish",
                "en-US": "spanish",
                de: "spanisch",
                fr: "espagnol",
                "es-ES": "español",
                tr: "ispanyolca",
                ru: "испанский",
                "pt-BR": "espanhol",
                it: "spagnolo",
                pl: "hiszpański",
                nl: "spaans",
                ja: "スペイン語",
                "zh-CN": "西班牙语",
                ko: "스페인어",
            },
            name: "spanish",
            value: "es",
        }, {
            name_localizations: {
                "en-GB": "russian",
                "en-US": "russian",
                de: "russisch",
                fr: "russe",
                "es-ES": "ruso",
                tr: "rusça",
                ru: "русский",
                "pt-BR": "russo",
                it: "russo",
                pl: "rosyjski",
                nl: "russisch",
                ja: "ロシア語",
                "zh-CN": "俄语",
                ko: "러시아어",
            },
            name: "russian",
            value: "ru",
        }, {
            name_localizations: {
                "en-GB": "portuguese",
                "en-US": "portuguese",
                de: "portugiesisch",
                fr: "portugais",
                "es-ES": "portugués",
                tr: "portekizce",
                ru: "португальский",
                "pt-BR": "português",
                it: "portoghese",
                pl: "portugalski",
                nl: "portugees",
                ja: "ポルトガル語",
                "zh-CN": "葡萄牙语",
                ko: "포르투갈어",
            },
            name: "portuguese",
            value: "pt",
        }, {
            name_localizations: {
                "en-GB": "italian",
                "en-US": "italian",
                de: "italienisch",
                fr: "italien",
                "es-ES": "italiano",
                tr: "İtalyanca",
                ru: "итальянский",
                "pt-BR": "italiano",
                it: "italiano",
                pl: "włoski",
                nl: "italiaans",
                ja: "イタリア語",
                "zh-CN": "意大利语",
                ko: "이탈리아어",
            },
            name: "italian",
            value: "it",
        }, {
            name_localizations: {
                "en-GB": "turkish",
                "en-US": "turkish",
                de: "türkisch",
                fr: "turc",
                "es-ES": "turco",
                tr: "türk",
                ru: "турецкий",
                "pt-BR": "turco",
                it: "turco",
                pl: "turecki",
                nl: "turks",
                ja: "トルコ語",
                "zh-CN": "土耳其语",
                ko: "터키어",
            },
            name: "turkish",
            value: "tr",
        }, {
            name_localizations: {
                "en-GB": "polish",
                "en-US": "polish",
                de: "polnisch",
                fr: "polonais",
                "es-ES": "polaco",
                tr: "polonya",
                ru: "польский",
                "pt-BR": "polonês",
                it: "polacco",
                pl: "polski",
                nl: "pools",
                ja: "ポーランド語",
                "zh-CN": "波兰语",
                ko: "폴란드어",
            },
            name: "polish",
            value: "pl",
        }, {
            name_localizations: {
                "en-GB": "dutch",
                "en-US": "dutch",
                de: "holländisch",
                fr: "néerlandais",
                "es-ES": "holandés",
                tr: "hollanda",
                ru: "нидерландский",
                "pt-BR": "holandês",
                it: "olandese",
                pl: "holenderski",
                nl: "nederlands",
                ja: "オランダ語",
                "zh-CN": "荷兰语",
                ko: "네덜란드어",
            },
            name: "dutch",
            value: "nl",
        }, {
            name_localizations: {
                "en-GB": "japanese",
                "en-US": "japanese",
                de: "japanisch",
                fr: "japonais",
                "es-ES": "japonés",
                tr: "japonca",
                ru: "японский",
                "pt-BR": "japonês",
                it: "giapponese",
                pl: "japoński",
                nl: "japans",
                ja: "日本語",
                "zh-CN": "日语",
                ko: "일본어",
            },
            name: "japanese",
            value: "ja",
        }, {
            name_localizations: {
                "en-GB": "chinese",
                "en-US": "chinese",
                de: "chinesisch",
                fr: "chinois",
                "es-ES": "chino",
                tr: "çince",
                ru: "китайский",
                "pt-BR": "chinês",
                it: "cinese",
                pl: "chiński",
                nl: "chinees",
                ja: "中国語",
                "zh-CN": "中文",
                ko: "중국어",
            },
            name: "chinese",
            value: "zh",
        }, {
            name_localizations: {
                "en-GB": "korean",
                "en-US": "korean",
                de: "koreanisch",
                fr: "coréen",
                "es-ES": "coreano",
                tr: "korece",
                ru: "корейский",
                "pt-BR": "coreano",
                it: "coreano",
                pl: "koreański",
                nl: "koreaans",
                ja: "韓国語",
                "zh-CN": "韩语",
                ko: "korean",
            },
            name: "korean",
            value: "ko",
        })
            .setName("language")
            .setNameLocalizations({
            "en-GB": "language",
            "en-US": "language",
            de: "sprache",
            fr: "langue",
            "es-ES": "idioma",
            tr: "dil",
            ru: "язык",
            "pt-BR": "idioma",
            it: "lingua",
            pl: "język",
            nl: "taal",
            ja: "言語",
            "zh-CN": "语言",
            ko: "언어",
        })
            .setDescription("The language you want to set the bot to.")
            .setDescriptionLocalizations({
            "en-GB": "The language you want to set the bot to.",
            "en-US": "The language you want to set the bot to.",
            de: "Die Sprache, die du für den Bot einstellen möchtest.",
            fr: "La langue que vous souhaitez définir pour le bot.",
            "es-ES": "El idioma al que quieres configurar el bot.",
            tr: "Botu ayarlamak istediğiniz dil.",
            ru: "Язык, на который вы хотите установить бота.",
            "pt-BR": "O idioma que você deseja definir para o bot.",
            it: "La lingua che vuoi impostare per il bot.",
            pl: "Język, który chcesz ustawić dla bota.",
            nl: "De taal die je voor de bot wilt instellen.",
            ja: "ボットを設定する言語。",
            "zh-CN": "您要设置机器人的语言。",
            ko: "봇을 설정할 언어입니다.",
        })
            .setRequired(true);
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("settings")
        .setDescription("Check the current settings of the bot.")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
        .setDescriptionLocalizations({
        "en-GB": "Check the current settings of the bot.",
        "en-US": "Check the current settings of the bot.",
        de: "Überprüfen Sie die aktuellen Einstellungen des Bots.",
        fr: "Vérifiez les paramètres actuels du bot.",
        "es-ES": "Consulte la configuración actual del bot.",
        tr: "Botun mevcut ayarlarını kontrol edin.",
        ru: "Проверьте текущие настройки бота.",
        "pt-BR": "Verifique as configurações atuais do bot.",
        it: "Controlla le impostazioni attuali del bot.",
        pl: "Sprawdź bieżące ustawienia bota.",
        nl: "Controleer de huidige instellingen van de bot.",
        ja: "ボットの現在の設定を確認します。",
        "zh-CN": "检查机器人的当前设置。",
        ko: "봇의 현재 설정을 확인하세요.",
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("change-settings")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
        .setDescription("Change the settings of the bot.")
        .setDescriptionLocalizations({
        "en-GB": "Change the settings of the bot.",
        "en-US": "Change the settings of the bot.",
        de: "Ändern Sie die Einstellungen des Bots.",
        fr: "Modifiez les paramètres du bot.",
        "es-ES": "Cambie la configuración del bot.",
        tr: "Botun ayarlarını değiştirin.",
        ru: "Измените настройки бота.",
        "pt-BR": "Mude as configurações do bot.",
        it: "Modifica le impostazioni del bot.",
        pl: "Zmień ustawienia bota.",
        nl: "Wijzig de instellingen van de bot.",
        ja: "ボットの設定を変更します。",
        "zh-CN": "更改机器人的设置。",
        ko: "봇의 설정을 변경하세요.",
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Check the ping of the bot.")
        .setDescriptionLocalizations({
        "en-GB": "Check the ping of the bot.",
        "en-US": "Check the ping of the bot.",
        de: "Überprüfen Sie den Ping des Bots.",
        fr: "Vérifiez le ping du bot.",
        "es-ES": "Comprueba el ping del bot.",
        tr: "Botun pingini kontrol edin.",
        ru: "Проверьте пинг бота.",
        "pt-BR": "Verifique o ping do bot.",
        it: "Controlla il ping del bot.",
        pl: "Sprawdź ping bota.",
        nl: "Controleer de ping van de bot.",
        ja: "ボットのピンを確認します。",
        "zh-CN": "检查机器人的ping。",
        ko: "봇의 핑을 확인하세요.",
    }),
    new discord_js_1.SlashCommandBuilder()
        .setName("language")
        .setDescription("Check the current language of the bot.")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
        .setDescriptionLocalizations({
        "en-GB": "Check the current language of the bot.",
        "en-US": "Check the current language of the bot.",
        de: "Überprüfen Sie die aktuelle Sprache des Bots.",
        fr: "Vérifiez la langue actuelle du bot.",
        "es-ES": "Consulte el idioma actual del bot.",
        tr: "Botun mevcut dilini kontrol edin.",
        ru: "Проверьте текущий язык бота.",
        "pt-BR": "Verifique o idioma atual do bot.",
        it: "Controlla la lingua attuale del bot.",
        pl: "Sprawdź bieżący język bota.",
        nl: "Controleer de huidige taal van de bot.",
        ja: "ボットの現在の言語を確認します。",
        "zh-CN": "检查机器人的当前语言。",
        ko: "봇의 현재 언어를 확인하세요.",
    }),
];
// Code
const rest = new discord_js_1.REST().setToken(String(process.env.TOKEN));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        // The put method is used to fully refresh all commands in the guild with the current set
        const data = yield rest.put(discord_js_1.Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }
    catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
}))();
