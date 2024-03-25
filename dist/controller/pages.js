"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAppStorePage = exports.openRegisterPage = exports.openLoginPage = exports.openProjectsPage = exports.openAccountPage = exports.openAboutPage = exports.openHomePage = void 0;
// Code
const openHomePage = (req, res) => {
    res.render("home");
};
exports.openHomePage = openHomePage;
const openAboutPage = (req, res) => {
    res.render("about");
};
exports.openAboutPage = openAboutPage;
const openAccountPage = (req, res) => {
    if (req.cookies.userToken) {
        res.render("account");
    }
    else {
        res.redirect("login");
    }
};
exports.openAccountPage = openAccountPage;
const openProjectsPage = (req, res) => {
    res.render("projects");
};
exports.openProjectsPage = openProjectsPage;
const openLoginPage = (req, res) => {
    res.render("login");
};
exports.openLoginPage = openLoginPage;
const openRegisterPage = (req, res) => {
    res.render("signup");
};
exports.openRegisterPage = openRegisterPage;
const openAppStorePage = (req, res) => {
    res.render("app-store");
};
exports.openAppStorePage = openAppStorePage;
