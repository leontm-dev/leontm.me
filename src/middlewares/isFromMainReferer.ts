// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../helpers/sendApiResponse";

// Code

const isFromMainReferer = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const referer = req.get("Referer");
  if (referer && referer.startsWith("https://leontm.me")) {
    next();
  } else {
    res.status(403).json(sendApiResponse(403, null, "Forbidden")).end();
  }
};

// Exports

export default isFromMainReferer;
