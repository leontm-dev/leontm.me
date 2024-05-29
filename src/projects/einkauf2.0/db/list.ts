// Imports

import mongoose from "mongoose";

// Code

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        reference: {
          type: String,
          required: false,
        },
        quantity: {
          type: Number,
          required: true,
        },
        bought: {
          type: Number,
          default: 0,
        },
        addedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        boughtBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: false,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    default: [],
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
    ref: "einkauf2-0_Family",
    required: true,
  },
});

const ListModel = mongoose.model(
  "einkauf2-0_List",
  listSchema,
  "einkauf2-0_Lists"
);
