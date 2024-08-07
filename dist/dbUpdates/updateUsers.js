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
const mongoose_1 = __importDefault(require("mongoose"));
// Project-Imports
const user_1 = require("../db/user");
// Code
const updateUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.UserModel.find();
        for (const user of users) {
            let updated = false;
            if (!user.information) {
                user.information = {
                    banner: "",
                    pfp: "",
                    description: "",
                };
                updated = true;
            }
            else {
                if (!user.information.banner) {
                    user.information.banner = "";
                    updated = true;
                }
                if (!user.information.pfp) {
                    user.information.pfp = "";
                    updated = true;
                }
                if (!user.information.description) {
                    user.information.description = "";
                    updated = true;
                }
            }
            if (updated) {
                yield user.save();
                console.log(`Updated user: ${user.username}`);
            }
        }
        console.log("All users updated");
    }
    catch (error) {
        console.error("Error updating users:", error);
    }
    finally {
        mongoose_1.default.connection.close();
    }
});
// Exports
exports.default = updateUsers;
