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
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
// Code
function loadRepo(repo) {
    const fullPath = path_1.default.join(__dirname.replace("helpers", "runnableProjects"), repo.fileName);
    if (fs_extra_1.default.existsSync(fullPath)) {
        console.log(`${repo.name} | Repository existiert. Prüfe auf Aktualisierungen...`);
        (0, child_process_1.exec)(`git -C ${fullPath} rev-parse HEAD`, (error, localHash) => {
            if (error) {
                console.error(`${repo.name} | Fehler beim Abrufen des lokalen Commit-Hash:`, error);
                return;
            }
            (0, child_process_1.exec)(`git ls-remote ${repo.url} HEAD`, (error, remoteHash) => {
                if (error) {
                    console.error(`${repo.name} | Fehler beim Abrufen des Remote-Commit-Hash:`, error);
                    return;
                }
                if (localHash.split(" ")[0] !== remoteHash.split("\t")[0]) {
                    console.log(`${repo.name} | Neuere Version des Repositories verfügbar. Aktualisiere...`);
                    updateRepo(repo, fullPath);
                }
                else {
                    console.log(`${repo.name} | Aktuellste Version bereits vorhanden.`);
                }
            });
        });
    }
    else {
        console.log(`${repo.name} | Lokale Kopie existiert nicht. Klone...`);
        cloneRepo(repo, fullPath);
    }
}
function cloneRepo(repo, fullPath) {
    (0, child_process_1.exec)(`git clone ${repo.url} ${fullPath}`, (error) => {
        if (error) {
            console.error(`${repo.name} | Fehler beim Klonen des Repositories:`, error);
            return;
        }
        console.log(`${repo.name} | Repository erfolgreich geklont.`);
        (0, child_process_1.exec)(`cd ${fullPath} && yarn`, (installError) => __awaiter(this, void 0, void 0, function* () {
            if (installError) {
                console.error(`${repo.name} | Fehler bei der Installation der Abhängigkeiten:`, installError);
                return;
            }
            console.log(`${repo.name} | Abhängigkeiten installiert.`);
        }));
    });
}
function updateRepo(repo, fullPath) {
    (0, child_process_1.exec)(`git -C ${fullPath} pull`, (error) => {
        if (error) {
            console.error(`${repo.name} | Fehler beim Aktualisieren der lokalen Kopie:`, error);
            return;
        }
        console.log(`${repo.name} | Lokale Kopie erfolgreich aktualisiert.`);
        (0, child_process_1.exec)(`cd ${fullPath} && yarn`, (installError) => __awaiter(this, void 0, void 0, function* () {
            if (installError) {
                console.error(`${repo.name} | Fehler bei der Installation der Abhängigkeiten:`, installError);
                return;
            }
            console.log(`${repo.name} | Abhängigkeiten installiert.`);
        }));
    });
}
// Exports
exports.default = loadRepo;
