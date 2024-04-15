// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config();

const validateReq = (req: express.Request, tier: 1): boolean => {
  const result1 =
    req.url.startsWith("https://leontm.me") ||
    req.headers["leontm-auth"] == `DEV ${process.env.ADMIN_KEY}`;
  const result = result1;
  return result;
};

// Exports

export default validateReq;
