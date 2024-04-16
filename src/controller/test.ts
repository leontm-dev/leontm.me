// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../helpers/sendApiResponse";

// Code

const testResponse = async (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .json(
      sendApiResponse(parseInt(<string>req.query.code), null, "Test successful")
    )
    .end();
};

// Exports

export { testResponse };
