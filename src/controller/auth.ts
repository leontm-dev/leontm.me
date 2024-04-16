// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../helpers/sendApiResponse";
import validateId from "../helpers/validateId";
import { createU, getUbyUsername, UserModel } from "../db/user";
import { auth, random } from "../helpers/auth";
import validateReq from "../helpers/validateReq";

// Code

const register = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 1))
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json(
          sendApiResponse(
            400,
            null,
            "You forgot either username or password in your request body. Check that again."
          )
        )
        .end();
    }

    let passwordSalt: string = random();
    let sessionSalt: string = random();
    let ipSalt: string = random();
    const user = await createU(username, {
      connections: [{}],
      password: { salt: passwordSalt, key: auth(passwordSalt, password) },
      session: {
        salt: sessionSalt,
        key: auth(sessionSalt, random()),
      },
      devices: [
        {
          name: "Standard",
          ip: {
            salt: ipSalt,
            address: auth(ipSalt, String(req.ip)),
          },
        },
      ],
    });
    if (!user) {
      return res
        .status(400)
        .json(
          sendApiResponse(
            400,
            null,
            "Something went wrong while creating the user. The username may be unavailable."
          )
        )
        .end();
    }

    if (user.auth?.connections != null) {
      user.auth.connections[0].salt = random();
      user.auth.connections[0].key = auth(
        user.auth.connections[0].salt,
        user._id.toString()
      );
      user.auth.connections[0].ip = req.ip || "unknown";
    }

    await user.save();

    return res
      .cookie("LEONTM-AUTH", user.auth?.connections[0]?.key, {
        domain: "localhost",
      })
      .status(200)
      .json(sendApiResponse(200, user, "Your user."))
      .end();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        sendApiResponse(
          500,
          null,
          "Internal error, we will be working on this."
        )
      )
      .end();
  }
};
const login = async (req: express.Request, res: express.Response) => {
  try {
    if (!validateReq(req, 1))
      return res
        .status(403)
        .json(sendApiResponse(403, null, "No permissions for this request."))
        .end();
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json(
          sendApiResponse(
            400,
            null,
            "You forgot either username or password in the request body, please check it once more."
          )
        )
        .end();
    }

    const user = await UserModel.findOne({ username: username })
      .select("+auth.password.salt +auth.password.key")
      .populate("auth.connections");

    if (!user) {
      return res
        .status(400)
        .json(
          sendApiResponse(
            400,
            null,
            "Something went wrong with getting the user. The username may be incorrect."
          )
        )
        .end();
    }

    if (
      <string>user.auth?.password?.key !==
      <string>auth(<string>user.auth?.password?.salt, password)
    ) {
      return res
        .status(403)
        .json(
          sendApiResponse(
            403,
            null,
            "The given password is not matching with the one linked to the given username."
          )
        )
        .end();
    }
    if (user.auth?.connections != null) {
      const salt = random();
      user.auth.connections.push({
        salt: salt,
        key: auth(salt, user._id.toString()),
        ip: req.ip,
      });
    }

    await user.save();

    return res
      .cookie(
        "LEONTM-AUTH",
        user.auth?.connections[user.auth.connections.length - 1]?.key,
        {
          domain: "localhost",
        }
      )
      .status(200)
      .json(sendApiResponse(200, null, "You are now logged in."))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(
        sendApiResponse(500, null, "Internal server error, we will check it.")
      )
      .end();
  }
};

// Exports

export { register, login };
