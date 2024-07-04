// Imports

import express from "express";

// Project-Imports

import {
  getV,
  createC,
  getC,
  updateV,
  editIR,
  addIR,
  removeIR,
} from "../db/config";
import sendApiResponse from "../helpers/sendApiResponse";
import validateReq from "../helpers/validateReq";

// Code

const createConfig = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 6))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    if (!req.body.version)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Please provide a version"))
        .end();

    const config = await createC(req.body.version);
    if (!config)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Failed to create config"))
        .end();

    res.status(201).json(sendApiResponse(201, config, "Created")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const getConfig = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 3))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    const config = await getC();
    if (!config)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Config not found"))
        .end();

    res.status(200).json(sendApiResponse(200, config, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const getVersion = async (req: express.Request, res: express.Response) => {
  try {
    const version = await getV();
    if (!version)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Version not found"))
        .end();

    res.status(200).json(sendApiResponse(200, version, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const updateVersion = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 6))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    if (!req.body.version)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Please provide a version"))
        .end();

    const version = await updateV(req.body.version);
    if (!version)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Failed to update version"))
        .end();

    res.status(200).json(sendApiResponse(200, version, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const addImportableRepo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 6))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    if (!req.body.repo)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Please provide a repo"))
        .end();

    const repo = await addIR(req.body.repo);
    if (!repo)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Failed to add repo"))
        .end();

    res.status(200).json(sendApiResponse(200, repo, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const removeImportableRepo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 6))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    if (!req.body.repo)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Please provide a repo"))
        .end();

    const repo = await removeIR(req.body.repo);
    if (!repo)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Failed to remove repo"))
        .end();

    res.status(200).json(sendApiResponse(200, repo, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const editImportableRepo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 6))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    if (!req.body.repo)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "Please provide a repo"))
        .end();

    const repo = await editIR(req.body.repo);
    if (!repo)
      return res
        .status(500)
        .json(sendApiResponse(500, null, "Failed to edit repo"))
        .end();

    res.status(200).json(sendApiResponse(200, repo, "OK")).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};
const getImportableRepos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 3))
      return res
        .status(401)
        .json(sendApiResponse(401, null, "You have to have a higher tier"))
        .end();

    const config = await getC();
    if (!config)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "Config not found"))
        .end();

    res
      .status(200)
      .json(sendApiResponse(200, config.importableRepos, "OK"))
      .end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error: error }, "Internal Server Error"))
      .end();
  }
};

// Exports

export {
  createConfig,
  getConfig,
  getVersion,
  updateVersion,
  addImportableRepo,
  removeImportableRepo,
  editImportableRepo,
  getImportableRepos,
};
