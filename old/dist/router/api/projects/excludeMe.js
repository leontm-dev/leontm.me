"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Project-Imports
const sendApiResponse_1 = __importDefault(require("../../../helpers/sendApiResponse"));
const collection_1 = require("../../../projects/ExcludeMe/controller/collection");
// Code
exports.default = (router) => {
    router.post("/projects/excludeMe/collection/create", collection_1.createCollection);
    router.put("/projects/excludeMe/collection/update/:type", (req, res) => {
        if (req.params.type === "id") {
            return (0, collection_1.updateCollectionById)(req, res);
        }
        else if (req.params.type === "name") {
            return (0, collection_1.updateCollectionByName)(req, res);
        }
        else {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Invalid type"))
                .end();
        }
    });
    router.delete("/projects/excludeMe/collection/delete/:type", (req, res) => {
        if (req.params.type === "id") {
            return (0, collection_1.deleteCollectionById)(req, res);
        }
        else if (req.params.type === "name") {
            return (0, collection_1.deleteCollectionByName)(req, res);
        }
        else {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Invalid type"))
                .end();
        }
    });
    router.get("/projects/excludeMe/collection/get/:type", (req, res) => {
        if (req.params.type === "id") {
            return (0, collection_1.getCollectionById)(req, res);
        }
        else if (req.params.type === "name") {
            return (0, collection_1.getCollectionByName)(req, res);
        }
        else {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Invalid type"))
                .end();
        }
    });
    router.get("/projects/excludeMe/collection/getAll", collection_1.getAllCollections);
    router.patch("/projects/excludeMe/collection/update/:type", (req, res) => {
        if (req.params.type === "id") {
            return (0, collection_1.updateCollectionById)(req, res);
        }
        else if (req.params.type === "name") {
            return (0, collection_1.updateCollectionByName)(req, res);
        }
        else {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Invalid type"))
                .end();
        }
    });
};
