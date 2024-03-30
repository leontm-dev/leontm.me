// Imports

import crypto from "crypto";

// Code

const random = () => crypto.randomBytes(128).toString("base64");
const auth = (salt: string, password: string) => {
  return crypto
    .createHmac("sha512", [salt, password].join("/"))
    .update(<string>process.env.GLOBAL_SECRET)
    .digest("hex");
};

// Exports

export { random, auth };
