"use strict";
// Imports
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const router_1 = __importDefault(require("./router"));
const pages_1 = __importDefault(require("./router/pages"));
const repoRunner_1 = __importDefault(require("./repoRunner"));
// Presets
const app = (0, express_1.default)();
// Configs
dotenv_1.default.config({ encoding: "UTF-8" });
app.use((0, cors_1.default)({
    methods: ["GET", "POST", "DELETE", "PUT"],
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "pages/public")));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "pages/views"));
if (!process.env.DATABASE_URL) {
    console.log("Please provide a database URL!");
    process.exit(1);
}
mongoose_1.default
    .connect(process.env.DATABASE_URL)
    .then((onfulfilled) => {
    console.log("Connected to database!");
})
    .catch((onrejected) => {
    console.log("Failed to connect to database!");
    process.exit(1);
});
// Code
app.use("/api", (0, router_1.default)());
app.use("/", (0, pages_1.default)());
app.listen(process.env.PORT || 10000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on port ${process.env.PORT || 10000}`);
    yield (0, repoRunner_1.default)();
}));
