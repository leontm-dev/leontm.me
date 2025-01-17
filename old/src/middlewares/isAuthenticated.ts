// Imports

import express from "express";
import { get, identity, merge } from "lodash";

// Project-Imports

import { getUBySessionToken } from "../db/users";
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
        .status(400)
        .json(sendApiResponse(400, null, "SessionToken is unavailable"))
        .render("login");
    }

    const user = await getUBySessionToken(sessionToken);
    if (!user) {
      return res
        .status(403)
        .json(sendApiResponse(403, null, "SessionToken is invalid."))
        .render("login");
    }

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(sendApiResponse(500, null, "Our fault."))
      .render("login");
  }
};

// Exports

export { isAuthenticated };
