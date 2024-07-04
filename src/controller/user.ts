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
import validateReq from "../helpers/validateReq";

// Code

const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 1).p)
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
const getUserByUsername = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 1).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await getUbyUsername(req.params.username);
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
const getUserById = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 1).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await getUById(req.params.id);
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
const getUserBySessionToken = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!validateReq(req, 1).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await getUBySessionToken(req.params.token);
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
const updateUserAuth = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 2).p)
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
    if (!validateReq(req, 2).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await updateUInfo(req.params.id, req.body);
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
    if (!validateReq(req, 2).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await updateUServices(req.params.id, req.body);
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
    if (!validateReq(req, 4).p)
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const user = await deleteU(req.params.id);
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
  getUserByUsername,
  getUserById,
  getUserBySessionToken,
  updateUserAuth,
  updateUserInfo,
  updateUserServices,
  deleteUser,
};
