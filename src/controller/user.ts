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

// Code

const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
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
