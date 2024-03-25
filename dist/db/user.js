"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Presets
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    auth: {
        connections: [
            {
                salt: {
                    type: String,
                    required: true,
                    select: false,
                },
                key: {
                    type: String,
                    required: true,
                    select: false,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
        ],
        password: {
            salt: {
                type: String,
                required: true,
                select: false,
            },
            key: {
                type: String,
                required: true,
                select: false,
            },
        },
        session: {
            salt: {
                type: String,
                required: true,
                select: false,
            },
            name: {
                type: String,
                required: true,
            },
            key: {
                type: String,
                required: true,
                select: false,
            },
        },
        devices: [
            {
                name: {
                    type: String,
                    required: true,
                },
                ip: {
                    salt: {
                        type: String,
                        required: true,
                        select: false,
                    },
                    address: {
                        type: String,
                        required: true,
                        select: false,
                    },
                },
            },
        ],
    },
    services: {
        used: [
            {
                name: {
                    type: String,
                    required: true,
                },
                data: {
                    type: Object,
                    required: true,
                },
                first: {
                    type: Date,
                    required: true,
                },
            },
        ],
        userInfo: {
            profilePic: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
            shownConnections: {
                type: [String],
                default: [],
            },
            tags: {
                type: [String],
                default: [],
            },
            permissions: {
                admin: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editUsers: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editPermissions: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editOwnProfile: {
                    type: Boolean,
                    default: true,
                    select: false,
                },
                editOtherProfile: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                checkDatabase: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editProducts: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editGlobalSettings: {
                    type: Boolean,
                    default: false,
                    select: false,
                },
                editLocalSettings: {
                    type: Boolean,
                    default: true,
                    select: false,
                },
            },
        },
    },
});
