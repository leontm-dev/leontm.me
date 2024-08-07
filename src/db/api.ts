// Imports

import mongoose from "mongoose";

// Code

const apiKeySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  tier: {
    type: Number,
    required: true,
  },
  owner: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const ApiKey = mongoose.model("ApiKey", apiKeySchema, "Developer-API-Keys");

const getAllA = async () => await ApiKey.find();
const getAByKey = async (key: string) => await ApiKey.findOne({ key });
const createA = async (
  key: string,
  tier: number,
  owner: string,
  name: string
) => await ApiKey.create({ key, tier, owner, name });
const deleteAByKey = async (key: string) =>
  await ApiKey.findOneAndDelete({ key });
const updateAByKey = async (key: string, tier: number, name: string) =>
  await ApiKey.findOneAndUpdate({ key }, { tier, name });

// Exports

export { ApiKey, getAllA, getAByKey, createA, deleteAByKey, updateAByKey };
