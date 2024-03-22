"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAboutPage = exports.openHomePage = void 0;
// Code
const openHomePage = (req, res) => {
    res.render("home");
};
exports.openHomePage = openHomePage;
const openAboutPage = (req, res) => {
    res.render("about");
};
exports.openAboutPage = openAboutPage;
