// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config({ encoding: "utf-8" });

const validateReq = (
  req: express.Request,
  tier: 1 | 2 | 3 | 4 | 5 | 6
): { p: boolean; requestedTier: number; currentTier: number } => {
  let tier6 = false;
  let tier5 = false;
  let tier4 = false;
  let tier3 = false;
  let tier2 = false;
  let tier1 = false;
  console.log(req.headers);
  let returnObj: { p: boolean; requestedTier: number; currentTier: number } = {
    p: false,
    requestedTier: tier,
    currentTier: 0,
  };
  if (tier === 6) {
    if (
      req.headers.authorization == `DEV ${process.env.DEV_TOKEN}` &&
      req.headers["x-leontm-tier"] == "6" &&
      req.headers["x-leontm-auth"] == process.env.ADMIN_KEY
    ) {
      tier6 = true;
    }
  } else if (tier === 5) {
    if (
      req.baseUrl === "leontm.me" &&
      req.headers.authorization == `DEV ${process.env.DEV_TOKEN}`
    ) {
      tier5 = true;
    }
  } else if (tier === 4) {
    if (req.headers.authorization == `DEV ${process.env.DEV_TOKEN}`) {
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
  if (tier1) {
    returnObj.currentTier = 1;
  }
  if (tier2) {
    returnObj.currentTier = 2;
  }
  if (tier3) {
    returnObj.currentTier = 3;
  }
  if (tier4) {
    returnObj.currentTier = 4;
  }
  if (tier5) {
    returnObj.currentTier = 5;
  }
  if (tier6) {
    returnObj.currentTier = 6;
  }
  if (tier === 6 && tier6) {
    returnObj.p = true;
  } else if (tier === 5 && (tier5 || tier6)) {
    returnObj.p = true;
  } else if (tier === 4 && (tier4 || tier5 || tier6)) {
    returnObj.p = true;
  } else if (tier === 3 && (tier3 || tier4 || tier5 || tier6)) {
    returnObj.p = true;
  } else if (tier === 2 && (tier2 || tier3 || tier4 || tier5 || tier6)) {
    returnObj.p = true;
  } else if (
    tier === 1 &&
    (tier1 || tier2 || tier3 || tier4 || tier5 || tier6)
  ) {
    returnObj.p = true;
  }
  returnObj.p = false;
  return returnObj;
};

// Exports

export default validateReq;
