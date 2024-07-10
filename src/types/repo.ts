// Imports

import mongoose from "mongoose";

// Code

type importableRepo = {
  fileName: string;
  command: string;
  name: string;
  url: string;
  lastModifiedAt: Date;
  createdAt: Date;
};

// Exports

export { importableRepo };
