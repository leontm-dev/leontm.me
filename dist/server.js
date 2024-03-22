"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
// Project-Imports
const api_1 = __importDefault(require("./router/api"));
const router_1 = __importDefault(require("./router"));
// Presets
const app = (0, express_1.default)();
// Configs
dotenv_1.default.config();
app.use((0, cors_1.default)({
    methods: ["GET", "POST", "DELETE", "PATCH"],
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "pages/public")));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "pages/views"));
mongoose_1.default.connect(process.env.DatabaseURL);
// Code
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
mongoose_1.default.connection.on("connected", () => {
    console.log("Database connected");
});
app.use("/api", (0, api_1.default)());
app.use("/", (0, router_1.default)());
