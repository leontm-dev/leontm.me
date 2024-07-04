// Imports

import mongoose from "mongoose";

// Code

type importableRepo = {
  fileName: string;
  command: string;
  name: string;
  url: string;
  _id: mongoose.ObjectId;
};

// Exports

export { importableRepo };
