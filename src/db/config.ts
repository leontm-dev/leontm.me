// Imports

import mongoose from "mongoose";

// Project-Imports

import { importableRepo } from "../types/repo";

// Code

const importableRepoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  repoUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  command: {
    type: String,
    required: true,
  },
});

const configSchema = new mongoose.Schema({
  findMe: {
    type: String,
    required: true,
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: String,
    required: true,
  },
  importableRepos: [importableRepoSchema],
});

const Config = mongoose.model("Config", configSchema, "Config");
const addIR = async (repo: importableRepo) => {
  const config = await Config.findOne({ findMe: "default" });
  return Config.updateOne(
    { findMe: "default" },
    { importableRepos: config?.importableRepos.push(repo) }
  );
};
const removeIR = async (repo: importableRepo) => {
  const config = await Config.findOne({ findMe: "default" });
  return Config.updateOne(
    { findMe: "default" },
    {
      importableRepos: config?.importableRepos.filter((r) => {
        if (r._id) {
          return r._id !== repo._id;
        }
      }),
    }
  );
};
const editIR = async (repo: importableRepo) => {
  const config = await Config.findOne({ findMe: "default" });
  return Config.updateOne(
    { findMe: "default" },
    {
      importableRepos: config?.importableRepos.map((r) => {
        if (r._id === repo._id) {
          return repo;
        }
        return r;
      }),
    }
  );
};
const getConfig = async () => Config.findOne({ findMe: "default" });

// Exports

export { Config, addIR, removeIR, editIR, getConfig };
