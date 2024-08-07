// Imports

import mongoose, { mongo } from "mongoose";

// Presets
const connectionSchema = new mongoose.Schema({
  salt: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    index: { expires: "7d" },
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  information: {
    banner: {
      type: String,
      default: "",
    },
    pfp: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  auth: {
    connections: {
      type: [
        {
          salt: {
            type: String,
            required: false,
          },
          key: {
            type: String,
            required: false,
          },
          createdAt: {
            type: Date,
            default: Date.now(),
            index: {
              expires: "7d",
            },
          },
          ip: {
            type: String,
            required: false,
          },
        },
      ],
    },
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
  },
  services: {
    used: {
      type: [
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
      default: [],
    },
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
  developer: {
    type: [
      {
        name: {
          type: String,
          required: true,
          unique: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
        secret: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
});
const UserModel = mongoose.model("User", userSchema, "User");

// Code

const getAllU = async () => UserModel.find();
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
const updateUInfo = async (
  username: string,
  userInfo: { banner: string; pfp: string; description: string }
) => UserModel.findOneAndUpdate({ username }, { information: userInfo });

// Exports

export {
  UserModel,
  getAllU,
  createU,
  deleteU,
  getUbyUsername,
  getUById,
  getUBySessionToken,
  updateUAuth,
  updateUServices,
  updateUInfo,
};
