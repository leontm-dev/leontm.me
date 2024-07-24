// Imports

import { exec } from "child_process";
import path from "path";
import fs from "fs-extra";
import { importableRepo } from "../types/repo";

// Code

function loadRepo(repo: importableRepo) {
  const fullPath = path.join(
    __dirname.replace("helpers", "runnableProjects"),
    repo.name
  );

  if (fs.existsSync(fullPath)) {
    console.log(
      `${repo.name} | Repository existiert. Prüfe auf Aktualisierungen...`
    );
    exec(`git -C ${fullPath} rev-parse HEAD`, (error, localHash) => {
      if (error) {
        console.error(
          `${repo.name} | Fehler beim Abrufen des lokalen Commit-Hash:`,
          error
        );
        return;
      }

      exec(`git ls-remote ${repo.url} HEAD`, (error, remoteHash) => {
        if (error) {
          console.error(
            `${repo.name} | Fehler beim Abrufen des Remote-Commit-Hash:`,
            error
          );
          return;
        }

        if (localHash.split(" ")[0] !== remoteHash.split("\t")[0]) {
          console.log(
            `${repo.name} | Neuere Version des Repositories verfügbar. Aktualisiere...`
          );
          updateRepo(repo, fullPath);
        } else {
          console.log(`${repo.name} | Aktuellste Version bereits vorhanden.`);
        }
      });
    });
  } else {
    console.log(`${repo.name} | Lokale Kopie existiert nicht. Klone...`);
    cloneRepo(repo, fullPath);
  }
}

function cloneRepo(repo: importableRepo, fullPath: string) {
  exec(`git clone ${repo.url} ${fullPath}`, (error) => {
    if (error) {
      console.error(
        `${repo.name} | Fehler beim Klonen des Repositories:`,
        error
      );
      return;
    }

    console.log(`${repo.name} | Repository erfolgreich geklont.`);

    exec(`cd ${fullPath} && yarn`, async (installError) => {
      if (installError) {
        console.error(
          `${repo.name} | Fehler bei der Installation der Abhängigkeiten:`,
          installError
        );
        return;
      }

      console.log(`${repo.name} | Abhängigkeiten installiert.`);
    });
  });
}

function updateRepo(repo: importableRepo, fullPath: string) {
  exec(`git -C ${fullPath} pull`, (error) => {
    if (error) {
      console.error(
        `${repo.name} | Fehler beim Aktualisieren der lokalen Kopie:`,
        error
      );
      return;
    }

    console.log(`${repo.name} | Lokale Kopie erfolgreich aktualisiert.`);

    exec(`cd ${fullPath} && yarn`, async (installError) => {
      if (installError) {
        console.error(
          `${repo.name} | Fehler bei der Installation der Abhängigkeiten:`,
          installError
        );
        return;
      }

      console.log(`${repo.name} | Abhängigkeiten installiert.`);
    });
  });
}

// Exports

export default loadRepo;
