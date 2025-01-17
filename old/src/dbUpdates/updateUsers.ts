// Imports

import mongoose from "mongoose";

// Project-Imports

import { UserModel } from "../db/users";

// Code

const updateUsers = async () => {
  try {
    const users = await UserModel.find();

    for (const user of users) {
      let updated = false;

      if (!user.information) {
        user.information = {
          bannerUrl: "",
          profilePictureUrl: "",
          description: "",
          age: -1,
          location: "",
          website: "",
          shownConnections: [],
          tags: [],
          profileColor: "255, 0, 0",
        };
        updated = true;
      } else {
        if (!user.information.bannerUrl) {
          user.information.bannerUrl = "";
          updated = true;
        }
        if (!user.information.profilePictureUrl) {
          user.information.profilePictureUrl = "";
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
