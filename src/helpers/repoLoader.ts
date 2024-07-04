// Imports

import { exec } from "child_process";
import path from "path";
import fs from "fs-extra";
import { importableRepo } from "../types/repo";

// Code

function loadRepo(repo: importableRepo) {
  const fullPath = path.join(
    __dirname.replace("helpers", "runnableProjects"),
    repo.fileName
  );

  // Prüfen, ob das Verzeichnis existiert
  if (fs.existsSync(fullPath)) {
    // Aktuellen lokalen Commit-Hash abrufen
    exec(`git -C ${fullPath} rev-parse HEAD`, (error, localHash) => {
      if (error) {
        console.error("Fehler beim Abrufen des lokalen Commit-Hash:", error);
        return;
      }

      // Neuesten Remote-Commit-Hash abrufen
      exec(`git ls-remote ${repo.url} HEAD`, (error, remoteHash) => {
        if (error) {
          console.error("Fehler beim Abrufen des Remote-Commit-Hash:", error);
          return;
        }

        if (localHash.split(" ")[0] !== remoteHash.split("\t")[0]) {
          console.log(
            "Neuere Version des Repositories verfügbar. Aktualisiere..."
          );
          updateRepo(fullPath);
        } else {
          console.log("Aktuellste Version bereits vorhanden.");
        }
      });
    });
  } else {
    console.log("Repository existiert nicht. Klone...");
    cloneRepo(repo.url, fullPath);
  }
}

function cloneRepo(repoUrl: string, fullPath: string) {
  exec(`git clone ${repoUrl} ${fullPath}`, (error) => {
    if (error) {
      console.error("Fehler beim Klonen des Repositories:", error);
      return;
    }

    console.log("Repository erfolgreich geklont.");

    exec(`cd ${fullPath} && yarn`, async (installError) => {
      if (installError) {
        console.error(
          "Fehler bei der Installation der Abhängigkeiten:",
          installError
        );
        return;
      }

      console.log("Abhängigkeiten installiert.");

      runRepo(fullPath);
    });
  });
}

function updateRepo(fullPath: string) {
  exec(`git -C ${fullPath} pull`, (error) => {
    if (error) {
      console.error("Fehler beim Aktualisieren des Repositories:", error);
      return;
    }

    console.log("Repository erfolgreich aktualisiert.");

    exec(`cd ${fullPath} && yarn`, async (installError) => {
      if (installError) {
        console.error(
          "Fehler bei der Installation der Abhängigkeiten:",
          installError
        );
        return;
      }

      console.log("Abhängigkeiten installiert.");

      runRepo(fullPath);
    });
  });
}
function runRepo(fullPath: string) {
  try {
    exec(`cd ${fullPath} && yarn run start`);
  } catch (importError) {
    console.error("Fehler beim Starten des Projekts: ", importError);
  }
}

// Exports

export default loadRepo;
