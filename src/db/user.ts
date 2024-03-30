// Imports

import mongoose from "mongoose";

// Presets

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  auth: {
    connections: [
      {
        salt: {
          type: String,
          required: true,
          select: false,
        },
        key: {
          type: String,
          required: true,
          select: false,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    password: {
      salt: {
        type: String,
        required: true,
        select: false,
      },
      key: {
        type: String,
        required: true,
        select: false,
      },
    },
    session: {
      salt: {
        type: String,
        required: true,
        select: false,
      },
      name: {
        type: String,
        required: true,
      },
      key: {
        type: String,
        required: true,
        select: false,
      },
    },
    devices: [
      {
        name: {
          type: String,
          required: true,
        },
        ip: {
          salt: {
            type: String,
            required: true,
            select: false,
          },
          address: {
            type: String,
            required: true,
            select: false,
          },
        },
      },
    ],
  },
  services: {
    used: [
      {
        name: {
          type: String,
          required: true,
        },
        data: {
          type: Object,
          required: true,
        },
        first: {
          type: Date,
          required: true,
        },
      },
    ],
    userInfo: {
      profilePic: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      shownConnections: {
        type: [String],
        default: [],
      },
      tags: {
        type: [String],
        default: [],
      },
      permissions: {
        admin: {
          type: Boolean,
          default: false,
          select: false,
        },
        editUsers: {
          type: Boolean,
          default: false,
          select: false,
        },
        editPermissions: {
          type: Boolean,
          default: false,
          select: false,
        },
        editOwnProfile: {
          type: Boolean,
          default: true,
          select: false,
        },
        editOtherProfile: {
          type: Boolean,
          default: false,
          select: false,
        },
        checkDatabase: {
          type: Boolean,
          default: false,
          select: false,
        },
        editProducts: {
          type: Boolean,
          default: false,
          select: false,
        },
        editGlobalSettings: {
          type: Boolean,
          default: false,
          select: false,
        },
        editLocalSettings: {
          type: Boolean,
          default: true,
          select: false,
        },
      },
    },
  },
});
const UserModel = mongoose.model("User", userSchema, "user");

// Code

const createU = async (username: string, auth: Record<string, any>) =>
  UserModel.create({ username, auth });
const deleteU = async (username: string) =>
  UserModel.findOneAndDelete({ username });
const getUbyUsername = async (username: string) =>
  UserModel.findOne({ username });
const getUBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "auth.session.key": sessionToken });
const getUById = async (id: string) => UserModel.findById(id);
const updateUAuth = async (username: string, auth: Record<string, any>) =>
  UserModel.findOneAndUpdate({ username }, { auth });
const updateUServices = async (
  username: string,
  services: Record<string, any>
) => UserModel.findOneAndUpdate({ username }, { services });
const updateUInfo = async (username: string, userInfo: Record<string, any>) =>
  UserModel.findOneAndUpdate({ username }, { userInfo });

// Exports

export {
  UserModel,
  createU,
  deleteU,
  getUbyUsername,
  getUById,
  getUBySessionToken,
  updateUAuth,
  updateUServices,
  updateUInfo,
};
