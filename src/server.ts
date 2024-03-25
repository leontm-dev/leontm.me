// Imports

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

// Project-Imports

import api from "./router/api";
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

mongoose.connect(<string>process.env.DatabaseURL);

// Code

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

mongoose.connection.on("connected", () => {
  console.log("Database connected!");
});
mongoose.connection.on("error", (err) => {
  console.log(`Couldn't connect to the database because of: ${err}`);
});

app.use("/api", api());
app.use("/", router());
