// Imports

import mongoose from "mongoose";

// Project-Imports

import { UserModel } from "../db/user";

// Code

const updateUsers = async () => {
  try {
    const users = await UserModel.find();

    for (const user of users) {
      let updated = false;

      if (!user.information) {
        user.information = {
          banner: "",
          pfp: "",
          description: "",
        };
        updated = true;
      } else {
        if (!user.information.banner) {
          user.information.banner = "";
          updated = true;
        }
        if (!user.information.pfp) {
          user.information.pfp = "";
          updated = true;
        }
        if (!user.information.description) {
          user.information.description = "";
          updated = true;
        }
      }

      if (updated) {
        await user.save();
        console.log(`Updated user: ${user.username}`);
      }
    }

    console.log("All users updated");
  } catch (error) {
    console.error("Error updating users:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Exports

export default updateUsers;
