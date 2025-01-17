// Imports

import mongoose from "mongoose";

// Code

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  websites: {
    type: [String],
    default: [],
  },
});

const CollectionModel = mongoose.model(
  "ExcludeMe-Collection",
  collectionSchema,
  "ExcludeMe-Collections"
);

const createC = async (name: string, user: string, websites: string[]) =>
  await CollectionModel.create({ name, creator: user, websites });
const getAllC = async () => await CollectionModel.find();
const deleteCById = async (id: string) =>
  await CollectionModel.findByIdAndDelete(id);
const deleteCByName = async (name: string) =>
  await CollectionModel.findOneAndDelete({ name });
const getCById = async (id: string) => await CollectionModel.findById(id);
const getCByName = async (name: string) =>
  await CollectionModel.findOne({ name });
const updateCById = async (id: string, websites: string[]) =>
  await CollectionModel.findByIdAndUpdate(id, {
    websites,
    lastUpdated: Date.now(),
  });
const updateCByName = async (name: string, websites: string[]) =>
  await CollectionModel.findOneAndUpdate(
    { name },
    {
      websites,
      lastUpdated: Date.now(),
    }
  );

// Exports

export {
  CollectionModel,
  createC,
  getAllC,
  deleteCById,
  deleteCByName,
  getCById,
  getCByName,
  updateCById,
  updateCByName,
};
// Path: src/db/user.ts
