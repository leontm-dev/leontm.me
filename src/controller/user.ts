// Imports

import express from "express";

// Project-Imports

import {
  getAllU,
  getUbyUsername,
  getUById,
  getUBySessionToken,
  updateUAuth,
  updateUInfo,
  updateUServices,
  deleteU,
} from "../db/user";
import sendApiResponse from "../helpers/sendApiResponse";
import validateReq from "../helpers/validateReq";

// Code

const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 1))
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const users = await getAllU();
    res
      .status(200)
      .json(sendApiResponse(200, users, "The resource you requested."))
      .end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error, our bad." }).end();
  }
};

// Exports

export { getAllUsers };
