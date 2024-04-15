// Imports

import crypto from "crypto";
import env from "dotenv";

// Code

env.config({ debug: true });

const random = () => crypto.randomBytes(128).toString("base64");
const auth = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", <string>[salt, password].join("/"))
    .update(<string>process.env.GLOBAL_SECRET)
    .digest("hex");
};

// Exports

export { random, auth };
