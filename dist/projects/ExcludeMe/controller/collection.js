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
exports.deleteCollectionByName = exports.deleteCollectionById = exports.updateCollectionByName = exports.updateCollectionById = exports.getCollectionByName = exports.getCollectionById = exports.getAllCollections = exports.createCollection = void 0;
// Project-Imports
const sendApiResponse_1 = __importDefault(require("../../../helpers/sendApiResponse"));
const collection_1 = require("../db/collection");
// Code
const createCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, creator, websites } = req.body;
        if (!name || !creator || !websites) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.createC)(name, creator, websites);
        if (!collection) {
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Something went wrong"))
                .end();
        }
        return res
            .status(201)
            .json((0, sendApiResponse_1.default)(201, collection, "Collection created"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.createCollection = createCollection;
const getAllCollections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collections = yield (0, collection_1.getAllC)();
        if (!collections) {
            return res
                .status(500)
                .json((0, sendApiResponse_1.default)(500, null, "Something went wrong"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collections, "Collections fetched"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.getAllCollections = getAllCollections;
const getCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id == "") {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.getCById)(id);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection fetched"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.getCollectionById = getCollectionById;
const getCollectionByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.getCByName)(name);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection fetched"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.getCollectionByName = getCollectionByName;
const updateCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { websites } = req.body;
        if (!id || !websites) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.updateCById)(id, websites);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection updated"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.updateCollectionById = updateCollectionById;
const updateCollectionByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const { websites } = req.body;
        if (!name || !websites) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.updateCByName)(name, websites);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection updated"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.updateCollectionByName = updateCollectionByName;
const deleteCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.deleteCById)(id);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection deleted"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.deleteCollectionById = deleteCollectionById;
const deleteCollectionByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            return res
                .status(400)
                .json((0, sendApiResponse_1.default)(400, null, "Missing required fields"))
                .end();
        }
        const collection = yield (0, collection_1.deleteCByName)(name);
        if (!collection) {
            return res
                .status(404)
                .json((0, sendApiResponse_1.default)(404, null, "Collection not found"))
                .end();
        }
        return res
            .status(200)
            .json((0, sendApiResponse_1.default)(200, collection, "Collection deleted"))
            .end();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json((0, sendApiResponse_1.default)(500, null, "Internal Server Error"))
            .end();
    }
});
exports.deleteCollectionByName = deleteCollectionByName;
// Path: src/db/collection.ts
