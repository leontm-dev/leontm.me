// Imports

import express from "express";

// Project-Imports

import { create } from "../db/smurf";
import sendApiResponse from "../../../helper/sendApiResponse";

// Code

const createSmurf = async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body)
      return res.status(400).json(sendApiResponse(400, null)).end();

    const toBeCreated = req.body;
    delete toBeCreated.url;

    const smurf = await create(req.body.url, toBeCreated);
    if (!smurf) return res.status(400).json(sendApiResponse(400, null)).end();

    return res.status(204).json(sendApiResponse(204, null)).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendApiResponse(500, null)).end();
  }
};

// Exports

export { createSmurf };
