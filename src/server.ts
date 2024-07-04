// Imports

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

// Project-Imports

import router from "./router";
import pages from "./router/pages";
import loadRepo from "./helpers/repoLoader";

// Presets

const app = express();
const version = "v0.0.4";

// Configs

env.config({ encoding: "UTF-8" });

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "pages/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages/views"));

if (!process.env.DATABASE_URL) {
  console.log("Please provide a database URL!");
  process.exit(1);
}
mongoose
  .connect(process.env.DATABASE_URL)
  .then((onfulfilled) => {
    console.log("Connected to database!");
  })
  .catch((onrejected) => {
    console.log("Failed to connect to database!");
    process.exit(1);
  });

// Code

app.use("/api", router());
app.use("/", pages());
app.listen(process.env.PORT || 10000, () => {
  console.log(`Server running on port ${process.env.PORT || 10000}`);
});

// Exports

export { version };
