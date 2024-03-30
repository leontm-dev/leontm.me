// Imports

import express from "express";
import { get, identity, merge } from "lodash";

// Project-Imports

import { getUBySessionToken } from "../db/user";
import sendApiResponse from "../helpers/sendApiResponse";

// Code

const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["LEONTM-AUTH"];

    if (!sessionToken) {
      return res
        .status(401)
        .json(sendApiResponse(401, null, "The sessionToken is missing"))
        .end();
    }

    const user = await getUBySessionToken(sessionToken);
    if (!user) {
      return res
        .status(403)
        .json(sendApiResponse(403, null, "The sessionToken is invalid"))
        .end();
    }

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" }).end();
  }
};
