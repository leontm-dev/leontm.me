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

// Exports

export { createCollection };

// Path: src/db/collection.ts
