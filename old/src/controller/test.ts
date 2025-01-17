// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../helpers/sendApiResponse";
import validateReq from "../helpers/validateReq";

// Code

const testResponse = async (req: express.Request, res: express.Response) => {
  res
    .status(parseInt(<string>req.query.code))
    .json(
      sendApiResponse(
        parseInt(<string>req.query.code),
        validateReq(req, 6),
        "Test successful"
      )
    )
    .end();
};

// Exports

export { testResponse };
