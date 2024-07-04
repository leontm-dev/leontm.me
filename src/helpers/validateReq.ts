// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config();

const validateReq = (
  req: express.Request,
  tier: 1 | 2 | 3 | 4 | 5
): boolean => {
  let tier5 = false;
  let tier4 = false;
  let tier3 = false;
  let tier2 = false;
  let tier1 = false;
  if (tier === 5) {
    if (
      req.baseUrl === "leontm.me" &&
      req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`
    ) {
      tier5 = true;
    }
  } else if (tier === 4) {
    if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
      tier4 = true;
    }
  } else if (tier === 3) {
    const websites: string[] = [];
    if (websites.includes(req.baseUrl)) {
      tier3 = true;
    }
  } else if (tier === 2) {
  } else if (tier === 1) {
  }
  if (tier === 5 && tier5) {
    return true;
  } else if ((tier === 4 && tier4) || tier5) {
    return true;
  } else if ((tier === 3 && tier3) || tier4 || tier5) {
    return true;
  } else if ((tier === 2 && tier2) || tier3 || tier4 || tier5) {
    return true;
  } else if ((tier === 1 && tier1) || tier2 || tier3 || tier4 || tier5) {
    return true;
  }
  return false;
};

// Exports

export default validateReq;
