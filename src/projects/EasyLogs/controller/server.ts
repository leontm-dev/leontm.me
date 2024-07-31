// Imports

import express from "express";

// Project-Imports

import {
  createS,
  getS,
  deleteS,
  updateLanguageForS,
  updateLogChannelForS,
  updateSettingsForS,
} from "../db/server";
import sendApiResponse from "../../../helpers/sendApiResponse";
import validateReq from "../../../helpers/validateReq";

// Code

const createServer = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId } = req.body;
    if (!discordId)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId is missing"))
        .end();

    const server = await createS(discordId);
    if (!server)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Internal Server Error"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server created successfully"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};
const getServer = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId } = req.query;
    if (!discordId)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId is missing"))
        .end();

    const server = await getS(<string>discordId);
    if (!server)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Server not found"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server found"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};
const deleteServer = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId } = req.body;
    if (!discordId)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId is missing"))
        .end();

    const server = await deleteS(discordId);
    if (!server)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Server not found"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server deleted"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};
const updateLanguageForServer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId, language } = req.body;
    if (!discordId || !language)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId or language is missing"))
        .end();

    const server = await updateLanguageForS(discordId, language);
    if (!server)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Server not found"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server updated"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};
const updateLogChannelForServer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId, logChannel } = req.body;
    if (!discordId || !logChannel)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId or logChannel is missing"))
        .end();

    const server = await updateLogChannelForS(discordId, logChannel);
    if (!server)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Server not found"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server updated"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};
const updateSettingsForServer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 4))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "Unauthorized"))
        .end();

    const { discordId, settings } = req.body;
    if (!discordId || !settings)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "discordId or settings is missing"))
        .end();

    const server = await updateSettingsForS(discordId, settings);
    if (!server)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Server not found"))
        .end();

    return res
      .status(200)
      .json(sendApiResponse(200, { server }, "Server updated"))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal Server Error"))
      .end();
  }
};

// Exports

export {
  createServer,
  getServer,
  deleteServer,
  updateLanguageForServer,
  updateLogChannelForServer,
  updateSettingsForServer,
};
