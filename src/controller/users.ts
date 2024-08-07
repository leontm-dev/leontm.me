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
} from "../db/users";
import sendApiResponse from "../helpers/sendApiResponse";
import validateReq from "../helpers/validateReq";

// Code

const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 5).p)
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
    res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};
const getUser = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 5).p) {
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    }

    const { id, username, token } = req.query;
    if (!id && !username && !token) {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No identifier provided."))
        .end();
    }

    const user = id
      ? await getUById(id as string)
      : username
      ? await getUbyUsername(username as string)
      : token
      ? await getUBySessionToken(token as string)
      : null;
    if (!user) {
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No identifier provided."))
        .end();
    }

    return res
      .status(200)
      .json(sendApiResponse(200, user, "The resource you requested."))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};
const updateUserAuth = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 5).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await updateUAuth(req.params.id, req.body);
    if (!user)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "User not found"))
        .end();
    res
      .status(200)
      .json(sendApiResponse(200, user, "The resource you requested."))
      .end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};
const updateUserInfo = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 5).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const { id } = req.query;
    if (!id)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No identifier provided."))
        .end();

    const body = req.body;
    if (!body)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No body provided."))
        .end();

    const user = await updateUInfo(id as string, body);
    if (!user)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "User not found"))
        .end();
    res
      .status(200)
      .json(sendApiResponse(200, user, "The resource you requested."))
      .end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};
const updateUserServices = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 5).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();

    const { id } = req.query;
    if (!id)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No identifier provided."))
        .end();

    const body = req.body;
    if (!body)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No body provided."))
        .end();

    const user = await updateUServices(id as string, body);
    if (!user)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "User not found"))
        .end();
    res
      .status(200)
      .json(sendApiResponse(200, user, "The resource you requested."))
      .end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};
const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 5).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();

    const { id } = req.query;
    if (!id)
      return res
        .status(400)
        .json(sendApiResponse(400, null, "No identifier provided."))
        .end();

    const user = await deleteU(id as string);
    if (!user)
      return res
        .status(404)
        .json(sendApiResponse(404, null, "User not found"))
        .end();
    res
      .status(200)
      .json(sendApiResponse(200, user, "The resource you requested."))
      .end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(sendApiResponse(500, { error }, "Internal error"))
      .end();
  }
};

// Exports

export {
  getAllUsers,
  getUser,
  updateUserAuth,
  updateUserInfo,
  updateUserServices,
  deleteUser,
};
