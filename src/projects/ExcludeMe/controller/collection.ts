// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../../../helpers/sendApiResponse";
import validateId from "../../../helpers/validateId";
import {
  createC,
  getAllC,
  getCById,
  getCByName,
  deleteCById,
  deleteCByName,
  updateCById,
  updateCByName,
} from "../db/collection";

// Code

const createCollection = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, creator, websites } = req.body;
    if (!name || !creator || !websites) {
      return sendApiResponse(400, null, "Missing required fields");
    }
    const collection = await createC(name, creator, websites);
    if (!collection) {
      return sendApiResponse(500, null, "Something went wrong");
    }
    return sendApiResponse(201, collection, "Collection created");
  } catch (error) {
    console.log(error);
    return sendApiResponse(500, null, "Internal Server Error");
  }
};
const getAllCollections = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const collections = await getAllC();
    if (!collections) {
      return sendApiResponse(500, null, "Something went wrong");
    }
    return sendApiResponse(200, collections, "Collections fetched");
  } catch (error) {
    console.log(error);
    return sendApiResponse(500, null, "Internal Server Error");
  }
};
const getCollectionById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (id == "") {
      return sendApiResponse(400, null, "Missing required fields");
    }
    const collection = await getCById(id);
    if (!collection) {
      return sendApiResponse(404, null, "Collection not found");
    }
    return sendApiResponse(200, collection, "Collection fetched");
  } catch (error) {
    console.log(error);
    return sendApiResponse(500, null, "Internal Server Error");
  }
};
const getCollectionByName = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.body;
    if (!name) {
      return sendApiResponse(400, null, "Missing required fields");
    }
    const collection = await getCByName(name);
    if (!collection) {
      return sendApiResponse(404, null, "Collection not found");
    }
    return sendApiResponse(200, collection, "Collection fetched");
  } catch (error) {
    console.log(error);
    return sendApiResponse(500, null, "Internal Server Error");
  }
};
const updateCollectionById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { websites } = req.body;
    if (!id || !websites) {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Missing required fields"))
        .end();
    }
    const collection = await updateCById(id, websites);
    if (!collection) {
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Collection not found"))
        .end();
    }
    return res
      .status(200)
      .json(sendApiResponse(200, collection, "Collection updated"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, null, "Internal Server Error"))
      .end();
  }
};
const updateCollectionByName = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.body;
    const { websites } = req.body;
    if (!name || !websites) {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Missing required fields"))
        .end();
    }
    const collection = await updateCByName(name, websites);
    if (!collection) {
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Collection not found"))
        .end();
    }
    return res
      .status(200)
      .json(sendApiResponse(200, collection, "Collection updated"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, null, "Internal Server Error"))
      .end();
  }
};

// Exports

export {
  createCollection,
  getAllCollections,
  getCollectionById,
  getCollectionByName,
  updateCollectionById,
  updateCollectionByName,
};

// Path: src/db/collection.ts
