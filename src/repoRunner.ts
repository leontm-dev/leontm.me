// Imports

import dotenv from "dotenv";
import { importableRepo } from "./types/repo";
import { exec } from "child_process";

// Config

dotenv.config();

// Code

export default async () => {
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
        data.responseData.importableRepos.forEach((repo: importableRepo) => {
          console.log(`${repo.name} | Running repo...`);
          exec(
            `node src/runnableProjects/${repo.name}/${repo.fileName}`,
            (error, stdout, stderr) => {
              if (error) {
                console.log(error);
                return;
              }
            }
          );
        });
      }
    });
};
