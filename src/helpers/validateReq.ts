// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config();

const validateReq = (req: express.Request, tier: 1 | 2 | 3): boolean => {
  let tier3 = false;
  let tier2 = false;
  let tier1 = false;
  if (tier === 3) {
    if (req.baseUrl === "leontm.me") {
      tier3 = true;
    }
  } else if (tier === 2) {
    if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
      tier2 = true;
    }
  } else if (tier === 1) {
  }
  if (tier === 3 && tier3) {
    return true;
  } else if ((tier === 2 && tier2) || tier3) {
    return true;
  } else if ((tier === 1 && tier1) || (tier2 && tier2) || (tier3 && tier3)) {
    return true;
  } else {
    return false;
  }
};

// Exports

export default validateReq;
