"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Code
dotenv_1.default.config();
const validateReq = (req, requestedTier) => {
    var _a;
    let returnObj = {
        p: false,
        requestedTier,
        currentTier: 0,
    };
    // Bestimme das aktuelle Tier basierend auf den Anforderungsheadern
    let actualTier = 0;
    if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}` &&
        req.headers["x-leontm-tier"] &&
        req.headers["x-leontm-auth"] === process.env.ADMIN_KEY) {
        actualTier = parseInt(req.headers["x-leontm-tier"]);
    }
    else if (req.baseUrl === "leontm.me" &&
        req.get("Referer") &&
        ((_a = req.get("Referer")) === null || _a === void 0 ? void 0 : _a.startsWith("https://leontm.me"))) {
        actualTier = 5; // Annahme, dass dies Tier 5 entspricht
    }
    else if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
        actualTier = 4; // Annahme, dass dies Tier 4 entspricht
    }
    // Prüfe, ob das aktuelle Tier gleich oder höher als das angeforderte Tier ist
    if (actualTier >= requestedTier) {
        returnObj.p = true;
        returnObj.currentTier = actualTier;
    }
    return returnObj;
};
// Exports
exports.default = validateReq;
