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
const dotenv_1 = __importDefault(require("dotenv"));
const child_process_1 = require("child_process");
// Config
dotenv_1.default.config();
// Code
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    fetch("https://leontm.me/api/config", {
        method: "GET",
        headers: {
            Authorization: `DEV ${process.env.DEV_TOKEN}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.responseInformation.processable) {
            data.responseData.importableRepos.forEach((repo) => {
                console.log(`${repo.name} | Running repo...`);
                (0, child_process_1.exec)(`node /runnableProjects/${repo.name}/${repo.fileName}`, (error, stdout, stderr) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    console.log(`${repo.name} | stdout`);
                });
            });
        }
    });
});
