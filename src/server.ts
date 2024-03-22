// Imports

const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");

// Settings

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
