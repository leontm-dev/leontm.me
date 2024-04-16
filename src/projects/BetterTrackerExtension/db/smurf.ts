// Imports

import mongoose from "mongoose";

// Presets

const smurfSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  statsOnSave: {
    playtime: {
      type: Number,
      required: true,
    },
    kda: {
      type: Number,
      required: true,
    },
    winRate: {
      type: Number,
      required: true,
    },
    hsRate: {
      type: Number,
      required: true,
    },
  },
  savedOn: {
    type: Date,
    default: Date.now,
  },
});

const smurfModel = mongoose.model("smurf", smurfSchema, "bte-smurfs");

// Functions

const create = async (url: string, statsOnSave: Record<string, any>) =>
  await smurfModel.create({ url, statsOnSave });

// Exports

export { create };
