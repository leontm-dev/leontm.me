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

// Presets

const app = express();

// Configs

env.config();

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
mongoose.connect(process.env.DATABASE_URL);

// Code

app.use("/", router());
app.listen(process.env.PORT || 10000, () => {
  console.log(`Server running on port ${process.env.PORT || 10000}`);
});

mongoose.connection.on("connected", () => {
  console.log("Database connected!");
});
mongoose.connection.on("error", (err) => {
  console.log(`Couldn't connect to the database because of: ${err}`);
});
