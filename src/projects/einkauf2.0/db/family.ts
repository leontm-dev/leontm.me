// Imports

import mongoose from "mongoose";

// Code

const familySchema = new mongoose.Schema({
  members: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        permissions: {
          type: {
            view: {
              type: Boolean,
              default: false,
            },
            delete: {
              type: Boolean,
              default: false,
            },
            add: {
              type: Boolean,
              default: false,
            },
            edit: {
              type: Boolean,
              default: false,
            },
            moderate: {
              type: Boolean,
              default: false,
            },
          },
        },
      },
    ],
    required: true,
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const FamilyModel = mongoose.model(
  "einkauf2-0_Family",
  familySchema,
  "einkauf2-0_Families"
);
const createF = async (members: any[], leader: string) =>
  await FamilyModel.create({ members, leader });
const getAllF = async () => await FamilyModel.find();
const getFById = async (id: string) => await FamilyModel.findById(id);
const getFByLeader = async (leader: string) =>
  await FamilyModel.findOne({ leader });
const deleteFById = async (id: string) =>
  await FamilyModel.findByIdAndDelete(id);
const updateFById = async (id: string, members: any[]) => {
  await FamilyModel.findByIdAndUpdate(id, {
    members,
  });
};

// Exports

export {
  FamilyModel,
  createF,
  getAllF,
  getFById,
  getFByLeader,
  deleteFById,
  updateFById,
};
