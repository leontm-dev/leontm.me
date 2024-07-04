import { exec } from "child_process";
import path from "path";

function loadRepo(repoUrl: string, repoPath: string) {
  console.log(__dirname);
  exec(`git clone ${repoUrl} ${repoPath}`, (error) => {
    if (error) {
      console.error("Fehler beim Klonen des Repositories:", error);
      return;
    }

    console.log("Repository erfolgreich geklont.");

    exec(`cd ${repoPath} && npm install`, async (installError) => {
      if (installError) {
        console.error(
          "Fehler bei der Installation der Abhängigkeiten:",
          installError
        );
        return;
      }

      console.log("Abhängigkeiten installiert.");

      try {
        const module = await import(`${repoPath}/path/to/module.js`);
        module.someFunction();
      } catch (importError) {
        console.error("Fehler beim Importieren des Moduls:", importError);
      }
    });
  });
}

// Exports

export { loadRepo };
