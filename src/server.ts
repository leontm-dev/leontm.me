// Imports

import express from "express";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";

// Presets

const app = express();

// Configs

env.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: "*",
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(2000, () => {
  console.log("Server running on port 2000");
});

// Routes

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
