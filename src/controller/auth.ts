// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../helpers/sendApiResponse";
import validateId from "../helpers/validateId";
import { createU, getUbyUsername, UserModel } from "../db/user";
import { auth, random } from "../helpers/auth";

// Code

const register = async (req: express.Request, res: express.Response) => {
  try {
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
    const user = await createU(username, {
      connections: [{}],
      password: { salt: passwordSalt, key: auth(passwordSalt, password) },
      session: {
        salt: sessionSalt,
        key: auth(sessionSalt, random()),
      },
      devices: [
        {
          name: "Start-Device",
          ip: {
            salt: random(),
            address: req.ip,
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

    return res.status(200).json(sendApiResponse(200, user, "Your user.")).end();
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

    const user = await UserModel.findOne({ username: username }).select(
      "+auth.password.salt +auth.password.key"
    );

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

    if (user.auth?.session != null) {
      user.auth.session.salt = random();
      user.auth.session.key = auth(user.auth.session.salt, user._id.toString());
    }

    await user.save();

    return res
      .cookie("LEONTM-AUTH", user.auth?.session?.key, {
        domain: "localhost",
        path: "/",
      })
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
