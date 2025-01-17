// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../../../helpers/sendApiResponse";
import {
  createCollection,
  getAllCollections,
  getCollectionById,
  getCollectionByName,
  updateCollectionById,
  updateCollectionByName,
  deleteCollectionById,
  deleteCollectionByName,
} from "../../../projects/ExcludeMe/controller/collection";

// Code

export default (router: express.Router) => {
  router.post("/projects/excludeMe/collection/create", createCollection);
  router.put("/projects/excludeMe/collection/update/:type", (req, res) => {
    if (req.params.type === "id") {
      return updateCollectionById(req, res);
    } else if (req.params.type === "name") {
      return updateCollectionByName(req, res);
    } else {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Invalid type"))
        .end();
    }
  });
  router.delete("/projects/excludeMe/collection/delete/:type", (req, res) => {
    if (req.params.type === "id") {
      return deleteCollectionById(req, res);
    } else if (req.params.type === "name") {
      return deleteCollectionByName(req, res);
    } else {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Invalid type"))
        .end();
    }
  });
  router.get("/projects/excludeMe/collection/get/:type", (req, res) => {
    if (req.params.type === "id") {
      return getCollectionById(req, res);
    } else if (req.params.type === "name") {
      return getCollectionByName(req, res);
    } else {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Invalid type"))
        .end();
    }
  });
  router.get("/projects/excludeMe/collection/getAll", getAllCollections);
  router.patch("/projects/excludeMe/collection/update/:type", (req, res) => {
    if (req.params.type === "id") {
      return updateCollectionById(req, res);
    } else if (req.params.type === "name") {
      return updateCollectionByName(req, res);
    } else {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Invalid type"))
        .end();
    }
  });
};
